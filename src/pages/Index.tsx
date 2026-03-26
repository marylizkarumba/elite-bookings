import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServicesOverview />
    <WhyChooseUs />
    <Testimonials />
    <CTABanner />
    <Footer />
    <Link to="/booking" className="floating-btn">
      <span className="flex items-center gap-2">
        <ArrowUp className="h-4 w-4" />
        Book Now
      </span>
    </Link>
  </div>
);

export default Index;
