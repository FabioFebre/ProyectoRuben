import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Recursos = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu correo electrónico",
        variant: "destructive",
      });
      return;
    }

    // Aquí se integraría con el backend
    toast({
      title: "¡Suscripción exitosa!",
      description: "Recibirás contenido exclusivo en tu correo",
    });
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in mb-8">
          <div className="inline-block px-4 py-2 bg-gradient-secondary rounded-full mb-6">
            <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wide">
              📨 Newsletter
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frameworks, plantillas y{" "}
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              estrategias para vender más
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Recibe en tu correo tácticas prácticas y frameworks de ventas B2B
            probados con startups y equipos comerciales de toda LATAM.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-strong bg-gradient-subtle animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Mail className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="flex-1 w-full">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12"
                  />
                  <Button type="submit" variant="cta" size="lg" className="group">
                    Suscribirme
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recursos;
