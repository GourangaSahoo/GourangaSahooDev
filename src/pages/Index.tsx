import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const Index = () => {
  useEffect(() => {
    // Smooth reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe all sections for reveal animations
    const sections = document.querySelectorAll(".reveal-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        
        <main>
          <Hero />
          
          <div className="reveal-on-scroll">
            <About />
          </div>
          
          <div className="reveal-on-scroll">
            <Experience />
          </div>
          
          <div className="reveal-on-scroll">
            <Projects />
          </div>
          
          <div className="reveal-on-scroll">
            <Skills />
          </div>
          
          <div className="reveal-on-scroll">
            <Education />
          </div>
          
          <div className="reveal-on-scroll">
            <Certifications />
          </div>
          
          <div className="reveal-on-scroll">
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
