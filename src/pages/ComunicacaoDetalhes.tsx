import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, MessageSquare, Mail } from "lucide-react";
import { CustomerHeader } from "@/components/customer-service/CustomerHeader";

const comunicacoesData = {
  "1": {
    id: 1,
    tipo: "whatsapp",
    assunto: "Confirmação de Sinistro",
    data: "03/10/2025 15:45",
    mensagem: "Enviado comprovante de atendimento e próximos passos",
    anexos: 1,
    remetente: "Maria Santos",
    destinatario: "Cliente",
    status: "enviado",
    conteudoCompleto: `Prezado(a) cliente,

Confirmamos o recebimento da sua solicitação de sinistro sob o protocolo SIN-2025-0001.

Próximos passos:
1. Análise da documentação enviada (prazo: 3 dias úteis)
2. Vistoria do veículo (agendamento em até 5 dias úteis)
3. Parecer técnico e aprovação

Você pode acompanhar o andamento através do nosso portal ou entrando em contato conosco.

Atenciosamente,
Equipe BB Seguros`
  },
  "2": {
    id: 2,
    tipo: "email",
    assunto: "Renovação de Apólice",
    data: "25/09/2025 09:30",
    mensagem: "Informações sobre renovação e valores atualizados",
    anexos: 0,
    remetente: "Sistema BB Seguros",
    destinatario: "samara.alves@email.com",
    status: "lido",
    conteudoCompleto: `Olá Samara,

Sua apólice de Seguro Residencial está próxima do vencimento (01/11/2025).

Valor atual: R$ 850,00/ano
Valor renovação: R$ 920,00/ano

Coberturas incluídas:
- Incêndio e Raio
- Danos Elétricos
- Roubo e Furto
- Responsabilidade Civil

Para renovar, basta responder este e-mail ou entrar em contato através do telefone (16) 3000-0000.

Equipe BB Seguros`
  }
};

const ComunicacaoDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const comunicacao = comunicacoesData[id as keyof typeof comunicacoesData];

  if (!comunicacao) {
    return (
      <div className="min-h-screen bg-background">
        <CustomerHeader />
        <div className="container mx-auto px-6 py-6">
          <p>Comunicação não encontrada</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomerHeader />
      <div className="container mx-auto px-6 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/atendimento/comunicacoes")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Histórico
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {comunicacao.tipo === "whatsapp" ? (
                    <MessageSquare className="h-5 w-5 text-success" />
                  ) : (
                    <Mail className="h-5 w-5 text-info" />
                  )}
                  <CardTitle className="text-2xl">{comunicacao.assunto}</CardTitle>
                  <Badge variant="outline" className="capitalize">
                    {comunicacao.tipo}
                  </Badge>
                  <Badge 
                    className={
                      comunicacao.status === "enviado" 
                        ? "bg-success" 
                        : comunicacao.status === "lido"
                        ? "bg-info"
                        : "bg-status-pending"
                    }
                  >
                    {comunicacao.status === "enviado" ? "Enviado" : "Lido"}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mt-4">
                  <div>
                    <span className="font-medium">Data:</span> {comunicacao.data}
                  </div>
                  <div>
                    <span className="font-medium">De:</span> {comunicacao.remetente}
                  </div>
                  <div>
                    <span className="font-medium">Para:</span> {comunicacao.destinatario}
                  </div>
                  {comunicacao.anexos > 0 && (
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{comunicacao.anexos} anexo(s)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Resumo</h3>
              <p className="text-muted-foreground">{comunicacao.mensagem}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Conteúdo Completo</h3>
              <div className="bg-muted/50 rounded-lg p-4 whitespace-pre-line">
                {comunicacao.conteudoCompleto}
              </div>
            </div>

            {comunicacao.anexos > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Anexos</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <FileText className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">comprovante_atendimento.pdf</p>
                      <p className="text-xs text-muted-foreground">245 KB</p>
                    </div>
                    <Button size="sm" variant="ghost">Download</Button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-4 border-t">
              <Button variant="outline" onClick={() => navigate("/atendimento/comunicacoes")}>
                Voltar
              </Button>
              <Button variant="default">
                Responder
              </Button>
              <Button variant="outline">
                Encaminhar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComunicacaoDetalhes;
