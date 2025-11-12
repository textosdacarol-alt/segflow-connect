import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Car, Home } from "lucide-react";

const assistencias = [
  {
    id: 1,
    proposta: "PROP-2024-001",
    nome: "João Silva",
    tipo: "Auto",
    modelo: "Honda Civic 2023",
    plano: "Premium",
    ano: "2023",
    icon: Car
  },
  {
    id: 2,
    proposta: "PROP-2023-045",
    nome: "Maria Santos",
    tipo: "Residencial",
    endereco: "Rua das Flores, 123",
    plano: "Completo",
    ano: "2023",
    icon: Home
  }
];

export const Assistencias = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por nº da Proposta..." 
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
          Auto
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Residencial
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assistencias.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base mb-1">{item.nome}</CardTitle>
                    <Badge variant="outline">{item.tipo}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Proposta:</span>{" "}
                    <span className="font-medium">{item.proposta}</span>
                  </div>
                  {item.modelo && (
                    <div>
                      <span className="text-muted-foreground">Modelo:</span>{" "}
                      <span className="font-medium">{item.modelo}</span>
                    </div>
                  )}
                  {item.endereco && (
                    <div>
                      <span className="text-muted-foreground">Endereço:</span>{" "}
                      <span className="font-medium">{item.endereco}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Plano:</span>{" "}
                    <span className="font-medium">{item.plano}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Ano:</span>{" "}
                    <span className="font-medium">{item.ano}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Assistências
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
