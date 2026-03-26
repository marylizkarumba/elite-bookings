import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", role: "Startup Founder", text: "The website they built for us exceeded all expectations. Professional, fast, and the design is stunning.", rating: 5 },
  { name: "David K.", role: "Event Planner", text: "Best DJ service I've ever hired. The crowd was energized all night. Already booked for our next event!", rating: 5 },
  { name: "Lisa T.", role: "Marketing Director", text: "Our social media presence transformed completely. Engagement tripled within the first month.", rating: 5 },
  { name: "James R.", role: "Small Business Owner", text: "IT support that actually solves problems fast. No more downtime. Highly recommend their premium package.", rating: 5 },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-muted-foreground text-lg">What our clients say about working with us</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/90 mb-4 text-sm leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
