import { CustomerHeader } from "@/components/customer-service/CustomerHeader";
import { Reclamacoes } from "@/components/customer-service/tabs/Reclamacoes";
import { RightRail } from "@/components/customer-service/RightRail";

const ReclamacoesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="flex w-full">
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold mb-6">Reclamações</h1>
            <Reclamacoes />
          </div>
        </main>
        <RightRail />
      </div>
    </div>
  );
};

export default ReclamacoesPage;
