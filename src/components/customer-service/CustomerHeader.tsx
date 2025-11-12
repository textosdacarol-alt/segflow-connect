import { Clock, RefreshCw, X, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const CustomerHeader = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-xl font-bold">Samara Alves Pereira Santos</h1>
              <span className="text-sm">CPF: 123.456.789-00</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                Qualidade
              </Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                Cliente
              </Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                Receptivo
              </Badge>
              <Badge className="bg-status-active text-white">
                Ativo
              </Badge>
              <Badge className="bg-success text-white">
                NPS Alto
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Protocolo:</span>
                <span className="text-sm font-mono">20251107163821</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-mono">{formatTime(timer)}</span>
              </div>
              <div className="text-xs space-y-0.5">
                <div>URA: IDPROP54321</div>
                <div>Sinistro: SIN-002-2023</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <LinkIcon className="h-4 w-4 mr-2" />
                Associar
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => navigate("/")}
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <X className="h-4 w-4 mr-2" />
                Finalizar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
