import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "DJ Events", "Websites", "Graphic Design"];

const portfolioItems = [
  { id: 1, title: "Corporate Gala Night", category: "DJ Events", color: "from-amber-500/20 to-orange-500/20" },
  { id: 2, title: "Tech Startup Website", category: "Websites", color: "from-blue-500/20 to-cyan-500/20" },
  { id: 3, title: "Brand Identity — Luxe Co", category: "Graphic Design", color: "from-rose-500/20 to-pink-500/20" },
  { id: 4, title: "Summer Festival DJ Set", category: "DJ Events", color: "from-purple-500/20 to-violet-500/20" },
  { id: 5, title: "E-Commerce Platform", category: "Websites", color: "from-green-500/20 to-emerald-500/20" },
  { id: 6, title: "Restaurant Branding", category: "Graphic Design", color: "from-amber-500/20 to-yellow-500/20" },
  { id: 7, title: "Wedding Reception DJ", category: "DJ Events", color: "from-pink-500/20 to-rose-500/20" },
  { id: 8, title: "SaaS Dashboard", category: "Websites", color: "from-indigo-500/20 to-blue-500/20" },
  { id: 9, title: "Marketing Campaign Kit", category: "Graphic Design", color: "from-teal-500/20 to-cyan-500/20" },
];

const PortfolioPage = () => {
  const [active, setActive] = useState("All");
  const [modal, setModal] = useState<typeof portfolioItems[0] | null>(null);

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg">A showcase of our finest work across all services</p>
          </motion.div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat ? "bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setModal(item)}
                  className="glass-card-hover overflow-hidden text-left group"
                >
                  <div className={`aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-foreground/30 font-display text-lg">Preview Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.category}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="glass-card max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-video bg-gradient-to-br ${modal.color} flex items-center justify-center relative`}>
                <span className="text-foreground/30 font-display text-xl">Full Preview</span>
                <button onClick={() => setModal(null)} className="absolute top-3 right-3 p-2 rounded-full bg-background/50 backdrop-blur-sm">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold mb-2">{modal.title}</h2>
                <p className="text-muted-foreground text-sm">{modal.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
