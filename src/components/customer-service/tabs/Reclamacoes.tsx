import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, CheckCircle } from "lucide-react";

const reclamacoesAbertas = [
  {
    id: 1,
    titulo: "Atraso na Análise de Documentação",
    protocolo: "2024001567",
    dataAbertura: "11/10/2025 21:13",
    tempoAberto: "26 dias",
    descricao: "Cliente insatisfeito com tempo de análise de documentação. Já foram enviados todos os documentos solicitados há mais de 3 semanas.",
    prazoVencido: true
  },
  {
    id: 2,
    titulo: "Falta de Retorno sobre Sinistro",
    protocolo: "2024001678",
    dataAbertura: "04/10/2025 21:13",
    tempoAberto: "33 dias",
    descricao: "Cliente não recebeu retorno sobre andamento do sinistro após vistoria realizada. Prazo de resposta já foi ultrapassado.",
    prazoVencido: true
  }
];

const reclamacoesFechadas = [
  {
    id: 3,
    titulo: "Cobrança Indevida na Renovação",
    protocolo: "2024001234",
    dataAbertura: "15/09/2025 14:20",
    dataResolucao: "22/09/2025 16:45",
    tempoResolucao: "7 dias",
    descricao: "Cliente foi cobrado valor diferente do acordado na renovação. Resolvido com estorno e ajuste da apólice."
  }
];

export const Reclamacoes = () => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold">Reclamações Abertas</h3>
          <Badge className="bg-status-alert">{reclamacoesAbertas.length}</Badge>
        </div>

        <div className="space-y-4">
          {reclamacoesAbertas.map((item) => (
            <Card key={item.id} className="border-status-alert">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-status-alert" />
                      <CardTitle className="text-lg">{item.titulo}</CardTitle>
                      <Badge className="bg-status-alert">Aberta</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Protocolo:</span> {item.protocolo}
                      </div>
                      <div>
                        <span className="font-medium">Abertura:</span> {item.dataAbertura}
                      </div>
                      <div>
                        <span className="font-medium">Tempo aberto:</span>{" "}
                        <span className="text-status-alert font-semibold">{item.tempoAberto}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {item.prazoVencido && (
                  <div className="flex items-center gap-2 p-3 bg-status-alert/10 border border-status-alert rounded-lg">
                    <Clock className="h-5 w-5 text-status-alert" />
                    <p className="text-sm font-medium text-status-alert">
                      É necessário reiterar a reclamação para a área responsável
                    </p>
                  </div>
                )}
                <p className="text-sm">{item.descricao}</p>
                <div className="flex gap-2">
                  <Button className="bg-primary">Reiterar</Button>
                  <Button variant="outline">Ver Detalhes Completos</Button>
                  <Button variant="outline">Escalar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold">Reclamações Fechadas</h3>
          <Badge variant="secondary">{reclamacoesFechadas.length}</Badge>
        </div>

        <div className="space-y-4">
          {reclamacoesFechadas.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <CardTitle className="text-lg">{item.titulo}</CardTitle>
                      <Badge className="bg-success">Resolvida</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Protocolo:</span> {item.protocolo}
                      </div>
                      <div>
                        <span className="font-medium">Abertura:</span> {item.dataAbertura}
                      </div>
                      <div>
                        <span className="font-medium">Resolução:</span> {item.dataResolucao}
                      </div>
                      <div>
                        <span className="font-medium">Tempo:</span>{" "}
                        <span className="text-success font-semibold">{item.tempoResolucao}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{item.descricao}</p>
                <Button variant="outline" size="sm">Ver Detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
