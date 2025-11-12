import { CustomerHeader } from "@/components/customer-service/CustomerHeader";
import { HistoricoSolicitacoes } from "@/components/customer-service/tabs/HistoricoSolicitacoes";
import { RightRail } from "@/components/customer-service/RightRail";

const HistoricoSolicitacoesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="flex w-full">
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold mb-6">Histórico de Solicitações</h1>
            <HistoricoSolicitacoes />
          </div>
        </main>
        <RightRail />
      </div>
    </div>
  );
};

export default HistoricoSolicitacoesPage;
