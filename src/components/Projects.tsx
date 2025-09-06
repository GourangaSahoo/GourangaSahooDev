import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, ExternalLink, Shield, BarChart3, Zap, Play } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Criminal Detection System",
      subtitle: "Real-Time Weapon Detection & Alerts",
      description: "AI-powered security system using YOLO for real-time weapon detection with instant SMS alerts to authorities.",
      icon: Shield,
      tools: ["Python", "Flask", "YOLO", "OpenCV", "Twilio API", "JavaScript"],
      color: "bg-red-500",
      type: "ml",
      details: {
        problem: "Need for an AI-powered criminal detection system that can monitor live video feeds and automatically alert authorities when weapons are detected, providing enhanced security for public spaces.",
        overview: "An AI-powered criminal detection system that uses YOLO for real-time weapon detection via live video feed. Integrated with Flask for a web dashboard and Twilio API for instant SMS alerts to authorities with weapon type, location, and timestamp.",
        features: [
          "🎥 Live Video Feed with YOLO-based detection",
          "📊 Web Dashboard for monitoring alerts and logs", 
          "📍 Location Tracking via IP geolocation",
          "📱 SMS Alerts to authorities with weapon type, confidence score, and timestamp",
          "💾 Automatic Storage of detection frames with overlays",
          "⏱ Smart Alert Cooldown to prevent spamming"
        ],
        approach: [
          "Implemented YOLO (You Only Look Once) object detection for real-time weapon identification",
          "Built Flask web application for live video feed processing and dashboard",
          "Integrated Twilio API for instant SMS notifications to authorities",
          "Added IP-based geolocation tracking for incident location identification",
          "Created automatic frame storage system with detection overlays",
          "Implemented smart cooldown mechanism to prevent alert spam"
        ],
        results: [
          "Real-time weapon detection with high accuracy using YOLO",
          "Instant SMS alerts with weapon type, confidence score, and location",
          "Web dashboard for monitoring and log management",
          "Automatic evidence collection through frame storage",
          "Smart alert system preventing false positive spam",
          "Scalable architecture for multiple camera integration"
        ],
        outcomes: "A real-time AI-powered security solution that can integrate with CCTV/IP cameras for public safety monitoring and crime prevention.",
        improvements: [
          "Add support for multiple weapon types and threat categories",
          "Implement facial recognition for suspect identification",
          "Create mobile app for security personnel",
          "Add integration with existing security systems"
        ],
        github: "https://github.com/6Pritam/criminal-detection",
        demo: ""
      }
    },
    {
      title: "Pizza Sales Dashboard",
      subtitle: "SQL | Power BI | Excel Analytics",
      description: "Interactive Power BI dashboard analyzing pizza sales data with KPIs, trends, and performance insights for business decisions.",
      icon: BarChart3,
      tools: ["SQL", "Excel", "Power Query", "Power BI"],
      color: "bg-orange-500",
      type: "powerbi",
      images: ["/lovable-uploads/49c187fc-7ffe-4bf3-b4ea-eb8c55fa548c.png", "/lovable-uploads/eefec041-5a9a-44b3-a1f5-2e416352528f.png"],
      videoDemo: "Screen Recording 2025-09-05 213531.mp4",
      details: {
        problem: "The business needed comprehensive insights on revenue, order trends, sales by category & size, and identification of best/worst performing pizzas to make data-driven decisions.",
        overview: "Analyzed pizza sales data to calculate KPIs, track sales trends, and identify top/bottom-performing pizzas. Built an interactive Power BI dashboard for decision-making.",
        approach: [
          "SQL: Data extraction and KPI calculation from raw sales data",
          "Excel: Data cleaning and preliminary analysis",
          "Power Query: Data transformation and modeling",
          "Power BI: Interactive dashboard creation with advanced visualizations"
        ],
        dashboardHighlights: [
          "📊 KPI Cards: Total Revenue, Avg Order Value, Total Orders, Avg Pizzas per Order",
          "📈 Daily & Monthly Trend charts for sales analysis",
          "🥧 Sales by Category & Size visualization with pie charts",
          "🏆 Top/Bottom 5 Pizzas analysis with bar/funnel charts",
          "📅 Insights on busiest days, peak times, and customer preferences",
          "🎯 Interactive filters for category, size, and time period analysis"
        ],
        results: [
          "Identified peak sales periods and seasonal trends",
          "Discovered top-performing pizza categories and sizes",
          "Revealed customer ordering patterns and preferences",
          "Highlighted underperforming products for strategic decisions",
          "Created actionable insights for inventory management",
          "Enabled data-driven pricing and promotion strategies"
        ],
        outcomes: "Helped identify customer behavior, best sellers, and underperforming products, supporting data-driven sales strategies and business growth.",
        improvements: [
          "Add customer segmentation analysis",
          "Implement predictive analytics for demand forecasting",
          "Create automated reporting and alert systems",
          "Integrate with real-time sales data sources"
        ],
        github: "",
        demo: ""
      }
    },
    {
      title: "Power BI Project 3",
      subtitle: "Coming Soon - Advanced Analytics",
      description: "Advanced Power BI dashboard project currently in development. Details will be updated once completed.",
      icon: Zap,
      tools: ["Power BI", "SQL", "DAX"],
      color: "bg-purple-500",
      type: "powerbi",
      isPlaceholder: true,
      details: {
        problem: "Project details will be added once development is complete.",
        overview: "This project is currently in development. Check back soon for full details including problem statement, approach, dashboard highlights, and outcomes.",
        approach: [
          "Project planning and requirements gathering in progress",
          "Data source identification and preparation",
          "Dashboard design and development",
          "Testing and optimization phase"
        ],
        results: [
          "Project outcomes will be documented upon completion",
          "Performance metrics and insights to be shared",
          "Business impact and recommendations forthcoming"
        ],
        improvements: [
          "Future enhancements will be planned based on initial results",
          "User feedback will drive iterative improvements"
        ],
        github: "",
        demo: ""
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore my data science and machine learning projects that solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-6 group hover:shadow-hero transition-all duration-300 relative overflow-hidden">
              {/* Animated background for ML project */}
              {project.type === "ml" && (
                <div className="absolute inset-0 opacity-10">
                  <div className="animate-pulse bg-gradient-to-br from-red-500 to-orange-500 w-full h-full"></div>
                </div>
              )}
              
              <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <project.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-sora font-semibold mb-2 group-hover:text-primary transition-colors relative z-10">
                {project.title}
              </h3>
              
              <p className="text-sm text-secondary-accent font-medium mb-3 relative z-10">
                {project.subtitle}
              </p>
              
              <p className="text-muted-foreground mb-4 line-clamp-3 relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tools.map((tool, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full btn-pill group-hover:border-primary/40 transition-colors relative z-10"
                    onClick={() => setSelectedProject(index)}
                    disabled={project.isPlaceholder}
                  >
                    {project.isPlaceholder ? "Coming Soon" : "View Details"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto custom-scrollbar">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-sora flex items-center gap-3">
                      <div className={`w-10 h-10 ${project.color} rounded-lg flex items-center justify-center`}>
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-8 mt-6">
                    {/* Overview */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary">📌 Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.details.overview || project.details.problem}</p>
                    </div>

                    {/* Media Section for Power BI Projects */}
                    {project.type === "powerbi" && project.images && (
                      <div>
                        <h4 className="font-semibold text-lg mb-4 text-primary">📷 Dashboard Screenshots</h4>
                        <Carousel className="w-full max-w-4xl mx-auto">
                          <CarouselContent>
                            {project.images.map((image, i) => (
                              <CarouselItem key={i}>
                                <div className="p-2">
                                  <img 
                                    src={image} 
                                    alt={`Dashboard ${i + 1}`}
                                    className="w-full rounded-lg shadow-lg border border-border"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                        {project.videoDemo && (
                          <div className="mt-4 text-center">
                            <p className="text-sm text-muted-foreground mb-2">🎥 Video Demo Available: {project.videoDemo}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Features for ML Projects */}
                    {project.details.features && (
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">🔑 Key Features</h4>
                        <ul className="space-y-2">
                          {project.details.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Dashboard Highlights for Power BI Projects */}
                    {project.details.dashboardHighlights && (
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">📊 Dashboard Highlights</h4>
                        <ul className="space-y-2">
                          {project.details.dashboardHighlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tools & Technologies */}
                    {project.details.approach && (
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">🛠 {project.type === "powerbi" ? "Tools & Technologies" : "Approach & Implementation"}</h4>
                        <ul className="space-y-2">
                          {project.details.approach.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-success">🚀 {project.type === "powerbi" ? "Insights & Results" : "Results & Impact"}</h4>
                      <ul className="space-y-2">
                        {project.details.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    {project.details.outcomes && (
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-success">🎯 Outcomes</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.details.outcomes}</p>
                      </div>
                    )}

                    {/* Future Improvements */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-warning">💡 Future Improvements</h4>
                      <ul className="space-y-2">
                        {project.details.improvements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-border">
                      {project.details.github && (
                        <Button variant="outline" asChild className="btn-pill">
                          <a href={project.details.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.details.demo && (
                        <Button asChild className="btn-pill">
                          <a href={project.details.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.videoDemo && (
                        <Button variant="outline" className="btn-pill">
                          <Play className="h-4 w-4 mr-2" />
                          Video Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;