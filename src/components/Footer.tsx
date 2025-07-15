
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
              Partyservice Lenz
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Ihr Partner für unvergessliche kulinarische Erlebnisse. 
              Von intimen Feiern bis zu großen Events – wir machen jeden Anlass besonders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-golden transition-colors duration-300">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-golden transition-colors duration-300">
                  Unser Menü
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-golden transition-colors duration-300">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-golden transition-colors duration-300">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-golden transition-colors duration-300">
                  Catering-Anfrage
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden">Unsere Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-primary-foreground/80">Hochzeits-Catering</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Firmenevents</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Private Feiern</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Buffet-Service</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Flying Buffet</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Musterstraße 123</div>
                  <div>12345 Musterstadt</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="tel:+49123456789" className="text-primary-foreground/80 hover:text-golden transition-colors duration-300">
                  +49 (0) 123 456 789
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-golden flex-shrink-0" />
                <a href="mailto:info@partyservice-lenz.de" className="text-primary-foreground/80 hover:text-golden transition-colors duration-300">
                  info@partyservice-lenz.de
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Mo-Fr: 8:00 - 18:00</div>
                  <div>Sa: 9:00 - 16:00</div>
                  <div>So: Nach Vereinbarung</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 Partyservice Lenz. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-golden transition-colors duration-300">
              Impressum
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-golden transition-colors duration-300">
              Datenschutz
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-golden transition-colors duration-300">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
