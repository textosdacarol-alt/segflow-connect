import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Car, Heart } from "lucide-react";

const apolicesInativas = [
  {
    id: 1,
    nome: "Seguro Vida Individual",
    proposta: "PROP-2022-089",
    ramo: "Vida",
    vigencia: "01/03/2022 - 01/03/2023",
    beneficiarios: "Ana Paula Santos",
    icon: Heart
  },
  {
    id: 2,
    nome: "Seguro Auto Básico",
    proposta: "PROP-2021-234",
    ramo: "Auto",
    vigencia: "20/08/2021 - 20/08/2022",
    veiculo: "Volkswagen Gol 2018",
    icon: Car
  }
];

export const ApolicesInativas = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Todas
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {apolicesInativas.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="opacity-75">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-muted rounded-lg">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{item.nome}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Inativa</Badge>
                        <Badge variant="outline">{item.ramo}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Proposta:</span>
                    <span className="font-medium">{item.proposta}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Vigência:</span>{" "}
                    <span className="font-medium">{item.vigencia}</span>
                  </div>
                  {item.veiculo && (
                    <div>
                      <span className="text-muted-foreground">Veículo:</span>{" "}
                      <span className="font-medium">{item.veiculo}</span>
                    </div>
                  )}
                  {item.beneficiarios && (
                    <div>
                      <span className="text-muted-foreground">Beneficiários:</span>{" "}
                      <span className="font-medium">{item.beneficiarios}</span>
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
