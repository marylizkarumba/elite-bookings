import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services-data";

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Services & Pricing</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your needs. All plans include dedicated support.
          </p>
        </motion.div>

        {services.map((service, si) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.05 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">{service.title}</h2>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`glass-card p-6 relative ${tier.popular ? "border-primary/50 neon-glow" : ""}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-semibold">
                        <Flame className="h-3 w-3" /> Most Popular
                      </div>
                    )}
                    <h3 className="font-display text-lg font-semibold mb-1">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="font-display text-3xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground text-sm"> / project</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/booking?service=${service.id}&tier=${tier.name.toLowerCase()}`}
                      className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                        tier.popular
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      Book Now
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
    <Footer />
  </div>
);

export default ServicesPage;
