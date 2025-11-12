import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CheckCircle, XCircle } from "lucide-react";

const ofertas = [
  {
    id: 1,
    produto: "Seguro Auto Premium",
    descricao: "Upgrade de cobertura com assistência 24h e carro reserva",
    data: "15/10/2025",
    status: "aceita",
    valor: "R$ 2.450,00/ano"
  },
  {
    id: 2,
    produto: "Seguro Residencial Completo",
    descricao: "Cobertura completa para imóvel com valor de até R$ 500mil",
    data: "01/10/2025",
    status: "recusada",
    valor: "R$ 890,00/ano"
  },
  {
    id: 3,
    produto: "Proteção Itens Pessoais",
    descricao: "Seguro para smartphone, notebook e outros itens pessoais",
    data: "20/09/2025",
    status: "pendente",
    valor: "R$ 45,00/mês"
  },
  {
    id: 4,
    produto: "Seguro Vida Individual",
    descricao: "Cobertura por morte e invalidez com capital segurado de R$ 100mil",
    data: "05/09/2025",
    status: "aceita",
    valor: "R$ 68,00/mês"
  }
];

export const HistoricoOfertas = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "aceita":
        return (
          <Badge className="bg-success">
            <CheckCircle className="h-3 w-3 mr-1" />
            Aceita
          </Badge>
        );
      case "recusada":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            Recusada
          </Badge>
        );
      case "pendente":
        return (
          <Badge className="bg-warning">
            <TrendingUp className="h-3 w-3 mr-1" />
            Pendente
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Todas
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Aceitas
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Recusadas
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Pendentes
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ofertas.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base mb-1">{item.produto}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.descricao}</p>
                </div>
                {getStatusBadge(item.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Valor:</span>
                  <span className="font-semibold text-primary">{item.valor}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Data da Oferta:</span>
                  <span>{item.data}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
