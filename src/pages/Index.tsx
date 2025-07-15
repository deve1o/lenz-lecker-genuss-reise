import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <BlogSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
