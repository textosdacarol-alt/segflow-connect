import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Paperclip, Plus } from "lucide-react";

const comunicacoes = [
  {
    id: 1,
    tipo: "WhatsApp",
    assunto: "Confirmação de Sinistro",
    data: "03/10/2025 15:45",
    mensagem: "Enviado comprovante de atendimento e próximos passos",
    anexos: 1
  },
  {
    id: 2,
    tipo: "E-mail",
    assunto: "Renovação de Apólice",
    data: "25/09/2025 09:30",
    mensagem: "Informações sobre renovação e valores atualizados",
    anexos: 0
  },
  {
    id: 3,
    tipo: "WhatsApp",
    assunto: "Documentação Recebida",
    data: "20/09/2025 14:20",
    mensagem: "Confirmação de recebimento de documentos para análise",
    anexos: 0
  },
  {
    id: 4,
    tipo: "E-mail",
    assunto: "Boas-vindas",
    data: "01/09/2025 10:00",
    mensagem: "Mensagem de boas-vindas e informações sobre a apólice contratada",
    anexos: 2
  }
];

export const HistoricoComunicacoes = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Todas
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Com Mídia
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Sem Mídia
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            E-mail
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            WhatsApp
          </Badge>
        </div>
        <Button className="bg-primary">
          <Plus className="h-4 w-4 mr-2" />
          Nova Comunicação
        </Button>
      </div>

      <div className="space-y-4">
        {comunicacoes.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {item.tipo === "WhatsApp" ? (
                      <MessageSquare className="h-5 w-5 text-success" />
                    ) : (
                      <Mail className="h-5 w-5 text-primary" />
                    )}
                    <CardTitle className="text-base">{item.tipo}</CardTitle>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm font-medium">{item.assunto}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.data}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">{item.mensagem}</p>
              {item.anexos > 0 && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Paperclip className="h-4 w-4" />
                  <span>{item.anexos} anexo{item.anexos > 1 ? 's' : ''}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
