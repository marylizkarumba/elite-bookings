import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <span className="gradient-text">EliteBooking</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Premium digital & creative services. Fast, reliable, professional.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">IT Support</Link>
            <Link to="/services" className="hover:text-foreground transition-colors">Web Development</Link>
            <Link to="/services" className="hover:text-foreground transition-colors">Deejaying</Link>
            <Link to="/services" className="hover:text-foreground transition-colors">Social Media</Link>
            <Link to="/services" className="hover:text-foreground transition-colors">Graphic Design</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} EliteBooking. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
