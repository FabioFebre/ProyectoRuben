import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
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
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-dark"
    >
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(191 52% 52% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(191 52% 52% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Escala tus ventas con{" "}
              <span className="bg-gradient-tech bg-clip-text text-transparent">
                estrategia, entrenamiento y tecnología
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-semibold">
              En Bizellers convertimos equipos comerciales en motores de crecimiento.
            </p>

            <Button
              onClick={() => scrollToSection("contacto")}
              variant="cta"
              size="xl"
              className="group shadow-glow"
            >
              Conversemos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right: Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Experto en ventas B2B" 
              className="relative rounded-2xl shadow-strong border border-primary/30 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
