import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronDown } from "lucide-react";

const servicesData = {
  consulting: {
    name: "Consulting",
    subServices: [
      "IT Strategy & Roadmap Development",
      "Digital Transformation",
      "Cloud Strategy",
      "DevOps, DevSecOps & CI/CD Pipeline",
      "Data Analytics, Business Intelligence & Data Governance",
      "ERP and CRM Selection, Implementation & Optimization",
      "IT Service Management",
      "Application Modernization",
      "IT Cost Optimization & Infrastructure Right-Sizing",
    ],
  },
  cybersecurity: {
    name: "Cybersecurity",
    subServices: [
      "SOC Management & Managed Security Services (MSSP) - 24/7 Monitoring",
      "Network Security Architecture",
      "Email Security Protection",
      "Endpoint Security Implementation",
      "DevOps, DevSecOps & CI/CD Pipeline Solution",
      "Cloud Security Architecture",
      "Cyber Security Academy - Hands-On Training",
      "Human Layer Security & Awareness Training",
      "SOAR Solution Implementation",
    ],
  },
  "web-dev": {
    name: "Web Development",
    subServices: [
      "React & TypeScript Development",
      "Full-Stack Web Applications",
      "Responsive UI/UX Design with TailwindCSS",
      "Node.js & Express Backend Development",
      "Database Design & Optimization",
    ],
  },
  crypto: {
    name: "Crypto & DeFi",
    subServices: [
      "Smart Contract Development & Auditing",
      "DeFi Protocol Development",
      "Stablecoin Implementation",
      "Cross-Chain Bridge Solutions",
      "Wallet Security Solutions",
    ],
  },
  nft: {
    name: "NFT & Web3",
    subServices: [
      "NFT Contract Development (ERC-721/1155)",
      "Digital Asset Tokenization",
      "Community Management & Engagement",
      "Marketplace Integration",
      "Token-Gated Utilities & Access Management",
    ],
  },
  automation: {
    name: "Automation",
    subServices: [
      "Robotic Process Automation (RPA)",
      "CI/CD Pipeline Automation",
      "Workflow Optimization",
      "Custom Scripting & Tooling",
      "System Integration Automation",
    ],
  },
};

type ServiceKey = keyof typeof servicesData;

const Contact = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [selectedService, setSelectedService] = useState<ServiceKey | "">("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showSubServiceDropdown, setShowSubServiceDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (service: ServiceKey) => {
    setSelectedService(service);
    setSelectedSubService("");
    setShowServiceDropdown(false);
  };

  const handleSubServiceSelect = (subService: string) => {
    setSelectedSubService(subService);
    setShowSubServiceDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedService || !selectedSubService) {
      setFormStatus("error");
      return;
    }

    const serviceName = selectedService ? servicesData[selectedService as ServiceKey].name : "";

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: serviceName,
          service_niche: selectedSubService,
          message: formData.message,
          to_email: "info@kosinkotechnologies.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      );

      setFormStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedService("");
      setSelectedSubService("");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-4xl mx-auto space-y-20 pb-24 px-6 scroll-mt-32 reveal"
    >
      <div className="text-center space-y-6">
        <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
          Secure Transmission
        </h3>
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white">
          Ready to initiate?
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
      </div>

      <div className="service-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ring-1 ring-white/10">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        {formStatus === "sent" ? (
          <div className="text-center space-y-8 py-12 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto text-blue-400 text-4xl shadow-[0_0_50px_-10px_rgba(59,130,246,0.6)]">
              ✓
            </div>
            <div className="space-y-4">
              <h4 className="text-3xl font-heading font-black text-white uppercase tracking-widest">
                Handshake Complete
              </h4>
              <p className="text-zinc-500 font-light italic text-lg max-w-md mx-auto">
                Signal locked and encrypted. Our primary engineers will make
                contact on this frequency.
              </p>
            </div>
            <button
              onClick={() => setFormStatus("idle")}
              className="mt-10 px-10 py-4 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-600 text-xs font-black uppercase tracking-[0.5em] transition-all bg-zinc-900/50"
            >
              Reset Terminal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-zinc-800 text-base"
                  placeholder="Full name or company"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-zinc-800 text-base"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                Service *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                  className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all text-base text-left flex items-center justify-between hover:border-zinc-700"
                >
                  <span className={selectedService ? "text-white" : "text-zinc-500"}>
                    {selectedService ? servicesData[selectedService].name : "Select a service"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${showServiceDropdown ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {showServiceDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-zinc-800 rounded-2xl z-50 overflow-hidden shadow-2xl">
                    {Object.entries(servicesData).map(([key, value]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleServiceSelect(key as ServiceKey)}
                        className={`w-full text-left px-6 py-4 transition-all hover:bg-blue-500/20 hover:border-l-2 hover:border-blue-500 ${selectedService === key ? "bg-blue-500/10 border-l-2 border-blue-500 text-blue-400" : "text-zinc-300"
                          }`}
                      >
                        {value.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {selectedService && (
              <div className="space-y-4">
                <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                  What {servicesData[selectedService].name} Service are you interested in? *
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowSubServiceDropdown(!showSubServiceDropdown)}
                    className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all text-base text-left flex items-center justify-between hover:border-zinc-700"
                  >
                    <span className={selectedSubService ? "text-white" : "text-zinc-500"}>
                      {selectedSubService || "Select a service niche"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${showSubServiceDropdown ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {showSubServiceDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-zinc-800 rounded-2xl z-50 overflow-hidden shadow-2xl max-h-64 overflow-y-auto">
                      {servicesData[selectedService].subServices.map((subService) => (
                        <button
                          key={subService}
                          type="button"
                          onClick={() => handleSubServiceSelect(subService)}
                          className={`w-full text-left px-6 py-4 transition-all hover:bg-blue-500/20 hover:border-l-2 hover:border-blue-500 text-sm ${selectedSubService === subService
                            ? "bg-blue-500/10 border-l-2 border-blue-500 text-blue-400"
                            : "text-zinc-300"
                            }`}
                        >
                          {subService}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                Phone Number
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onInput={(e) => {
                  const input = e.target as HTMLInputElement;
                  input.value = input.value.replace(/[^0-9+\-\s()]/g, "");
                }}
                className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-zinc-800 text-base"
                placeholder="+1 234 567 8900"
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                Tell Us More About Your Project
              </label>
              <textarea
                required
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder-zinc-800 text-base"
                placeholder="Describe your project, goals, and how we can help..."
              ></textarea>
            </div>

            {formStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-2xl">
                <p className="text-red-400 text-sm font-semibold">
                  Please select both a service and a service niche before submitting.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "sending" || !selectedService || !selectedSubService}
              className={`w-full custom-btn py-6 rounded-2xl text-white font-black tracking-[0.4em] text-sm uppercase shadow-3xl transition-all active:scale-[0.99] hover:shadow-blue-500/10 ${formStatus === "sending"
                ? "bg-blue-500/70 hover:bg-blue-500/70 cursor-not-allowed"
                : !selectedService || !selectedSubService
                  ? "bg-blue-500/50 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
              {formStatus === "sending" ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
