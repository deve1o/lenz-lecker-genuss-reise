import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
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

  const blogPosts = [
    {
      title: "Die perfekte Hochzeitsfeier – Tipps von unseren Experten",
      excerpt: "Entdecken Sie, wie Sie Ihren besonderen Tag zu einem unvergesslichen kulinarischen Erlebnis machen. Von der Menüauswahl bis zur Dekoration.",
      date: "15. Dezember 2024",
      readTime: "5 Min. Lesezeit",
      category: "Hochzeiten",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop"
    },
    {
      title: "Firmenevents erfolgreich gestalten",
      excerpt: "Wie Sie mit dem richtigen Catering Ihre Geschäftspartner beeindrucken und eine professionelle Atmosphäre schaffen.",
      date: "12. Dezember 2024",
      readTime: "4 Min. Lesezeit",
      category: "Business",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=300&fit=crop"
    },
    {
      title: "Saisonale Highlights – Winter-Menü 2024",
      excerpt: "Lassen Sie sich von unseren winterlichen Kreationen inspirieren. Warme Aromen treffen auf festliche Präsentation.",
      date: "8. Dezember 2024",
      readTime: "3 Min. Lesezeit",
      category: "Menü",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
            Unser Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tauchen Sie ein in die Welt der Gastronomie. Hier teilen wir unsere Erfahrungen, 
            Tipps und kulinarischen Geheimnisse mit Ihnen.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              className={`group hover-lift bg-card border-0 shadow-soft hover:shadow-elegant overflow-hidden transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary-glow group-hover:translate-x-2 transition-all duration-300"
                >
                  Weiterlesen 
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-card p-8 rounded-2xl shadow-elegant border text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Bleiben Sie auf dem Laufenden
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Einblicke in unsere Küche, 
              saisonale Menü-Highlights und Event-Tipps direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              />
              <Button className="bg-gradient-warm text-primary-foreground hover:scale-105 transition-all duration-300 shadow-elegant px-6">
                Anmelden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;