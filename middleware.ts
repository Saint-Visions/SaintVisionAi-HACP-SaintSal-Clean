import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Get the current session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;
  const isPublicRoute = [
    "/",
    "/login",
    "/signup",
    "/pricing",
    "/privacy",
    "/terms",
    "/help",
    "/why",
    "/chrome-install",
    "/checkout-success",
  ].includes(pathname);

  // Auth-protected routes
  const protectedRoutes = [
    "/dashboard",
    "/console",
    "/crm",
    "/partnertech",
    "/enterprise",
    "/setup",
    "/upgrade",
    "/settings",
    "/admin",
    "/referral",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // Redirect to login if accessing protected route without auth
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL("/login", req.url);
    redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Get user profile if authenticated
  if (session?.user) {
    const { data: userProfile } = await supabase
      .from("users")
      .select("subscription_tier, onboarded")
      .eq("id", session.user.id)
      .single();

    // Redirect to setup if user is not onboarded
    if (
      userProfile &&
      !userProfile.onboarded &&
      !pathname.startsWith("/setup") &&
      pathname !== "/logout"
    ) {
      return NextResponse.redirect(new URL("/setup", req.url));
    }

    // Role-based access control
    const tier = userProfile?.subscription_tier || "free";

    // $97+ tier routes (PRO+)
    const proRoutes = ["/partnertech", "/crm"];
    if (
      proRoutes.some((route) => pathname.startsWith(route)) &&
      !["pro", "enterprise", "elite"].includes(tier)
    ) {
      return NextResponse.redirect(new URL("/upgrade", req.url));
    }

    // $497+ tier routes (Enterprise+)
    const enterpriseRoutes = ["/enterprise", "/admin"];
    if (
      enterpriseRoutes.some((route) => pathname.startsWith(route)) &&
      !["enterprise", "elite"].includes(tier)
    ) {
      return NextResponse.redirect(new URL("/upgrade", req.url));
    }

    // Admin-only routes
    if (pathname.startsWith("/admin") && tier !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Redirect authenticated users away from auth pages
  if (session && ["/login", "/signup"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
