import { useState } from "react";
import DishCard from "./DishCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const dishes = {
    appetizers: [
      {
        image: "/lovable-uploads/b58fa82e-62c1-4e5a-902e-212c54718acb.png",
        title: "Luxuriöse Canapé-Selection",
        description: "Eine kunstvolle Komposition aus feinstem Kaviar, zartem Räucherfisch und edlen Aufschnitten. Jeder Bissen ist eine Symphonie aus Geschmack und Eleganz, perfekt arrangiert auf knusprigen Brotscheiben.",
        price: "ab €4,50"
      },
      {
        image: "/lovable-uploads/f20dc37b-5547-4731-92f1-5f785f7ab7e3.png",
        title: "Gourmet Mini-Tartelettes",
        description: "Goldbraune Tartelettes gefüllt mit cremiger Mousse und dekoriert mit frischen Kräutern. Diese kleinen Kunstwerke vereinen Textur und Geschmack in perfekter Harmonie.",
        price: "ab €3,80"
      },
      {
        image: "/lovable-uploads/0370e8ae-099c-49de-a31a-951a31d992e0.png",
        title: "Exotische Garnelen-Häppchen",
        description: "Saftige Garnelen auf knusprigen Waffel-Cups, garniert mit orangen Akzenten. Ein Hauch von Meer trifft auf innovative Präsentation – ein wahrer Gaumenschmaus.",
        price: "ab €5,20"
      },
      {
        image: "/lovable-uploads/2359a2d7-d76d-46ec-9065-a31c47b059de.png",
        title: "Prosciutto-Oliven Spieße",
        description: "Zarter Parmaschinken umhüllt würzige Oliven und cremigen Käse. Diese mediterranen Köstlichkeiten bringen die Sonne Italiens auf Ihren Gaumen.",
        price: "ab €3,50"
      }
    ],
    mains: [
      {
        image: "/lovable-uploads/ed8b95c2-6c28-4fad-9e6e-38e59e00836c.png",
        title: "Gefüllte Hähnchen-Roulade",
        description: "Zartes Hähnchenfleisch kunstvoll gerollt und mit aromatischen Kräutern gefüllt. Serviert mit buntem Gemüse und goldenen Kartoffeln – ein Fest für alle Sinne.",
        price: "ab €18,90"
      }
    ],
    desserts: [
      {
        image: "/lovable-uploads/3dd23171-3433-45c3-8448-9e6601b78c1f.png",
        title: "Karamell-Traum im Glas",
        description: "Seidige Vanillecreme trifft auf goldenes Karamel und dunkle Schokolade. Diese himmlischen Desserts im Glas sind wie kleine Wolken aus purer Süße und Genuss.",
        price: "ab €6,50"
      },
      {
        image: "/lovable-uploads/cd2ba8b1-9a4d-4b27-8996-73d8b09904da.png",
        title: "Beeren-Mousse Verführung",
        description: "Luftige Mousse in zarten Rosé-Tönen, gekrönt mit frischen Beeren und knackiger Minze. Jeder Löffel ist wie ein Kuss des Sommers auf der Zunge.",
        price: "ab €5,80"
      },
      {
        image: "/lovable-uploads/b54c02db-1cc6-45f0-a8e5-7c821fc28944.png",
        title: "Oreo-Wolken Dessert",
        description: "Cremige Träume treffen auf knusprige Oreo-Kekse und rote Kirschen. Diese verspielten Desserts bringen das innere Kind zum Lächeln und den Gaumen zum Jubeln.",
        price: "ab €4,90"
      },
      {
        image: "/lovable-uploads/299be55d-6fcb-4d4e-82b7-c270368349cc.png",
        title: "Dessert-Vielfalt Deluxe",
        description: "Eine bunte Parade aus verschiedenen Geschmacksrichtungen: Mango-Passion, Schokoladen-Himmel und Erdbeeren-Traum. Jedes Glas erzählt seine eigene süße Geschichte.",
        price: "ab €7,20"
      }
    ]
  };

  const categories = [
    { id: "appetizers", name: "Vorspeisen & Häppchen", icon: "🥂" },
    { id: "mains", name: "Hauptgerichte", icon: "🍽️" },
    { id: "desserts", name: "Desserts & Süßes", icon: "🍰" }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
            Unser Menü
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere kulinarischen Kreationen – von eleganten Vorspeisen bis hin zu verführerischen Desserts. 
            Jedes Gericht wird mit Liebe und höchster Präzision zubereitet.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-card shadow-soft rounded-xl p-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 rounded-lg py-3 text-sm sm:text-base font-medium"
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Dishes Grid */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {dishes[category.id as keyof typeof dishes].map((dish, index) => (
                  <DishCard
                    key={`${category.id}-${index}`}
                    {...dish}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl shadow-elegant border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Individuelle Wünsche?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Wir erstellen gerne ein maßgeschneidertes Menü für Ihre Veranstaltung. 
              Kontaktieren Sie uns für eine persönliche Beratung.
            </p>
            <Button size="lg" className="bg-gradient-warm text-primary-foreground hover:scale-105 transition-all duration-300 shadow-elegant">
              Jetzt anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;