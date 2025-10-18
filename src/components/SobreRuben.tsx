import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Building, Globe } from "lucide-react";
import rubenImage from "@/assets/ruben-profile-1.png";

const SobreRuben = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sobre-ruben" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
              <img 
                src={rubenImage} 
                alt="Rubén Viera - Experto en ventas B2B" 
                className="relative rounded-2xl shadow-strong border border-primary/30 w-full h-auto object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Hola, soy <span className="bg-gradient-tech bg-clip-text text-transparent">Rubén Viera</span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  He liderado estrategias de ventas B2B y crecimiento en startups
                  que escalaron en Latinoamérica.
                </p>
                <p>
                  Hoy, desde Bizellers, ayudo a fundadores, equipos y empresas a
                  construir sistemas de venta que realmente funcionan.
                </p>
                <p>
                  He acompañado a organizaciones, aceleradoras y programas de
                  impacto como Nexum y Kaman, entrenando a emprendedores para
                  pasar de vender por instinto a vender con método.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-4 bg-gradient-hero border-primary/30 hover:shadow-glow-cyan transition-all">
                  <Briefcase className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">+7 años</div>
                  <p className="text-sm text-gray-300">Liderando equipos comerciales y estrategias de desarrollo de negocios</p>
                </Card>

                <Card className="p-4 bg-gradient-hero border-primary/30 hover:shadow-glow-cyan transition-all">
                  <Building className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">+5 industrias</div>
                  <p className="text-sm text-gray-300">Experiencia en ventas B2B y estrategias Go-To-Market</p>
                </Card>

                <Card className="p-4 bg-gradient-hero border-primary/30 hover:shadow-glow-cyan transition-all">
                  <Globe className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">+5 países</div>
                  <p className="text-sm text-gray-300">Sales Ops, ventas, operaciones y expansión internacional</p>
                </Card>
              </div>

              <Button
                onClick={() => scrollToSection("contacto")}
                variant="cta"
                size="lg"
                className="group shadow-glow"
              >
                Conversemos sobre tu estrategia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreRuben;
