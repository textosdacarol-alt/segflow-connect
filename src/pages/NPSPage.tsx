import { CustomerHeader } from "@/components/customer-service/CustomerHeader";
import { NPS } from "@/components/customer-service/tabs/NPS";
import { RightRail } from "@/components/customer-service/RightRail";

const NPSPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="flex w-full">
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold mb-6">NPS - Net Promoter Score</h1>
            <NPS />
          </div>
        </main>
        <RightRail />
      </div>
    </div>
  );
};

export default NPSPage;
