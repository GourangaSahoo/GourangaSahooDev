import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: " DSA Using Java",
      issuer: "NPTEL -  IIT Kharagpur",
      date: "2024",
      score: "55%",
      level: "Elite",
      description: "Comprehensive course covering core data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms (sorting, searching, dynamic programming) with practical implementation in Java.",
      link: "https://www.linkedin.com/posts/gouranga-sahoo-154396289_data-structure-and-algorithms-using-java-activity-7266720057366323200-CbMD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYAdlABZPFyiY6JmRefO9TELl_9h-vPwpo",
      type: "Academic"
    },
    {
      title: " Full-Stack Web Development",
      issuer: "Udemy",
      date: "2024",
      description: "Comprehensive bootcamp covering frontend (HTML, CSS, JavaScript, React.js), backend (Node.js, Express.js), and databases (MongoDB), along with deployment and version control using Git/GitHub.",
      link: "https://www.linkedin.com/posts/gouranga-sahoo-154396289_web-development-activity-7302381618269167618-XyLJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYAdlABZPFyiY6JmRefO9TELl_9h-vPwpo",
      type: "Academic"
    },
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL - IIT Roorkee",
      date: "2024",
      score: "75%",
      level: "Elite",
      description: "Comprehensive course covering data analysis techniques using Python, statistical methods, and data visualization.",
      link: "https://www.linkedin.com/posts/gouranga-sahoo-154396289_data-analytics-certificate-activity-7196755188919988225-Z61l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYAdlABZPFyiY6JmRefO9TELl_9h-vPwpo",
      type: "Academic"
    },
    {
      title: "Micro-Certification – Welcome to ServiceNow",
      issuer: "ServiceNow",
      date: "2025-07-04",
      level: "Micro-Certification",
      description: "Successfully completed certification requirements for Welcome to ServiceNow, gaining a solid foundation in ServiceNow platform.",
      link: "https://www.linkedin.com/posts/gouranga-sahoo-154396289_servicenow-activity-7362488031154507776-kYB6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYAdlABZPFyiY6JmRefO9TELl_9h-vPwpo",
      type: "IT/Platform"
    },
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