import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="font-display font-bold text-2xl gradient-text mb-4 hover:opacity-80 transition-opacity"
            >
              Pritam Kumar Ghosh
            </button>
            <p className="text-muted-foreground mb-4 max-w-md">
              Data Analyst and ML Engineer passionate about turning raw data into actionable insights. 
              Let's build something amazing together.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sora font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-sora font-semibold mb-4">Connect</h3>
            <div className="space-y-3 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="btn-pill"
              onClick={() => window.open("mailto:pritamkumarghosh351@gmail.com")}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Pritam Kumar Ghosh. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Last updated: December 2024</span>
            <button
              onClick={scrollToTop}
              className="hover:text-primary transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;