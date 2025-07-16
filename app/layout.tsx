import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAINTSAL™ - Divine AI Enterprise Platform",
  description: "Divine AI execution platform • Cookin' Knowledge",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
