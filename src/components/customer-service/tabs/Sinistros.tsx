import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, CheckCircle, XCircle, FileQuestion } from "lucide-react";

const sinistros = [
  {
    id: "S-2025-0001",
    status: "pendente",
    ramo: "Auto",
    dataAbertura: "01/10/2025",
    tempoAnalise: "37d 9h",
    cobertura: "Colisão",
    valorContratado: "R$ 50.000",
    prejuizo: "R$ 12.500",
    esteira: "Simplificada",
    pendencias: ["BO", "Fotos do Veículo"]
  },
  {
    id: "S-2025-0002",
    status: "analise",
    ramo: "Auto",
    dataAbertura: "20/09/2025",
    tempoAnalise: "48d 5h",
    cobertura: "Vidros",
    valorContratado: "R$ 5.000",
    prejuizo: "R$ 1.200",
    esteira: "Comum",
    pendencias: []
  },
  {
    id: "S-2025-0003",
    status: "pago",
    ramo: "Auto",
    dataAbertura: "15/08/2025",
    tempoAnalise: "84d 10h",
    cobertura: "Contra Terceiros",
    valorContratado: "R$ 100.000",
    prejuizo: "R$ 3.800",
    esteira: "Pagamento imediato",
    pendencias: []
  },
  {
    id: "S-2025-0004",
    status: "indeferido",
    ramo: "Auto",
    dataAbertura: "10/07/2025",
    tempoAnalise: "120d 7h",
    cobertura: "Roubo/Furto",
    valorContratado: "R$ 80.000",
    prejuizo: "R$ 80.000",
    esteira: "Não definida",
    pendencias: []
  },
  {
    id: "S-2025-0005",
    status: "analise",
    ramo: "Habitacional",
    dataAbertura: "10/09/2025",
    tempoAnalise: "58d 8h",
    cobertura: "Residencial",
    valorContratado: "R$ 200.000",
    prejuizo: "R$ 15.000",
    esteira: "Comum",
    pendencias: []
  }
];

export const Sinistros = () => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "pendente":
        return {
          badge: <Badge className="bg-status-alert"><AlertCircle className="h-3 w-3 mr-1" />Em aberto com pendência</Badge>,
          color: "border-status-alert"
        };
      case "analise":
        return {
          badge: <Badge className="bg-status-processing"><Clock className="h-3 w-3 mr-1" />Em análise</Badge>,
          color: "border-status-processing"
        };
      case "pago":
        return {
          badge: <Badge className="bg-success"><CheckCircle className="h-3 w-3 mr-1" />Pago</Badge>,
          color: "border-success"
        };
      case "indeferido":
        return {
          badge: <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Indeferido</Badge>,
          color: "border-destructive"
        };
      default:
        return {
          badge: <Badge>{status}</Badge>,
          color: ""
        };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Todos
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Auto
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Residencial
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Vida
        </Badge>
      </div>

      <div className="space-y-4">
        {sinistros.map((item) => {
          const statusConfig = getStatusConfig(item.status);
          return (
            <Card key={item.id} className={statusConfig.color}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{item.id}</CardTitle>
                      {statusConfig.badge}
                      <Badge variant="outline">{item.ramo}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Data abertura:</span>{" "}
                        <span className="font-medium">{item.dataAbertura}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Tempo de análise:</span>{" "}
                        <span className="font-medium">{item.tempoAnalise}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Cobertura:</span>{" "}
                        <span className="font-medium">{item.cobertura}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Valor contratado:</span>{" "}
                        <span className="font-medium text-primary">{item.valorContratado}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Prejuízo estimado:</span>{" "}
                        <span className="font-medium text-warning">{item.prejuizo}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Esteira:</span>{" "}
                        {item.esteira === "Não definida" ? (
                          <Badge variant="secondary" className="text-xs">{item.esteira}</Badge>
                        ) : (
                          <span className="font-medium">{item.esteira}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {item.pendencias.length > 0 && (
                  <div className="flex items-start gap-2 p-3 bg-status-alert/10 border border-status-alert/30 rounded-lg mb-4">
                    <FileQuestion className="h-5 w-5 text-status-alert mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-status-alert mb-1">Documentos pendentes:</p>
                      <p className="text-sm">{item.pendencias.join(", ")}</p>
                    </div>
                  </div>
                )}
                <Button variant="outline" size="sm">Ver Detalhes</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
