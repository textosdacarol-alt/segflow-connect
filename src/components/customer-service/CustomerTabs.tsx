import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { ResumoCliente } from "./tabs/ResumoCliente";
import { HistoricoOfertas } from "./tabs/HistoricoOfertas";
import { ApolicesAtivas } from "./tabs/ApolicesAtivas";
import { ApolicesInativas } from "./tabs/ApolicesInativas";
import { Assistencias } from "./tabs/Assistencias";
import { Sinistros } from "./tabs/Sinistros";
import { NPS } from "./tabs/NPS";
import { Reclamacoes } from "./tabs/Reclamacoes";

interface CustomerTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export const CustomerTabs = ({ activeTab, onTabChange }: CustomerTabsProps) => {
  const navigate = useNavigate();
  
  const handleTabClick = (value: string) => {
    if (value === "solicitacoes") {
      navigate("/atendimento/solicitacoes");
    } else if (value === "comunicacoes") {
      navigate("/atendimento/comunicacoes");
    } else {
      onTabChange(value);
    }
  };

  return (
    <div className="container mx-auto px-6 py-6">
      <Tabs value={activeTab} onValueChange={handleTabClick} className="w-full">
        <TabsList className="w-full justify-start flex-wrap h-auto bg-muted p-1 gap-1">
          <TabsTrigger value="resumo" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Resumo do Cliente
          </TabsTrigger>
          <TabsTrigger value="solicitacoes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Histórico de Solicitações
          </TabsTrigger>
          <TabsTrigger value="comunicacoes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Histórico de Comunicações
          </TabsTrigger>
          <TabsTrigger value="ofertas" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Histórico de Ofertas
          </TabsTrigger>
          <TabsTrigger value="apolices-ativas" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Apólices Ativas
          </TabsTrigger>
          <TabsTrigger value="apolices-inativas" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Apólices Inativas
          </TabsTrigger>
          <TabsTrigger value="assistencias" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Assistências
          </TabsTrigger>
          <TabsTrigger value="sinistros" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Sinistros
          </TabsTrigger>
          <TabsTrigger value="nps" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            NPS
          </TabsTrigger>
          <TabsTrigger value="reclamacoes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Reclamações
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="resumo">
            <ResumoCliente />
          </TabsContent>
          <TabsContent value="ofertas">
            <HistoricoOfertas />
          </TabsContent>
          <TabsContent value="apolices-ativas">
            <ApolicesAtivas />
          </TabsContent>
          <TabsContent value="apolices-inativas">
            <ApolicesInativas />
          </TabsContent>
          <TabsContent value="assistencias">
            <Assistencias />
          </TabsContent>
          <TabsContent value="sinistros">
            <Sinistros />
          </TabsContent>
          <TabsContent value="nps">
            <NPS />
          </TabsContent>
          <TabsContent value="reclamacoes">
            <Reclamacoes />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
