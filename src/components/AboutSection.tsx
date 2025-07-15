
import { useEffect, useRef, useState } from "react";
import { Award, Clock, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Heart,
      title: "Mit Leidenschaft",
      description: "Jedes Gericht wird mit Liebe zum Detail und höchster Sorgfalt zubereitet."
    },
    {
      icon: Award,
      title: "Premium Qualität",
      description: "Nur die besten Zutaten finden ihren Weg in unsere Küche."
    },
    {
      icon: Users,
      title: "Persönlicher Service",
      description: "Unser erfahrenes Team steht Ihnen von der Planung bis zur Durchführung zur Seite."
    },
    {
      icon: Clock,
      title: "Pünktlich & Zuverlässig",
      description: "Verlassen Sie sich auf unsere jahrelange Erfahrung und Professionalität."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
              Über uns
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Partyservice Lenz</strong> steht seit über einem Jahrzehnt für 
                exzellente Gastronomie und unvergessliche Veranstaltungen. Was als kleine Familienküche begann, 
                ist heute ein etablierter Catering-Service, der höchste Ansprüche erfüllt.
              </p>
              <p>
                Unser Geheimnis? Die perfekte Kombination aus traditionellen Rezepten, modernen Kochtechniken 
                und der unbändigen Leidenschaft für kulinarische Perfektion. Jedes Event ist für uns einzigartig 
                und verdient eine maßgeschneiderte gastronomische Lösung.
              </p>
              <p>
                Von intimen Familienfeiern bis hin zu großen Firmenevents – wir verwandeln jeden Anlass in 
                ein kulinarisches Erlebnis, das noch lange in Erinnerung bleibt.
              </p>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className={`group hover-lift bg-card border-0 shadow-soft hover:shadow-elegant transition-all duration-500 delay-${index * 100}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-gradient-warm group-hover:text-primary-foreground transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
