import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Initialize Builder.io components
import "./components/builder";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Console from "./pages/Console";
import Dashboard from "./pages/Dashboard";
import CRM from "./pages/CRM";
import Pricing from "./pages/Pricing";
import HACP from "./pages/HACP";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ChromeInstall from "./pages/ChromeInstall";
import PartnerTech from "./pages/PartnerTech";
import Upgrade from "./pages/Upgrade";
import Settings from "./pages/Settings";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Help from "./pages/Help";
import AdminClients from "./pages/AdminClients";
import AdminLogs from "./pages/AdminLogs";
import ReferralInvite from "./pages/ReferralInvite";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <AuthProvider>
    <BrowserRouter basename={import.meta.env.PROD ? "/" : "/"}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/chrome-install" element={<ChromeInstall />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />

        {/* Protected Routes */}
        <Route
          path="/console"
          element={
            <ProtectedRoute>
              <Console />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/crm"
          element={
            <ProtectedRoute>
              <CRM />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hacp"
          element={
            <ProtectedRoute>
              <HACP />
            </ProtectedRoute>
          }
        />
        <Route
          path="/partnertech"
          element={
            <ProtectedRoute>
              <PartnerTech />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upgrade"
          element={
            <ProtectedRoute>
              <Upgrade />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/clients"
          element={
            <ProtectedRoute>
              <AdminClients />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/logs"
          element={
            <ProtectedRoute>
              <AdminLogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/referral/invite"
          element={
            <ProtectedRoute>
              <ReferralInvite />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// Mount the app
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
