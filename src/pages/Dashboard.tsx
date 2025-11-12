import { Phone, Clock, CheckCircle, TrendingUp, Users, PhoneCall } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const volumeData = [
  { day: "Seg", atendimentos: 20 },
  { day: "Ter", atendimentos: 28 },
  { day: "Qua", atendimentos: 30 },
  { day: "Qui", atendimentos: 35 },
  { day: "Sex", atendimentos: 45 },
  { day: "Sáb", atendimentos: 18 },
  { day: "Dom", atendimentos: 12 },
];

const motivosData = [
  { motivo: "2ª via de apólice", count: 50 },
  { motivo: "Sinistro", count: 38 },
  { motivo: "Renovação", count: 30 },
  { motivo: "Alteração cadastral", count: 20 },
  { motivo: "Cotação", count: 15 },
];

const tiposSeguroData = [
  { name: "Auto", value: 35, color: "hsl(221, 83%, 53%)" },
  { name: "Residencial", value: 28, color: "hsl(142, 71%, 45%)" },
  { name: "Vida", value: 22, color: "hsl(38, 92%, 50%)" },
  { name: "Empresarial", value: 15, color: "hsl(280, 65%, 60%)" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-bold">Histórico de Atendimentos</h1>
                <p className="text-sm text-primary-foreground/80">Central de Seguros BB</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium">Maria Silva</p>
                <p className="text-xs text-primary-foreground/70">Gestora</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center font-semibold">
                MS
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atendimentos Hoje</CardTitle>
              <PhoneCall className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground mt-1">vs. média semanal</p>
              <div className="flex items-center mt-2 text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+12%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">08:45</div>
              <p className="text-xs text-muted-foreground mt-1">minutos por atendimento</p>
              <div className="flex items-center mt-2 text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">-5%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Resolução</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">87%</div>
              <p className="text-xs text-muted-foreground mt-1">resolvidos no primeiro contato</p>
              <div className="flex items-center mt-2 text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+3%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Acumulado no Mês</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">486</div>
              <p className="text-xs text-muted-foreground mt-1">atendimentos no mês</p>
              <div className="flex items-center mt-2 text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+18%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          <Button 
            onClick={() => navigate('/atendimento')}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <Phone className="mr-2 h-5 w-5" />
            Iniciar Atendimento
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="analises" className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="analises">Análises e Insights</TabsTrigger>
            <TabsTrigger value="historico">Histórico de Atendimentos</TabsTrigger>
          </TabsList>

          <TabsContent value="analises" className="space-y-6">
            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Volume de Atendimentos por Dia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={volumeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="atendimentos" fill="hsl(221, 83%, 53%)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Principais Motivos de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={motivosData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="motivo" type="category" width={150} />
                      <Tooltip />
                      <Bar dataKey="count" fill="hsl(142, 71%, 45%)" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Tipo de Seguro</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={tiposSeguroData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {tiposSeguroData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resumo de Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="font-medium">Taxa de Resolução</span>
                    <span className="text-2xl font-bold text-success">87%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="font-medium">Satisfação do Cliente (NPS)</span>
                    <span className="text-2xl font-bold text-primary">8,5</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="font-medium">Tempo Médio de Espera</span>
                    <span className="text-2xl font-bold text-warning">02:15</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="historico">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Atendimentos Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Histórico detalhado de atendimentos será exibido aqui...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
