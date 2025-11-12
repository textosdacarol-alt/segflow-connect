import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Car, Home, Heart } from "lucide-react";

const apolices = [
  {
    id: 1,
    nome: "Seguro Auto Premium",
    proposta: "PROP-2024-001",
    ramo: "Auto",
    vigencia: "01/01/2024 - 01/01/2025",
    veiculo: "Honda Civic 2023",
    placa: "ABC-1234",
    icon: Car
  },
  {
    id: 2,
    nome: "Seguro Residencial Completo",
    proposta: "PROP-2023-045",
    ramo: "Residencial",
    vigencia: "15/03/2023 - 15/03/2025",
    endereco: "Rua das Flores, 123 - Centro",
    icon: Home
  },
  {
    id: 3,
    nome: "Seguro Vida Individual",
    proposta: "PROP-2022-178",
    ramo: "Vida",
    vigencia: "10/06/2022 - 10/06/2025",
    beneficiarios: "Ana Paula Santos, Carlos Santos",
    capitalSegurado: "R$ 100.000,00",
    icon: Heart
  }
];

export const ApolicesAtivas = () => {
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
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Empresarial
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {apolices.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{item.nome}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-success">Ativa</Badge>
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
                    <>
                      <div>
                        <span className="text-muted-foreground">Veículo:</span>{" "}
                        <span className="font-medium">{item.veiculo}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Placa:</span>{" "}
                        <span className="font-medium">{item.placa}</span>
                      </div>
                    </>
                  )}
                  {item.endereco && (
                    <div>
                      <span className="text-muted-foreground">Endereço Segurado:</span>{" "}
                      <span className="font-medium">{item.endereco}</span>
                    </div>
                  )}
                  {item.beneficiarios && (
                    <>
                      <div>
                        <span className="text-muted-foreground">Beneficiários:</span>{" "}
                        <span className="font-medium">{item.beneficiarios}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Capital Segurado:</span>{" "}
                        <span className="font-medium text-primary">{item.capitalSegurado}</span>
                      </div>
                    </>
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
