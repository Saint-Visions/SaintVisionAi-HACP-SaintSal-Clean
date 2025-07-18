import "./global.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Initialize Builder.io components
import "./components/builder/index";

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
import Setup from "./pages/Setup";
import Why from "./pages/Why";
import AdminClients from "./pages/AdminClients";
import AdminLogs from "./pages/AdminLogs";
import ReferralInvite from "./pages/ReferralInvite";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // Clean initialization without causing re-renders
  React.useEffect(() => {
    // Clear any base tag that might be interfering
    const baseTags = document.getElementsByTagName("base");
    for (let i = 0; i < baseTags.length; i++) {
      baseTags[i].remove();
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/why" element={<Why />} />
          <Route
            path="/chrome-install"
            element={
              <ProtectedRoute requiredTier="coretools">
                <ChromeInstall />
              </ProtectedRoute>
            }
          />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />

          {/* Protected Routes */}
          <Route
            path="/console"
            element={
              <ProtectedRoute requiredTier="unlimited">
                <Console />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredTier="free_trial">
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/crm"
            element={
              <ProtectedRoute requiredTier="partnertech">
                <CRM />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hacp"
            element={
              <ProtectedRoute requiredTier="coretools">
                <HACP />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnertech"
            element={
              <ProtectedRoute requiredTier="partnertech">
                <PartnerTech />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upgrade"
            element={
              <ProtectedRoute requiredTier="free_trial">
                <Upgrade />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute requiredTier="free_trial">
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/clients"
            element={
              <ProtectedRoute requiredTier="partnertech">
                <AdminClients />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/logs"
            element={
              <ProtectedRoute requiredTier="partnertech">
                <AdminLogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/referral/invite"
            element={
              <ProtectedRoute requiredTier="free_trial">
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
};

// Mount the app
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
