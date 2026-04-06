import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import ServiceTaxiLocal from "./pages/ServiceTaxiLocal.tsx";
import ServiceAeroport from "./pages/ServiceAeroport.tsx";
import ServiceSurvoltage from "./pages/ServiceSurvoltage.tsx";
import ServiceDeblocage from "./pages/ServiceDeblocage.tsx";
import ServiceGroupe from "./pages/ServiceGroupe.tsx";
import ServiceNuit from "./pages/ServiceNuit.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/taxi-local" element={<ServiceTaxiLocal />} />
          <Route path="/services/aeroport" element={<ServiceAeroport />} />
          <Route path="/services/survoltage" element={<ServiceSurvoltage />} />
          <Route path="/services/deblocage" element={<ServiceDeblocage />} />
          <Route path="/services/groupe" element={<ServiceGroupe />} />
          <Route path="/services/nuit" element={<ServiceNuit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
