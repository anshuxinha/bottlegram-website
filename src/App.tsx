/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  LayoutDashboard, 
  Video, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Menu, 
  X,
  Clock,
  Globe,
  WifiOff
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass editorial-shadow py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-serif font-bold text-primary italic tracking-tight">
            Stroma
          </a>
          <div className="hidden md:flex items-center gap-6">
            {["Curriculum", "Dashboard", "Webinars"].map((item) => (
              <a 
                key={item} 
                href={item === "Dashboard" ? "#dashboard" : `#${item.toLowerCase()}`} 
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="mailto:anshuxinha@gmail.com" className="text-sm font-medium text-on-surface hover:text-primary transition-colors">
            Contact
          </a>
          <button className="primary-gradient text-on-primary px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            Download
            <Download size={16} />
          </button>
        </div>

        <button 
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-outline-variant p-6 flex flex-col gap-4 shadow-xl"
        >
          {["Curriculum", "Dashboard", "Webinars", "Contact"].map((item) => (
            <a 
              key={item} 
              href={item === "Dashboard" ? "#dashboard" : item === "Contact" ? "mailto:anshuxinha@gmail.com" : `#${item.toLowerCase()}`} 
              className="text-lg font-medium text-on-surface"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="primary-gradient text-on-primary px-6 py-3 rounded-full text-center font-semibold mt-2">
            Download App
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-on-surface leading-[1.1] mb-6">
            The Living <br />
            Curriculum for <br />
            <span className="text-primary italic">Community Medicine.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
            Stop buying new textbooks every year. Master public health with real-time updates, webinars, and a comprehensive digital library designed for students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              className="primary-gradient text-on-primary px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform"
              aria-label="Download the app"
            >
              Download
            </button>
            <a 
              href="mailto:anshuxinha@gmail.com"
              className="bg-surface-container-lowest text-on-surface px-8 py-4 rounded-full font-semibold editorial-shadow hover:bg-surface-container-low transition-colors text-center"
              aria-label="Contact us"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-surface"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Empowering 50,000+ Med Students
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-on-surface p-3 rounded-[3rem] shadow-2xl max-w-[320px] mx-auto overflow-hidden border-8 border-on-surface">
            <div className="bg-surface rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
              {/* Mock App Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-primary font-serif italic font-bold">Stroma</div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-serif font-bold text-on-surface">Good morning,</h3>
                  <h3 className="text-xl font-serif font-bold text-primary">User</h3>
                  <p className="text-[10px] text-on-surface-variant">Monday, April 6, 2026</p>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-2xl editorial-shadow mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold">Learning Progress</span>
                    <span className="text-[10px] text-primary font-bold">12%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="w-[12%] h-full bg-primary" />
                  </div>
                  <p className="text-[8px] text-on-surface-variant mt-2">3 of 24 modules completed</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-lowest p-3 rounded-2xl editorial-shadow text-center">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
                      <Clock size={14} className="text-orange-500" />
                    </div>
                    <div className="text-sm font-bold">1</div>
                    <div className="text-[8px] text-on-surface-variant">Day Streak</div>
                  </div>
                  <div className="bg-surface-container-lowest p-3 rounded-2xl editorial-shadow text-center">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2">
                      <Globe size={14} className="text-red-500" />
                    </div>
                    <div className="text-sm font-bold">July 17</div>
                    <div className="text-[8px] text-on-surface-variant">World Health Day</div>
                  </div>
                </div>
              </div>
              {/* Bottom Nav Mock */}
              <div className="absolute bottom-0 left-0 right-0 bg-surface-container-lowest/80 backdrop-blur-md p-4 flex justify-around border-t border-outline-variant">
                <LayoutDashboard size={16} className="text-primary" />
                <BookOpen size={16} className="text-on-surface-variant" />
                <Video size={16} className="text-on-surface-variant" />
                <Users size={16} className="text-on-surface-variant" />
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="text-primary" />,
      title: "Curriculum-Aligned Library",
      description: "A comprehensive digital library covering your entire Community Medicine syllabus, from epidemiology to social medicine.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <LayoutDashboard className="text-primary" />,
      title: "Real-time Dashboard Updates",
      description: "Stay current with live updates on global health guidelines, WHO statistics, and local public health notifications.",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Users className="text-primary" />,
      title: "Live Community Health Webinars",
      description: "Integrated expert-led webinars that bridge the gap between theoretical study and community practice.",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section id="curriculum" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Modern Learning</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface max-w-2xl leading-tight">
            Built for the next generation of public health leaders.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-8`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TextbookSection = () => {
  const points = [
    {
      icon: <Clock className="text-primary" />,
      title: "Weekly Updates",
      description: "Guidelines change fast. We update our content weekly to ensure you're always studying the most current protocols."
    },
    {
      icon: <CheckCircle2 className="text-primary" />,
      title: "Curriculum-Centric",
      description: "Mapped directly to your university's curriculum for Community Medicine and Public Health rotations."
    },
    {
      icon: <WifiOff className="text-primary" />,
      title: "Offline Field Access",
      description: "Download materials for use during rural community postings where internet connectivity may be limited."
    }
  ];

  return (
    <section id="dashboard" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="rounded-xl overflow-hidden editorial-shadow aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80" 
              alt="Library"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex items-end p-12">
              <div className="text-surface-container-lowest">
                <div className="text-4xl font-serif font-bold mb-2">SAFE WORK</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Dynamic Learning</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface mb-12 leading-tight">
            The only textbook you'll ever need.
          </h2>
          <div className="space-y-10">
            {points.map((point, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-on-surface mb-2">{point.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertsSection = () => {
  return (
    <section id="webinars" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Interactive Sessions</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface mb-8 leading-tight">
            Learn from public health experts.
          </h2>
          <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
            Join live sessions with field practitioners and researchers who bring textbook theories to life through real-world case studies.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Live Seminar</span>
              <span className="text-[10px] text-on-surface-variant font-medium">1,250 students attending</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-on-surface mb-2">
              BCBR Excellence Class
            </h3>
            <p className="text-sm text-on-surface-variant mb-8">Dr. Anshuman Sinha and Dr. Kaushikee</p>
            <button className="primary-gradient text-on-primary w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2">
              Watch Live
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        <div className="relative">
          <div className="rounded-xl overflow-hidden editorial-shadow aspect-video bg-on-surface">
            <img 
              src="https://images.unsplash.com/photo-1588702547919-26089e690eca?auto=format&fit=crop&w=1000&q=80" 
              alt="Laptop"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-primary cursor-pointer hover:scale-110 transition-transform">
                <Video size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto primary-gradient rounded-[3rem] p-12 md:p-24 text-center text-on-primary relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            Ready to master Community <br className="hidden md:block" /> Medicine?
          </h2>
          <p className="text-xl text-on-primary/80 mb-12 max-w-2xl mx-auto">
            Join Stroma today and gain access to the most comprehensive, up-to-date digital resource for your medical studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              Download
            </button>
            <a 
              href="mailto:anshuxinha@gmail.com"
              className="border-2 border-on-primary/30 text-on-primary px-10 py-5 rounded-full font-bold hover:bg-on-primary/10 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-serif font-bold text-primary italic mb-2">Stroma</div>
          <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">
            © 2026 Stroma Education Excellence. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {["Student Privacy", "Library Terms", "Academic Integrity", "Support"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TextbookSection />
        <ExpertsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
