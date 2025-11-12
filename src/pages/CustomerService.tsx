import { useState } from "react";
import { CustomerHeader } from "@/components/customer-service/CustomerHeader";
import { CustomerTabs } from "@/components/customer-service/CustomerTabs";
import { RightRail } from "@/components/customer-service/RightRail";

const CustomerService = () => {
  const [activeTab, setActiveTab] = useState("resumo");

  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="flex w-full">
        <main className="flex-1 overflow-auto">
          <CustomerTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </main>
        <RightRail />
      </div>
    </div>
  );
};

export default CustomerService;
