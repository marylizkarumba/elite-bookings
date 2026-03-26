import { motion } from "framer-motion";
import { Code, Music, Monitor, Share2, Palette, Award, Users, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = [
  { icon: Monitor, label: "IT Solutions" },
  { icon: Code, label: "Web Development" },
  { icon: Music, label: "DJ & Events" },
  { icon: Share2, label: "Social Media" },
  { icon: Palette, label: "Graphic Design" },
];

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Projects Delivered" },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg">The story behind the brand</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="aspect-[3/4] glass-card bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-2xl">
              <span className="text-muted-foreground font-display">Your Photo Here</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <h2 className="font-display text-2xl font-bold mb-4">Passionate About Excellence</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                With over 5 years of experience across technology, creative arts, and digital marketing, 
                I've built a reputation for delivering premium results that exceed expectations.
              </p>
              <p>
                From building cutting-edge websites to rocking events behind the decks, from crafting 
                stunning brand identities to managing social media strategies — I bring the same 
                level of dedication and professionalism to every project.
              </p>
              <p>
                My mission is simple: help businesses and individuals stand out with world-class 
                digital and creative solutions, delivered fast and with care.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="font-display text-2xl font-bold mb-8">Skills & Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((s, i) => (
              <div key={i} className="glass-card px-5 py-3 flex items-center gap-2">
                <s.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
