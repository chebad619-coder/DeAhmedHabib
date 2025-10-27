import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PatientManagementPage from "./pages/PatientManagementPage";
import ExaminationPage from "./pages/ExaminationPage";
import InvestigationsPage from "./pages/InvestigationsPage";
import PrescriptionServicesPage from "./pages/PrescriptionServicesPage"; // New import
import ReferralFollowupPage from "./pages/ReferralFollowupPage"; // New import
import LibraryPage from "./pages/LibraryPage"; // New import
import ReportsPage from "./pages/ReportsPage"; // New import
import SettingsPage from "./pages/SettingsPage"; // New import
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/patient-management" element={<PatientManagementPage />} />
          <Route path="/examination" element={<ExaminationPage />} />
          <Route path="/investigations" element={<InvestigationsPage />} />
          <Route path="/prescription-services" element={<PrescriptionServicesPage />} /> {/* New route */}
          <Route path="/referral-followup" element={<ReferralFollowupPage />} /> {/* New route */}
          <Route path="/library" element={<LibraryPage />} /> {/* New route */}
          <Route path="/reports" element={<ReportsPage />} /> {/* New route */}
          <Route path="/settings" element={<SettingsPage />} /> {/* New route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;