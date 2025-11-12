import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, FileText, Clock, User, AlertCircle } from "lucide-react";
import { CustomerHeader } from "@/components/customer-service/CustomerHeader";

type SolicitacaoData = {
  id: number;
  titulo: string;
  tipo: string;
  status: string;
  protocolo: string;
  proposta: string;
  sinistro?: string;
  data: string;
  descricao: string;
  anexos?: number;
  ramo: string;
  timeline: Array<{ data: string; evento: string; usuario: string }>;
};

const solicitacoesData: Record<string, SolicitacaoData> = {
  "1": {
    id: 1,
    titulo: "Falta de Retorno sobre Sinistro",
    tipo: "reclamacao",
    status: "aberta",
    protocolo: "2024001678",
    proposta: "PROP-2024-001",
    sinistro: "SIN-2025-0001",
    data: "04/10/2025 21:13",
    descricao: "Cliente não recebeu retorno há 15 dias",
    ramo: "Auto",
    timeline: [
      { data: "04/10/2025 21:13", evento: "Solicitação aberta", usuario: "Sistema" },
      { data: "05/10/2025 09:30", evento: "Encaminhado para análise", usuario: "João Silva" },
      { data: "10/10/2025 14:20", evento: "Documentação solicitada", usuario: "Maria Santos" },
      { data: "15/10/2025 10:15", evento: "Cliente respondeu com documentos", usuario: "Sistema" }
    ]
  },
  "2": {
    id: 2,
    titulo: "Atraso na Análise de Documentação",
    tipo: "solicitacao",
    status: "andamento",
    protocolo: "2024001567",
    proposta: "PROP-2024-002",
    data: "11/10/2025 21:13",
    descricao: "Documentação enviada aguardando análise",
    anexos: 2,
    ramo: "Habitacional",
    timeline: [
      { data: "11/10/2025 21:13", evento: "Solicitação criada", usuario: "Sistema" },
      { data: "12/10/2025 08:45", evento: "Em análise", usuario: "Carlos Oliveira" }
    ]
  }
};

const SolicitacaoDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const solicitacao = solicitacoesData[id as keyof typeof solicitacoesData];

  if (!solicitacao) {
    return (
      <div className="min-h-screen bg-background">
        <CustomerHeader />
        <div className="container mx-auto px-6 py-6">
          <p>Solicitação não encontrada</p>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="container mx-auto px-6 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/atendimento/solicitacoes")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Histórico
        </Button>

        <Card className={solicitacao.tipo === "reclamacao" ? "border-status-alert" : ""}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-2xl">{solicitacao.titulo}</CardTitle>
                  {getStatusBadge(solicitacao.status, solicitacao.tipo)}
                  <Badge variant="outline">{solicitacao.ramo}</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mt-4">
                  <div>
                    <span className="font-medium">Protocolo:</span> {solicitacao.protocolo}
                  </div>
                  <div>
                    <span className="font-medium">Proposta:</span> {solicitacao.proposta}
                  </div>
                  {solicitacao.sinistro && (
                    <div>
                      <span className="font-medium">Sinistro:</span> {solicitacao.sinistro}
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Data:</span> {solicitacao.data}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Descrição</h3>
              <p className="text-muted-foreground">{solicitacao.descricao}</p>
            </div>

            {solicitacao.anexos && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Anexos</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{solicitacao.anexos} arquivos anexados</span>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-4">Timeline</h3>
              <div className="space-y-4">
                {solicitacao.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 relative">
                    {index < solicitacao.timeline.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-border" />
                    )}
                    <div className="mt-1">
                      <Clock className="h-5 w-5 text-primary bg-background relative z-10" />
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{item.evento}</span>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <span>{item.data}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {item.usuario}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Adicionar Comentário</h3>
              <Textarea 
                placeholder="Digite seu comentário sobre esta solicitação..."
                className="mb-2"
              />
              <Button>Enviar Comentário</Button>
            </div>

            {solicitacao.tipo === "reclamacao" && (
              <div className="bg-status-alert/10 border border-status-alert rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-status-alert mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-status-alert mb-2">
                    Atenção: Esta é uma reclamação formal
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    É necessário providenciar resposta adequada e acompanhar os prazos estabelecidos.
                  </p>
                  <div className="flex gap-2">
                    <Button className="bg-status-alert hover:bg-status-alert/90">
                      Reiterar
                    </Button>
                    <Button variant="outline">
                      Escalar para N2
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-4 border-t">
              <Button variant="outline" onClick={() => navigate("/atendimento/solicitacoes")}>
                Voltar
              </Button>
              {solicitacao.status !== "resolvido" && (
                <Button variant="default">
                  Marcar como Resolvido
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SolicitacaoDetalhes;
