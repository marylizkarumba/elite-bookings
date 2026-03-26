import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary mb-8">
          <Sparkles className="h-4 w-4" />
          <span>Premium Digital Services</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
          Book{" "}
          <span className="gradient-text">Elite Digital</span>
          <br />& Creative Services
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Fast, reliable, professional. From IT support to web development, DJ services to graphic design — 
          elevate your brand with premium solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 neon-glow"
          >
            Book a Service
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold glass-card text-foreground hover:bg-muted/80 transition-all hover:scale-105"
          >
            View Portfolio
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
      >
        {[
          { value: "500+", label: "Projects Completed" },
          { value: "98%", label: "Client Satisfaction" },
          { value: "24/7", label: "Support Available" },
          { value: "5+", label: "Years Experience" },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-4 text-center">
            <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
