import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Faqs = () => {
  const faqs = [
    {
      question: "¿Qué tipo de empresas trabajan con Bizellers?",
      answer:
        "Trabajamos con startups, scaleups y empresas B2B con enfoque de crecimiento y ventas consultivas. Nuestros clientes típicamente están en fase de tracción o expansión y buscan estructurar sus procesos comerciales.",
    },
    {
      question: "¿Qué retorno puedo esperar?",
      answer:
        "Depende de tu ciclo comercial, pero todos los proyectos se enfocan en resultados medibles: incremento en conversión, reducción del ciclo de venta, mejora en forecasting y escalabilidad del equipo. Diseñamos KPIs específicos para cada proyecto.",
    },
    {
      question: "¿Puedo incluir a mi equipo en las sesiones?",
      answer:
        "Sí, todos los programas admiten participación grupal. De hecho, es recomendable para asegurar la implementación y alineación de todo el equipo comercial.",
    },
    {
      question: "¿Implementan CRM o solo asesoran?",
      answer:
        "Asesoramos y acompañamos en la implementación. También ofrecemos soporte técnico opcional para configuración de herramientas como HubSpot, Pipedrive u otras plataformas según tus necesidades.",
    },
  ];

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
    <section id="faqs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Preguntas{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                frecuentes
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection("contacto")}
              variant="default"
              size="lg"
            >
              Aún tengo dudas — conversemos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
