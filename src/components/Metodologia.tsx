import { Lightbulb, Target, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";

const Metodologia = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Consultoría estratégica",
      description: "Diagnóstico, foco y estructura comercial.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Entrenamiento de alto rendimiento",
      description:
        "Metodologías B2B validadas en startups y empresas en expansión.",
      color: "secondary",
    },
    {
      icon: Laptop,
      title: "Tecnología de ventas",
      description:
        "Implementación y optimización de herramientas para escalar sin fricción.",
      color: "accent",
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative tech elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nuestra fórmula:{" "}
            <span className="bg-gradient-tech bg-clip-text text-transparent uppercase">
              estrategia + entrenamiento + tecnología
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            No creemos en la suerte. Creemos en sistemas.
            <br />
            Por eso, nuestra metodología combina tres pilares:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-primary/20 bg-accent/50 backdrop-blur-sm hover:bg-accent/70"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-${pillar.color} flex items-center justify-center mb-6 shadow-soft`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
