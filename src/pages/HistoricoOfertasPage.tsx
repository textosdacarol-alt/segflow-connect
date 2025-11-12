import { CustomerHeader } from "@/components/customer-service/CustomerHeader";
import { HistoricoOfertas } from "@/components/customer-service/tabs/HistoricoOfertas";
import { RightRail } from "@/components/customer-service/RightRail";

const HistoricoOfertasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="flex w-full">
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold mb-6">Histórico de Ofertas</h1>
            <HistoricoOfertas />
          </div>
        </main>
        <RightRail />
      </div>
    </div>
  );
};

export default HistoricoOfertasPage;
