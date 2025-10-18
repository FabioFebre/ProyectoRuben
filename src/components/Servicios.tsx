import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Compass, Brain, Microscope, Check } from "lucide-react";
import React from "react";

interface ServiciosProps {
  onSelectService: (serviceName: string) => void;
}

const Servicios: React.FC<ServiciosProps> = ({ onSelectService }) => {
  const services = [
    {
      icon: Zap,
      title: "Sales Power Session",
      description:
        "Una sesión 1:1 para identificar bloqueos, afinar tu estrategia y salir con pasos accionables.",
      features: [
        "1 hora vía Google Meet",
        "Diagnóstico express",
        "Feedback accionable",
        "Grabación y checklist",
      ],
      cta: "Agendar mi sesión",
      highlight: false,
    },
    {
      icon: Compass,
      title: "Growth Sales Blueprint",
      description:
        "En 3 meses estructuramos tu sistema de ventas: estrategia, procesos y ejecución.",
      features: [
        "Diagnóstico completo",
        "Diseño + implementación",
        "Playbooks + training",
        "Seguimiento semanal",
      ],
      cta: "Solicitar Blueprint",
      highlight: true,
    },
    {
      icon: Brain,
      title: "Fractional Growth Leadership",
      description:
        "Accede a la guía de un experto en ventas B2B para dirigir y hacer crecer tu equipo.",
      features: [
        "Mín. 16 horas/mes",
        "Dirección estratégica",
        "Seguimiento de performance",
        "Reuniones semanales",
      ],
      cta: "Conoce el servicio",
      highlight: false,
    },
    {
      icon: Microscope,
      title: "Sales Lab",
      description:
        "Sesiones prácticas para dominar prospección, negociación y cierre.",
      features: [
        "Entrenamiento virtual/presencial",
        "Playbooks + templates",
        "Feedback individual",
        "Certificación de asistencia",
      ],
      cta: "Entrena a tu equipo",
      highlight: false,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(191 52% 52% / 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(191 52% 52% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Planes para{" "}
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              crecer tu negocio B2B
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Elige el formato que mejor se adapta a tu etapa de crecimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden group hover:shadow-glow-cyan transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-[#00455a]/90 to-[#083a3b]/90 backdrop-blur-sm border ${
                  service.highlight
                    ? "border-2 border-secondary shadow-glow ring-2 ring-secondary/50"
                    : "border-primary/30 hover:border-primary/60"
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 left-0">
                    <div className="bg-gradient-secondary text-center py-2 text-sm font-bold text-secondary-foreground shadow-glow">
                      ⚡ Más Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative p-8 flex flex-col h-full ${
                    service.highlight ? "pt-16" : "pt-8"
                  }`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-center text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-6 text-center min-h-[60px]">
                    {service.description}
                  </p>

                  <div className="mb-8 space-y-3 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      onSelectService(service.title);
                      scrollToSection("contacto");
                    }}
                    variant={service.highlight ? "cta" : "default"}
                    size="lg"
                    className="w-full mt-auto"
                  >
                    {service.cta}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
