import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Pasamos de no tener procesos a cerrar deals cada semana. El impacto fue inmediato y sostenible.",
      author: "Carlos Mendoza",
      role: "CEO",
      company: "TechSaaS Perú",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      quote:
        "Logramos previsibilidad en nuestras ventas y claridad en los indicadores. Ahora sabemos exactamente hacia dónde vamos.",
      author: "Ana Rodríguez",
      role: "Co-Founder",
      company: "ScaleUp México",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      quote:
        "Rubén entiende cómo escalar equipos sin perder la esencia comercial. Su metodología es práctica y efectiva.",
      author: "Diego Silva",
      role: "Head of Sales",
      company: "GrowthCo Chile",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      quote:
        "La estructura que implementamos con Bizellers nos permitió duplicar nuestro pipeline en 4 meses.",
      author: "María González",
      role: "VP Sales",
      company: "InnovateTech Argentina",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      quote:
        "El entrenamiento de Rubén transformó a nuestro equipo. Ahora son vendedores consultivos de verdad.",
      author: "Luis Fernández",
      role: "Founder",
      company: "B2B Solutions Colombia",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            La experiencia de{" "}
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              CEOs y founders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            que trabajaron con Bizellers
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="p-8 md:p-12 hover:shadow-strong transition-shadow bg-card border-primary/20 max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Image and Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-primary/30 shadow-medium"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex gap-1 mb-4 justify-center md:justify-start">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-secondary text-secondary"
                            />
                          ))}
                        </div>

                        <blockquote className="text-lg text-card-foreground mb-6 leading-relaxed italic">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="border-t border-border pt-4">
                          <p className="font-bold text-lg text-card-foreground">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-sm font-semibold text-primary mt-1">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gradient-hero border border-primary/30 p-3 rounded-full hover:shadow-glow-cyan transition-all hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gradient-hero border border-primary/30 p-3 rounded-full hover:shadow-glow-cyan transition-all hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-secondary w-8" 
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <Button
            onClick={() => scrollToSection("contacto")}
            variant="cta"
            size="lg"
            className="group shadow-glow"
          >
            Quiero resultados como estos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
