import { useEffect, useRef, useState } from "react";
import { Eye, ZoomIn } from "lucide-react";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      src: "/lovable-uploads/b58fa82e-62c1-4e5a-902e-212c54718acb.png",
      title: "Elegante Canapé-Auswahl",
      category: "Vorspeisen"
    },
    {
      src: "/lovable-uploads/f20dc37b-5547-4731-92f1-5f785f7ab7e3.png",
      title: "Gourmet Mini-Tartelettes",
      category: "Häppchen"
    },
    {
      src: "/lovable-uploads/3dd23171-3433-45c3-8448-9e6601b78c1f.png",
      title: "Karamell-Desserts",
      category: "Desserts"
    },
    {
      src: "/lovable-uploads/cd2ba8b1-9a4d-4b27-8996-73d8b09904da.png",
      title: "Beeren-Mousse",
      category: "Desserts"
    },
    {
      src: "/lovable-uploads/b54c02db-1cc6-45f0-a8e5-7c821fc28944.png",
      title: "Oreo-Desserts",
      category: "Süßspeisen"
    },
    {
      src: "/lovable-uploads/0370e8ae-099c-49de-a31a-951a31d992e0.png",
      title: "Garnelen-Häppchen",
      category: "Meeresfrüchte"
    },
    {
      src: "/lovable-uploads/2359a2d7-d76d-46ec-9065-a31c47b059de.png",
      title: "Prosciutto-Spieße",
      category: "Italienisch"
    },
    {
      src: "/lovable-uploads/ed8b95c2-6c28-4fad-9e6e-38e59e00836c.png",
      title: "Hähnchen-Roulade",
      category: "Hauptgerichte"
    },
    {
      src: "/lovable-uploads/299be55d-6fcb-4d4e-82b7-c270368349cc.png",
      title: "Dessert-Vielfalt",
      category: "Süßspeisen"
    }
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
            Unsere Galerie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lassen Sie sich von unseren kulinarischen Kunstwerken inspirieren. 
            Jedes Bild erzählt die Geschichte von Geschmack, Qualität und Leidenschaft.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-deep-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                  <div className="text-xs font-semibold text-golden mb-1">
                    {image.category}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                </div>
                
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <ZoomIn className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-card p-8 rounded-2xl shadow-elegant border">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Mehr sehen?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Besuchen Sie unsere vollständige Galerie auf Instagram und folgen Sie uns für tägliche 
              Einblicke in unsere Küche und aktuelle Kreationen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-warm text-primary-foreground rounded-lg hover:scale-105 transition-all duration-300 shadow-elegant font-semibold"
              >
                <span className="mr-2">📸</span>
                Instagram folgen
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 hover:scale-105 transition-all duration-300 font-semibold"
              >
                Portfolio ansehen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-deep-brown/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-lg shadow-glow"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 text-primary-foreground hover:bg-primary/30 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;