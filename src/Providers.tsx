// src/Providers.tsx
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/ThemeProvider";

// Stabilere Defaults für React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // 1 Minute
      gcTime: 5 * 60_000, // 5 Minuten Garbage Collection
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={150}>
          {children}
          {/* Toaster global, reagiert automatisch auf Light/Dark */}
          <Sonner richColors position="top-right" />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
