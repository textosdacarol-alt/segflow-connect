import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Phone, Mail, MapPin, Calendar, Shield, AlertTriangle, Edit } from "lucide-react";

export const ResumoCliente = () => {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Apólices Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">3</div>
            <Button variant="link" className="p-0 h-auto text-xs">Ver detalhes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Apólices Inativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <Button variant="link" className="p-0 h-auto text-xs">Ver detalhes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Sinistros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Assistências</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Solicitações N2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Score NPS</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-success">Alto</Badge>
            <Button variant="link" className="p-0 h-auto text-xs">Ver detalhes</Button>
          </CardContent>
        </Card>
      </div>

      {/* Dados Cadastrais */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Dados Cadastrais</CardTitle>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>CPF</span>
              </div>
              <p className="font-medium">123.456.789-00</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Telefone</span>
              </div>
              <p className="font-medium">(16) 99335-5150</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>E-mail</span>
              </div>
              <p className="font-medium">samara.alves@email.com</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Data de Nascimento</span>
              </div>
              <p className="font-medium">15/03/1985</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Agência de Relacionamento</span>
              </div>
              <p className="font-medium">Ag. 1234 - C. Emp.</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Preferência de Contato</span>
              </div>
              <p className="font-medium">WhatsApp</p>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Endereço Completo</span>
            </div>
            <p className="font-medium">
              Rua das Flores, 123, Bairro Centro, CEP 14000-000 - Ribeirão Preto, SP
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              <span className="text-sm">Consentimento LGPD:</span>
              <Badge className="bg-success">Ativo</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              Última Atualização: 15/04/2024
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-warning/10 border border-warning/30 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <div className="flex-1 flex items-center gap-2">
              <Checkbox id="verificado" />
              <label htmlFor="verificado" className="text-sm cursor-pointer">
                Confirmo que os dados cadastrais foram verificados e estão atualizados
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contatos do Cliente */}
      <Card>
        <CardHeader>
          <CardTitle>Contatos do Cliente</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Funcionários BB</h4>
              <Button variant="outline" size="sm">Adicionar</Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">João Silva</p>
                  <p className="text-sm text-muted-foreground">Gerente de Relacionamento</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Demais Autorizados</h4>
              <Button variant="outline" size="sm">Adicionar</Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Maria Santos Pereira</p>
                  <p className="text-sm text-muted-foreground">Cônjuge</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
