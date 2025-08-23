import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, MapPin, Phone, Mail, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { toast } = useToast();
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Data Analyst", "ML Engineer"];

  useEffect(() => {
    const currentText = roles[roleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCurrentRole(prev => prev + currentText[charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentRole(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/6Pritam",
      icon: Github,
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/pritam-kumar-ghosh-158185288",
      icon: Linkedin,
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/gpritam1471",
      icon: ExternalLink,
      isCustomIcon: true,
      customIconType: "hackerrank"
    },
    {
      name: "LeetCode", 
      url: "https://leetcode.com/u/Pritam_Kumar_Ghosh/",
      icon: ExternalLink,
      isCustomIcon: true,
      customIconType: "leetcode"
    },
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${type} copied successfully!`,
    });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <img 
          src={heroImage}
          alt="Data visualization background"
          className="w-full h-full object-cover opacity-10 float-animation"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/3e3d8243-8a15-4cbf-895c-8b624998408d.png"
                alt="Pritam Kumar Ghosh - Data Analyst and ML Engineer"
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary/30 shadow-hero hover:border-primary/50 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary-accent/10 hover:from-primary/20 hover:to-secondary-accent/20 transition-all duration-500"></div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-sora font-bold tracking-tight">
              Pritam Kumar <span className="gradient-text">Ghosh</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-medium h-16 flex items-center justify-center">
              <div className="font-display">
                <span className="text-muted-foreground">I am a </span>
                <span className="text-primary font-semibold">{currentRole}</span>
                <span className="text-primary animate-pulse">|</span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I turn raw data into clear insights and practical products using Python, SQL, and Power BI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="btn-pill text-lg px-8 py-4 shadow-hero hover:shadow-glass transition-all duration-300"
            >
              View Projects
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="btn-pill text-lg px-8 py-4 glass-card border-primary/20 hover:border-primary/40"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-primary/5 transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.isCustomIcon ? (
                  <div className="h-6 w-6 flex items-center justify-center">
                     {link.customIconType === "hackerrank" ? (
                       <img src="/lovable-uploads/fb3b39a9-3e7a-4198-9665-bef29799399b.png" alt="HackerRank" className="w-6 h-6" />
                     ) : link.customIconType === "leetcode" ? (
                       <img src="/lovable-uploads/4ccf4563-51df-436e-86f8-ead92c6b12a1.png" alt="LeetCode" className="w-6 h-6" />
                    ) : (
                      <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                ) : (
                  <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </a>
            ))}
          </div>

          {/* Quick Facts */}
          <div className="glass-card max-w-4xl mx-auto p-6 mt-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Balasore, India</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>Open to work as a data analyst</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>B.Tech CSE (2026)</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 pt-6 border-t border-border">
              <button
                onClick={() => copyToClipboard("pritamkumarghosh351@gmail.com", "Email")}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">pritamkumarghosh351@gmail.com</span>
                <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <div className="hidden sm:block w-px h-4 bg-border"></div>
              
              <button
                onClick={() => copyToClipboard("+91 6371763610", "Phone")}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 6371763610</span>
                <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;