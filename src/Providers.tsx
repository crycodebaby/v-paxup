// src/Providers.tsx

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Konfiguriere den QueryClient mit sinnvollen Standardwerten
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 Minute
      retry: 1,
      refetchOnWindowFocus: false, // Verhindert unnötige Refetches
    },
  },
});

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={150}>
        {children}
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
