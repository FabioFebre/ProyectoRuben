import { Button } from "@/components/ui/button";
import { Mail, Rocket, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
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
    <footer className="bg-gradient-dark border-t border-primary/20 relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(191 52% 52% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(191 52% 52% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-4">
              BIZELLERS
            </div>
            <p className="text-gray-200 max-w-md mb-4 leading-relaxed">
              En Bizellers transformamos equipos comerciales en motores de crecimiento, combinando estrategias Go-To-Market, entrenamiento de alto rendimiento y tecnología para escalar resultados de forma sostenible.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start text-gray-300">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:contacto@bizellers.com"
                  className="hover:text-secondary transition-colors"
                >
                  contacto@bizellers.com
                </a>
              </div>
              <p className="text-sm text-gray-300">
                www.bizellers.com
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 justify-center md:justify-start mt-6">
              <a
                href="https://instagram.com/bizellers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-hero border border-primary/30 flex items-center justify-center hover:shadow-glow-cyan hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/company/bizellers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-hero border border-primary/30 flex items-center justify-center hover:shadow-glow-cyan hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={() => scrollToSection("contacto")}
              variant="cta"
              size="lg"
              className="group"
            >
              <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              Hablemos de tu crecimiento
            </Button>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Bizellers. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
