import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PatientManagementPage from "./pages/PatientManagementPage";
import ExaminationPage from "./pages/ExaminationPage";
import InvestigationsPage from "./pages/InvestigationsPage";
import PrescriptionServicesPage from "./pages/PrescriptionServicesPage";
import ReferralFollowupPage from "./pages/ReferralFollowupPage"; // New import
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
          <Route path="/prescription-services" element={<PrescriptionServicesPage />} />
          <Route path="/referral-followup" element={<ReferralFollowupPage />} /> {/* New route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;