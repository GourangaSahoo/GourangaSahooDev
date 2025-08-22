import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, MapPin, Phone, Mail, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { toast } = useToast();

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
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Pritam_Kumar_Ghosh/",
      icon: ExternalLink,
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
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-sora font-bold tracking-tight">
              Pritam Kumar <span className="gradient-text">Ghosh</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-medium space-y-2">
              <div className="font-display">
                <span className="text-primary font-semibold">Data Analyst</span> • 
                <span className="text-secondary-accent ml-2">ML Engineer</span>
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
                <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
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
                <span>Open to Data Analyst roles</span>
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