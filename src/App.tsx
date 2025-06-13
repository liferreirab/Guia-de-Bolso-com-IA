import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import Clarity from '@microsoft/clarity';
import ScrollPopup from './components/ScrollPopup'; // adjust path as needed


const queryClient = new QueryClient();
const PIXEL_ID = '398220617905716';

const projectId = "ruf67xmebx"
Clarity.init(projectId);

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.init(PIXEL_ID);
    ReactPixel.pageView(); // Initial page load
  }, []);

  useEffect(() => {
    ReactPixel.pageView(); // On route change
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PixelTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
