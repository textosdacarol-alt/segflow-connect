import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Search, FileText, AlertCircle, Clock, CheckCircle } from "lucide-react";

const solicitacoes = [
  {
    id: 1,
    titulo: "Falta de Retorno sobre Sinistro",
    tipo: "reclamacao",
    status: "aberta",
    protocolo: "2024001678",
    proposta: "PROP-2024-001",
    sinistro: "SIN-2025-0001",
    data: "04/10/2025 21:13",
    descricao: "Cliente não recebeu retorno há 15 dias",
    ramo: "Auto"
  },
  {
    id: 2,
    titulo: "Atraso na Análise de Documentação",
    tipo: "solicitacao",
    status: "andamento",
    protocolo: "2024001567",
    proposta: "PROP-2024-002",
    data: "11/10/2025 21:13",
    descricao: "Documentação enviada aguardando análise",
    anexos: 2,
    ramo: "Habitacional"
  },
  {
    id: 3,
    titulo: "Solicitação de Sinistro",
    tipo: "solicitacao",
    status: "analise",
    protocolo: "2024001890",
    proposta: "PROP-2024-003",
    data: "20/10/2025 14:30",
    descricao: "Abertura de sinistro para vidro quebrado",
    ramo: "Auto"
  },
  {
    id: 4,
    titulo: "Dúvida sobre Cobertura",
    tipo: "solicitacao",
    status: "resolvido",
    protocolo: "2024001234",
    proposta: "PROP-2024-004",
    data: "05/10/2025 10:15",
    descricao: "Cliente questionou sobre cobertura de danos elétricos",
    ramo: "Residencial"
  }
];

export const HistoricoSolicitacoes = () => {
  const navigate = useNavigate();
  
  const getStatusBadge = (status: string, tipo: string) => {
    if (tipo === "reclamacao") {
      return <Badge className="bg-status-alert">Reclamação Aberta</Badge>;
    }
    
    switch (status) {
      case "aberta":
        return <Badge className="bg-status-alert">Aberta</Badge>;
      case "andamento":
        return <Badge className="bg-warning">Em Andamento</Badge>;
      case "analise":
        return <Badge className="bg-status-pending">Em Análise</Badge>;
      case "resolvido":
        return <Badge className="bg-success">Resolvido</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por nº de proposta, sinistro ou palavra-chave..." 
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Todos
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Vida
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Danos
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Auto
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Habitacional
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Prestamista
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Rural
        </Badge>
      </div>

      <div className="space-y-4">
        {solicitacoes.map((item) => (
          <Card 
            key={item.id} 
            className={item.tipo === "reclamacao" ? "border-status-alert" : ""}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{item.titulo}</CardTitle>
                    {getStatusBadge(item.status, item.tipo)}
                    <Badge variant="outline">{item.ramo}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">Protocolo:</span> {item.protocolo}
                    </div>
                    <div>
                      <span className="font-medium">Proposta:</span> {item.proposta}
                    </div>
                    {item.sinistro && (
                      <div>
                        <span className="font-medium">Sinistro:</span> {item.sinistro}
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Data:</span> {item.data}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{item.descricao}</p>
              {item.anexos && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <FileText className="h-4 w-4" />
                  <span>{item.anexos} anexos</span>
                </div>
              )}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate(`/atendimento/solicitacoes/${item.id}`)}
                >
                  Ver Detalhes
                </Button>
                {item.tipo === "reclamacao" && (
                  <Button variant="default" size="sm" className="bg-primary">
                    Reiterar
                  </Button>
                )}
                <Button variant="outline" size="sm">Adicionar Comentário</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
