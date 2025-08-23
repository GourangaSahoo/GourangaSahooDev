import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL - IIT Roorkee",
      date: "2024",
      score: "72%",
      level: "Elite",
      description: "Comprehensive course covering data analysis techniques using Python, statistical methods, and data visualization.",
      link: "https://www.linkedin.com/posts/pritam-kumar-ghosh-158185288_nptel-certificate-activity-7196570345355509760-NKH1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXK9pQBQk5lRd08SH0B_juNyEHUJwapr0Y",
      type: "Academic"
    },
    {
      title: "SQL Gold Level (5⭐ Badge)",
      issuer: "HackerRank",
      date: "Aug 11, 2024",
      level: "Gold",
      description: "Achieved Gold Level certification with 5-star badge in SQL programming.",
      type: "Programming"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank", 
      date: "Aug 11, 2024",
      description: "Covers simple queries, relationships, and aggregators.",
      link: "https://lnkd.in/gtbdvQ2p",
      type: "Programming"
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "Aug 11, 2024", 
      description: "Includes complex joins, unions, and sub-queries.",
      link: "https://lnkd.in/gMC4mDSz",
      type: "Programming"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass-card p-6 hover:shadow-hero transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {cert.type}
                  </Badge>
                  {cert.level && (
                    <Badge 
                      variant={cert.level === "Elite" ? "default" : "outline"}
                      className={`text-xs ${cert.level === "Gold" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/30" : ""}`}
                    >
                      {cert.level === "Gold" && <Star className="h-3 w-3 mr-1" />}
                      {cert.level}
                    </Badge>
                  )}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 group-hover:opacity-100 hover:text-primary transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-sora font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              
              <p className="text-secondary-accent font-medium mb-2">
                {cert.issuer}
              </p>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                </div>
                {cert.score && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-primary">{cert.score}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;