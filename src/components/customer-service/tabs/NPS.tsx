import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, ThumbsDown, Minus } from "lucide-react";

const npsData = [
  {
    id: 1,
    tipo: "Pesquisa - Sinistro",
    data: "05/11/2025",
    nota: 10,
    classificacao: "Promotor",
    comentario: "Excelente atendimento! O sinistro foi resolvido rapidamente e a equipe foi muito profissional."
  },
  {
    id: 2,
    tipo: "Pesquisa - Atendimento",
    data: "28/10/2025",
    nota: 8,
    classificacao: "Neutro",
    comentario: "Bom atendimento, mas o tempo de espera poderia ser menor."
  },
  {
    id: 3,
    tipo: "Pesquisa - Assistência",
    data: "15/10/2025",
    nota: 9,
    classificacao: "Promotor",
    comentario: "Assistência 24h funcionou perfeitamente. Muito satisfeito com o serviço."
  },
  {
    id: 4,
    tipo: "Pesquisa - Sinistro",
    data: "02/10/2025",
    nota: 5,
    classificacao: "Detrator",
    comentario: "Demorou muito para receber retorno sobre meu sinistro. Processo muito burocrático."
  },
  {
    id: 5,
    tipo: "Pesquisa - Atendimento",
    data: "20/09/2025",
    nota: 7,
    classificacao: "Neutro",
    comentario: "Atendimento ok, mas poderia ter mais agilidade na resolução."
  }
];

export const NPS = () => {
  const getClassificacaoConfig = (nota: number, classificacao: string) => {
    if (nota >= 9) {
      return {
        badge: <Badge className="bg-success"><ThumbsUp className="h-3 w-3 mr-1" />Alto / Promotor</Badge>,
        icon: <Star className="h-8 w-8 text-success fill-success" />
      };
    } else if (nota >= 7) {
      return {
        badge: <Badge className="bg-warning"><Minus className="h-3 w-3 mr-1" />Médio / Neutro</Badge>,
        icon: <Star className="h-8 w-8 text-warning fill-warning" />
      };
    } else {
      return {
        badge: <Badge variant="destructive"><ThumbsDown className="h-3 w-3 mr-1" />Baixo / Detrator</Badge>,
        icon: <Star className="h-8 w-8 text-destructive fill-destructive" />
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
          Alto (9-10)
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Médio (7-8)
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          Baixo (1-6)
        </Badge>
      </div>

      <div className="space-y-4">
        {npsData.map((item) => {
          const config = getClassificacaoConfig(item.nota, item.classificacao);
          return (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-base">{item.tipo}</CardTitle>
                      <Badge variant="outline">{item.data}</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      {config.icon}
                      <div>
                        <div className="text-3xl font-bold">{item.nota}/10</div>
                        {config.badge}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-1">Comentário do Cliente:</p>
                  <p className="text-sm text-muted-foreground">{item.comentario}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
