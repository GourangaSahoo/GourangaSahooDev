import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, ExternalLink, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pritamkumarghosh351@gmail.com",
      action: () => window.open("mailto:pritamkumarghosh351@gmail.com")
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6371763610",
      action: () => window.open("tel:+916371763610")
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Balasore, India — 756036",
      action: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/6Pritam",
      icon: Github,
      color: "hover:text-gray-800"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pritam-kumar-ghosh-158185288",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/gpritam1471",
      icon: ExternalLink,
      color: "hover:text-green-600",
      isCustomIcon: true,
      customIconType: "hackerrank"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Pritam_Kumar_Ghosh/",
      icon: ExternalLink,
      color: "hover:text-orange-600",
      isCustomIcon: true,
      customIconType: "leetcode"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(`Hi Pritam,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const mailtoLink = `mailto:pritamkumarghosh351@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to turn data into insights? Let's discuss your next project and how I can help drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion, collaboration, etc."
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full btn-pill">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-sora font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors ${
                        info.action ? "cursor-pointer" : ""
                      }`}
                      onClick={info.action || undefined}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-sora font-semibold mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full btn-pill justify-start"
                    onClick={() => window.open("https://drive.google.com/file/d/1U1I0ao7gFYLjhdjo2pIWyOOfz6Ela6RP/view?usp=drive_link", "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full btn-pill justify-start"
                    onClick={() => window.open("https://topmate.io/pritam_kumar_ghosh/", "_blank")}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-sora font-semibold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground ${link.color}`}
                    >
                       {link.isCustomIcon ? (
                         link.customIconType === "hackerrank" ? (
                           <img src="/lovable-uploads/fb3b39a9-3e7a-4198-9665-bef29799399b.png" alt="HackerRank" className="h-4 w-4" />
                         ) : link.customIconType === "leetcode" ? (
                           <img src="/lovable-uploads/4ccf4563-51df-436e-86f8-ead92c6b12a1.png" alt="LeetCode" className="h-4 w-4" />
                         ) : (
                           <link.icon className="h-4 w-4" />
                         )
                       ) : (
                         <link.icon className="h-4 w-4" />
                       )}
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;