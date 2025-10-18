const BrandsCarousel = () => {
  const brands = [
    "NEXUM",
    "KAMAN",
    "STARTUP 1",
    "STARTUP 2",
    "COMPANY 3",
    "TECH 4",
    "BIZDEV 5",
    "SCALE 6",
  ];

  return (
    <section className="py-12 bg-accent/30 border-y border-primary/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-center text-sm text-gray-400 font-medium">
          Empresas que confían en Bizellers
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex-shrink-0 mx-8 px-6 py-3 bg-gradient-hero border border-primary/30 rounded-lg"
            >
              <span className="text-lg font-bold bg-gradient-tech bg-clip-text text-transparent whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex-shrink-0 mx-8 px-6 py-3 bg-gradient-hero border border-primary/30 rounded-lg"
            >
              <span className="text-lg font-bold bg-gradient-tech bg-clip-text text-transparent whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandsCarousel;