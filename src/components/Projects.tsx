import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye, Zap, Brain, Shield } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Information Extraction from Government ID Cards",
      subtitle: "Structured Data Processing",
      description: "Converts unstructured text on ID cards into accurate, structured fields to streamline processing.",
      icon: Eye,
      tools: ["OCR", "NLP", "Python"],
      color: "bg-blue-500",
      details: {
        problem: "Manual processing of government ID cards was time-consuming and error-prone, requiring automated extraction of structured data from unstructured documents.",
        approach: [
          "Implemented advanced OCR techniques for text recognition from various ID card formats",
          "Applied NLP algorithms to parse and structure extracted text data",
          "Built data validation and cleaning pipelines for accuracy",
          "Created standardized output format for downstream processing"
        ],
        results: [
          "95% accuracy in text extraction from ID cards",
          "Reduced processing time from hours to minutes",
          "Standardized data format for multiple government agencies",
          "Robust handling of different card layouts and quality"
        ],
        improvements: [
          "Add support for damaged or low-quality document images",
          "Implement multi-language support for regional documents",
          "Create real-time processing API for integration"
        ],
        github: "https://github.com/6Pritam/id-extraction",
        demo: ""
      }
    },
    {
      title: "Custom Text Autocomplete & Suggestion System",
      subtitle: "LSTM-based Prediction Engine",
      description: "Predicts next words from PDF-extracted text; interactive UI for extraction, model training, and generation.",
      icon: Zap,
      tools: ["LSTM", "NLP", "Python"],
      color: "bg-purple-500",
      details: {
        problem: "Need for intelligent text completion system that learns from domain-specific documents to provide accurate suggestions and automate content generation.",
        approach: [
          "Developed PDF text extraction pipeline with preprocessing",
          "Implemented LSTM neural networks for sequence prediction",
          "Built interactive web interface for model training and inference",
          "Created real-time suggestion system with context awareness"
        ],
        results: [
          "85% accuracy in next-word prediction",
          "Real-time text suggestions with < 100ms latency",
          "Support for training on custom document collections",
          "Interactive UI for seamless user experience"
        ],
        improvements: [
          "Implement transformer-based models for better context understanding",
          "Add multi-document training capabilities",
          "Create domain-specific model variants"
        ],
        github: "https://github.com/6Pritam/text-autocomplete",
        demo: ""
      }
    },
    {
      title: "Spam Detection System",
      subtitle: "ML Classification Pipeline",
      description: "Classifies messages as spam or important with a simple, deployable pipeline.",
      icon: Shield,
      tools: ["Python", "ML", "Deep Learning"],
      color: "bg-green-500",
      details: {
        problem: "Email and message platforms needed robust spam detection to filter unwanted content while preserving important communications.",
        approach: [
          "Collected and preprocessed large dataset of spam and legitimate messages",
          "Implemented multiple ML algorithms: Naive Bayes, SVM, Random Forest",
          "Applied deep learning models for better feature extraction",
          "Built deployment pipeline with model versioning and monitoring"
        ],
        results: [
          "97% accuracy in spam classification",
          "Low false positive rate (< 1%)",
          "Real-time processing of incoming messages",
          "Scalable deployment architecture"
        ],
        improvements: [
          "Add adaptive learning for new spam patterns",
          "Implement multilingual spam detection",
          "Create explanation system for classification decisions"
        ],
        github: "https://github.com/6Pritam/spam-detection",
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
            <div key={index} className="glass-card p-6 group hover:shadow-hero transition-all duration-300">
              <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-sora font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-secondary-accent font-medium mb-3">
                {project.subtitle}
              </p>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
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
                    className="w-full btn-pill group-hover:border-primary/40 transition-colors"
                    onClick={() => setSelectedProject(index)}
                  >
                    View Case Study
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto custom-scrollbar">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-sora flex items-center gap-3">
                      <div className={`w-10 h-10 ${project.color} rounded-lg flex items-center justify-center`}>
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary">Problem Statement</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.details.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary">Approach & Implementation</h4>
                      <ul className="space-y-2">
                        {project.details.approach.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-success">Results & Impact</h4>
                      <ul className="space-y-2">
                        {project.details.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-warning">Future Improvements</h4>
                      <ul className="space-y-2">
                        {project.details.improvements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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