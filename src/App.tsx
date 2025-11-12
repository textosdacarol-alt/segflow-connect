import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CustomerService from "./pages/CustomerService";
import HistoricoSolicitacoesPage from "./pages/HistoricoSolicitacoesPage";
import HistoricoComunicacoesPage from "./pages/HistoricoComunicacoesPage";
import HistoricoOfertasPage from "./pages/HistoricoOfertasPage";
import ApolicesAtivasPage from "./pages/ApolicesAtivasPage";
import ApolicesInativasPage from "./pages/ApolicesInativasPage";
import AssistenciasPage from "./pages/AssistenciasPage";
import SinistrosPage from "./pages/SinistrosPage";
import NPSPage from "./pages/NPSPage";
import ReclamacoesPage from "./pages/ReclamacoesPage";
import SolicitacaoDetalhes from "./pages/SolicitacaoDetalhes";
import ComunicacaoDetalhes from "./pages/ComunicacaoDetalhes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/atendimento" element={<CustomerService />} />
          <Route path="/atendimento/solicitacoes" element={<HistoricoSolicitacoesPage />} />
          <Route path="/atendimento/solicitacoes/:id" element={<SolicitacaoDetalhes />} />
          <Route path="/atendimento/comunicacoes" element={<HistoricoComunicacoesPage />} />
          <Route path="/atendimento/comunicacoes/:id" element={<ComunicacaoDetalhes />} />
          <Route path="/atendimento/ofertas" element={<HistoricoOfertasPage />} />
          <Route path="/atendimento/apolices-ativas" element={<ApolicesAtivasPage />} />
          <Route path="/atendimento/apolices-inativas" element={<ApolicesInativasPage />} />
          <Route path="/atendimento/assistencias" element={<AssistenciasPage />} />
          <Route path="/atendimento/sinistros" element={<SinistrosPage />} />
          <Route path="/atendimento/nps" element={<NPSPage />} />
          <Route path="/atendimento/reclamacoes" element={<ReclamacoesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
