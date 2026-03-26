import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Search, Calendar as CalendarIcon, CreditCard, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, type Service, type PricingTier } from "@/lib/services-data";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const steps = ["Service", "Package", "Date & Time", "Details", "Payment", "Confirm"];
const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [paymentType, setPaymentType] = useState<"full" | "deposit">("full");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [details, setDetails] = useState({ name: "", phone: "", email: "", location: "", notes: "" });

  useEffect(() => {
    const serviceId = searchParams.get("service");
    const tierName = searchParams.get("tier");
    if (serviceId) {
      const s = services.find((sv) => sv.id === serviceId);
      if (s) {
        setSelectedService(s);
        if (tierName) {
          const t = s.tiers.find((ti) => ti.name.toLowerCase() === tierName);
          if (t) { setSelectedTier(t); setStep(2); }
          else setStep(1);
        } else setStep(1);
      }
    }
  }, [searchParams]);

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = selectedTier?.price || 0;
  const amountDue = paymentType === "deposit" ? total * 0.5 : total;
  const remaining = paymentType === "deposit" ? total * 0.5 : 0;

  const canProceed = () => {
    if (step === 0) return !!selectedService;
    if (step === 1) return !!selectedTier;
    if (step === 2) return !!date && !!time;
    if (step === 3) return details.name && details.email && details.phone;
    if (step === 4) return true;
    return true;
  };

  const handleSubmit = () => {
    alert("Booking confirmed! (Demo — connect Lovable Cloud for real bookings)");
    setStep(0);
    setSelectedService(null);
    setSelectedTier(null);
    setDate(undefined);
    setTime("");
    setDetails({ name: "", phone: "", email: "", location: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 section-padding">
        <div className="container mx-auto max-w-6xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-center mb-12">
            Book Your <span className="gradient-text">Service</span>
          </motion.h1>

          {/* Progress bar */}
          <div className="flex items-center justify-center gap-1 mb-12 overflow-x-auto pb-2">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    i === step ? "bg-primary text-primary-foreground" : i < step ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                  onClick={() => i < step && setStep(i)}
                >
                  {i < step ? <Check className="h-3 w-3" /> : <span>{i + 1}</span>}
                  <span className="hidden sm:inline">{s}</span>
                </div>
                {i < steps.length - 1 && <div className={`w-6 h-0.5 mx-1 ${i < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  {/* Step 0: Select Service */}
                  {step === 0 && (
                    <div>
                      <h2 className="font-display text-xl font-semibold mb-6">Select a Service</h2>

                      {/* Searchable dropdown */}
                      <div className="relative mb-6">
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full glass-card p-4 flex items-center justify-between text-left"
                        >
                          <span className={selectedService ? "text-foreground" : "text-muted-foreground"}>
                            {selectedService?.title || "Search or select a service..."}
                          </span>
                          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="absolute top-full left-0 right-0 mt-2 glass-card p-2 z-20"
                            >
                              <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50 mb-2">
                                <Search className="h-4 w-4 text-muted-foreground" />
                                <input
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  placeholder="Search services..."
                                  className="bg-transparent text-sm text-foreground outline-none w-full placeholder:text-muted-foreground"
                                />
                              </div>
                              {filteredServices.map((s) => {
                                const Icon = s.icon;
                                return (
                                  <button
                                    key={s.id}
                                    onClick={() => { setSelectedService(s); setSelectedTier(null); setDropdownOpen(false); setSearchQuery(""); }}
                                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                                      selectedService?.id === s.id ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
                                    }`}
                                  >
                                    <Icon className="h-5 w-5" />
                                    <span className="text-sm font-medium">{s.title}</span>
                                    {selectedService?.id === s.id && <Check className="h-4 w-4 ml-auto" />}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Service cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <button
                              key={s.id}
                              onClick={() => { setSelectedService(s); setSelectedTier(null); }}
                              className={`glass-card-hover p-5 text-left ${selectedService?.id === s.id ? "border-primary/50 neon-glow" : ""}`}
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-3`}>
                                <Icon className="h-5 w-5 text-primary-foreground" />
                              </div>
                              <h3 className="font-display font-semibold mb-1">{s.title}</h3>
                              <p className="text-muted-foreground text-xs">From ${s.tiers[0].price}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 1: Select Package */}
                  {step === 1 && selectedService && (
                    <div>
                      <h2 className="font-display text-xl font-semibold mb-6">Select a Package</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedService.tiers.map((tier) => (
                          <button
                            key={tier.name}
                            onClick={() => setSelectedTier(tier)}
                            className={`glass-card p-5 text-left relative ${selectedTier?.name === tier.name ? "border-primary/50 neon-glow" : "hover:border-border"}`}
                          >
                            {tier.popular && (
                              <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
                                🔥 Popular
                              </span>
                            )}
                            <h3 className="font-display font-semibold mb-1">{tier.name}</h3>
                            <div className="font-display text-2xl font-bold mb-3">${tier.price}</div>
                            <ul className="space-y-1.5">
                              {tier.features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <Check className="h-3 w-3 text-primary mt-0.5 shrink-0" /> {f}
                                </li>
                              ))}
                            </ul>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display text-xl font-semibold mb-6">Pick Date & Time</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-card p-4">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(d) => d < new Date()}
                            className="pointer-events-auto"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-3">Available Time Slots</p>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((t) => (
                              <button
                                key={t}
                                onClick={() => setTime(t)}
                                className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                  time === t ? "bg-primary text-primary-foreground" : "glass-card hover:border-primary/30"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Details */}
                  {step === 3 && (
                    <div>
                      <h2 className="font-display text-xl font-semibold mb-6">Your Details</h2>
                      <div className="space-y-4">
                        {[
                          { key: "name", label: "Full Name", type: "text" },
                          { key: "email", label: "Email", type: "email" },
                          { key: "phone", label: "Phone Number", type: "tel" },
                          { key: "location", label: "Location (optional)", type: "text" },
                        ].map((field) => (
                          <div key={field.key}>
                            <label className="text-sm font-medium mb-1.5 block">{field.label}</label>
                            <input
                              type={field.type}
                              value={details[field.key as keyof typeof details]}
                              onChange={(e) => setDetails({ ...details, [field.key]: e.target.value })}
                              className="w-full glass-card px-4 py-3 text-sm bg-transparent outline-none focus:border-primary/50 transition-colors"
                            />
                          </div>
                        ))}
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Additional Notes (optional)</label>
                          <textarea
                            value={details.notes}
                            onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                            rows={3}
                            className="w-full glass-card px-4 py-3 text-sm bg-transparent outline-none focus:border-primary/50 transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Payment */}
                  {step === 4 && (
                    <div>
                      <h2 className="font-display text-xl font-semibold mb-6">Payment Option</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { type: "full" as const, label: "Full Payment", desc: `Pay $${total} now`, badge: "Best Value" },
                          { type: "deposit" as const, label: "50% Deposit", desc: `Pay $${total * 0.5} now, $${total * 0.5} on arrival` },
                        ].map((opt) => (
                          <button
                            key={opt.type}
                            onClick={() => setPaymentType(opt.type)}
                            className={`glass-card p-6 text-left relative ${paymentType === opt.type ? "border-primary/50 neon-glow" : ""}`}
                          >
                            {opt.badge && (
                              <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
                                {opt.badge}
                              </span>
                            )}
                            <CreditCard className="h-6 w-6 text-primary mb-3" />
                            <h3 className="font-display font-semibold mb-1">{opt.label}</h3>
                            <p className="text-muted-foreground text-sm">{opt.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Confirm */}
                  {step === 5 && (
                    <div>
                      <h2 className="font-display text-xl font-semibold mb-6">Confirm Booking</h2>
                      <div className="glass-card p-6 space-y-4">
                        <p className="text-sm text-muted-foreground">Please review your booking details and confirm.</p>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Service</span><span className="font-medium">{selectedService?.title}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Package</span><span className="font-medium">{selectedTier?.name}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Date</span><span className="font-medium">{date ? format(date, "PPP") : "-"}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Time</span><span className="font-medium">{time}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Name</span><span className="font-medium">{details.name}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Email</span><span className="font-medium">{details.email}</span></div>
                          <div className="border-t border-border/50 pt-3">
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Total</span><span className="font-bold">${total}</span></div>
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Amount Due Now</span><span className="font-bold text-primary">${amountDue}</span></div>
                            {remaining > 0 && <div className="flex justify-between text-sm"><span className="text-muted-foreground">Pay on arrival</span><span className="font-medium text-accent">${remaining}</span></div>}
                          </div>
                        </div>
                        <button
                          onClick={handleSubmit}
                          className="w-full py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all neon-glow"
                        >
                          Confirm & Pay ${amountDue}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              {step < 5 && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium glass-card ${step === 0 ? "opacity-50 pointer-events-none" : "hover:bg-muted/50"}`}
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    onClick={() => setStep(Math.min(5, step + 1))}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground disabled:opacity-50 disabled:pointer-events-none hover:opacity-90 transition-opacity"
                  >
                    Next <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar summary */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="font-display font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Service</span><span>{selectedService?.title || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Package</span><span>{selectedTier?.name || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span>{date ? format(date, "MMM d, yyyy") : "—"}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Time</span><span>{time || "—"}</span></div>
                  {selectedTier && (
                    <>
                      <div className="border-t border-border/50 pt-3">
                        <div className="flex justify-between font-semibold"><span>Total</span><span>${total}</span></div>
                      </div>
                      {step >= 4 && (
                        <>
                          <div className="flex justify-between text-primary font-medium"><span>Due Now</span><span>${amountDue}</span></div>
                          {remaining > 0 && <div className="flex justify-between text-accent text-xs"><span>On arrival</span><span>${remaining}</span></div>}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
