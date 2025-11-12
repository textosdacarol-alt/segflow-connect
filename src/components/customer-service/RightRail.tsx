import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle, TrendingUp, Car, Home, Package } from "lucide-react";

export const RightRail = () => {
  return (
    <aside className="w-80 border-l bg-card p-4 space-y-4 overflow-auto">
      <Button variant="outline" className="w-full">
        Atendimento sem Proposta
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Perfil do Cliente</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm">Nível de Proteção</span>
            </div>
            <Badge className="bg-status-active">Protegido</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm">Relacionamento</span>
            </div>
            <Badge variant="secondary">B</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm">Encarteiramento BB</span>
            </div>
            <Badge className="bg-success">Em dia</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">PPE</span>
            </div>
            <Badge variant="outline">Não</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Ofertas Liberadas</CardTitle>
            <Badge variant="secondary" className="rounded-full">
              3
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 p-3 bg-muted rounded-lg">
            <div className="flex items-start gap-2">
              <Car className="h-4 w-4 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Upgrade Auto</p>
                <p className="text-xs text-muted-foreground">
                  Upgrade de cobertura do seguro Auto
                </p>
              </div>
            </div>
            <Button size="sm" className="w-full bg-primary">
              Ofertar
            </Button>
          </div>

          <div className="space-y-2 p-3 bg-muted rounded-lg">
            <div className="flex items-start gap-2">
              <Home className="h-4 w-4 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Upgrade Residencial</p>
                <p className="text-xs text-muted-foreground">
                  Upgrade de cobertura Residencial
                </p>
              </div>
            </div>
            <Button size="sm" className="w-full bg-primary">
              Ofertar
            </Button>
          </div>

          <div className="space-y-2 p-3 bg-muted rounded-lg">
            <div className="flex items-start gap-2">
              <Package className="h-4 w-4 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">Itens Pessoais</p>
                <p className="text-xs text-muted-foreground">
                  Proteção completa para seus bens pessoais contra roubo, furto e danos
                </p>
              </div>
            </div>
            <Button size="sm" className="w-full bg-primary">
              Ofertar
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
