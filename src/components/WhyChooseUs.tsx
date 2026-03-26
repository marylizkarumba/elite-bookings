import { motion } from "framer-motion";
import { Shield, Zap, Clock, Award } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast", desc: "Quick turnaround without compromising quality. We respect your time." },
  { icon: Shield, title: "Trusted & Reliable", desc: "500+ satisfied clients. Your project is in safe, experienced hands." },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support ensures you're never left waiting." },
  { icon: Award, title: "Premium Quality", desc: "Every deliverable meets the highest professional standards." },
];

const WhyChooseUs = () => (
  <section className="section-padding gradient-bg">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Why <span className="gradient-text">Choose Us</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We combine speed, reliability, and craftsmanship to deliver outstanding results
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center group hover:border-primary/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <r.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
