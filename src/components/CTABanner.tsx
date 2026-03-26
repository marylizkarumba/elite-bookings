import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const CTABanner = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            Limited slots available
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Book your service today and experience the difference. Premium quality, delivered fast.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 neon-glow"
          >
            Book Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
