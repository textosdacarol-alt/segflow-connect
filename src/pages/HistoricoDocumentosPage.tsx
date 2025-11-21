import { CustomerHeader } from "@/components/customer-service/CustomerHeader";
import { RightRail } from "@/components/customer-service/RightRail";
import { HistoricoDocumentos } from "@/components/customer-service/tabs/HistoricoDocumentos";

const HistoricoDocumentosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="flex w-full">
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-6">
            <HistoricoDocumentos />
          </div>
        </main>
        <RightRail />
      </div>
    </div>
  );
};

export default HistoricoDocumentosPage;
