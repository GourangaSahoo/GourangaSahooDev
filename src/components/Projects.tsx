import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, ExternalLink, Shield, BarChart3, Zap, Play , MessageSquare,Users ,UtensilsCrossed,ShoppingCart} from "lucide-react";
import weaponDetectionCard from "@/assets/weapon-detection-card.jpg";
import pizzaDashboardCard from "@/assets/pizza-dashboard-card.jpg";
import idExtractionCard from "@/assets/id-extraction-card.jpg";
import chat from "../assets/chat.png";
import linkedin from "../assets/linkedin.png";
import alumni from "../assets/alumni.png";
import ecommerce from "../assets/e-comerce (1).png";
import catring from "../assets/catring.jpg";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
  title: "Real-Time Chat Application",
  subtitle: "Instant Messaging Platform",
  description: "A full-stack real-time chat application with one-to-one messaging, online presence tracking, and media sharing using Socket.io and MongoDB.",
  icon: MessageSquare,
  tools: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
  color: "bg-blue-500",
  type: "web",
  cardImage: chat,
  details: {
    problem: "People need a reliable communication platform that supports instant messaging and real-time online presence tracking for better interaction.",
    overview: "A MERN stack-based real-time chat application that allows users to send instant messages, share media, and track online presence. Built using React.js, Node.js, MongoDB, and Socket.io for seamless communication.",
    features: [
      "💬 One-to-One Real-Time Messaging",
      "🟢 Online/Offline User Presence Tracking",
      "📂 Media Sharing (images, files, etc.)",
      "🔔 Instant Notifications for messages",
      "🖥️ Responsive UI built with Tailwind CSS"
    ],
    approach: [
      "Developed backend using Node.js and MongoDB to handle user authentication, chats, and media storage",
      "Integrated Socket.io for real-time messaging and presence tracking",
      "Designed frontend with React.js and Tailwind CSS for responsive user interface",
      "Implemented notification system for new messages",
      "Used JWT authentication for secure communication"
    ],
    results: [
      "Seamless real-time messaging with instant delivery",
      "Accurate online/offline presence detection",
      "Responsive chat interface with media sharing",
      "Stable and scalable backend for multiple users"
    ],
    outcomes: "A scalable real-time messaging platform suitable for personal and professional communication with secure and reliable features.",
    improvements: [
      "Implement group chat functionality",
      "Add end-to-end encryption for enhanced security",
      "Develop mobile app version with React Native",
      "Integrate push notifications for mobile devices"
    ],
    github: "https://github.com/GourangaSahoo/fullstack-chat-app",
    demo: "https://fullstack-chat-app-ivae.onrender.com/"
  }
    },

    {
  title: "Catering Management",
  subtitle: "React.js | Node.js | MongoDB | Mantine | Tabler | Tailwind CSS",
  description: "A real-time Catering Management System with a client-facing landing page for inquiries and bookings, along with admin and manager dashboards for efficient event coordination.",
  icon: UtensilsCrossed,
  tools: ["React.js", "Node.js", "MongoDB", "Mantine", "Tabler", "Tailwind CSS", "JavaScript"],
  color: "bg-emerald-600",
  type: "webapp",
  cardImage: catring,
  images: ["/lovable-uploads/catering-1.png", "/lovable-uploads/catering-2.png"],
  details: {
    problem: "Traditional catering businesses often struggle with manual coordination, scattered bookings, and inefficient communication between clients, managers, and administrators.",
    overview: "Designed and implemented a Catering Management System to streamline inquiries, bookings, and operational workflows with dedicated dashboards for administrators and managers.",
    approach: [
      "React.js: Built responsive and interactive client landing page",
      "Node.js: Developed backend APIs for inquiries, bookings, and dashboard features",
      "MongoDB: Managed event, client, and booking data storage",
      "Mantine & Tabler: Designed professional and user-friendly dashboards",
      "Tailwind CSS: Created modern and responsive UI components"
    ],
    dashboardHighlights: [
      "📝 Client-facing Landing Page for inquiries and booking requests",
      "📊 Admin Dashboard to monitor bookings, clients, and events",
      "👨‍💼 Manager Dashboard for operational coordination",
      "🔔 Real-time updates for event scheduling and status tracking",
      "📂 Centralized database for client and event management"
    ],
    results: [
      "Improved booking efficiency through automated inquiry handling",
      "Enhanced transparency between admins, managers, and clients",
      "Streamlined operations with real-time updates",
      "Provided professional and user-friendly digital platform for catering services"
    ],
    outcomes: "The system reduced operational overhead, minimized booking errors, and improved client satisfaction by providing a seamless digital experience for event management.",
    improvements: [
      "Integrate online payment gateway for bookings",
      "Add analytics dashboard for revenue and client insights",
      "Enable real-time chat between clients and managers",
      "Implement push/email notifications for booking confirmations"
    ],
    github: "https://github.com/Prateeksen27/CMS/tree/Gouranga",
    demo: ""
  }
}
,

    {
  title: "Alumni Association Portal",
  subtitle: "Node.js | Express.js | PostgreSQL | EJS | Bootstrap",
  description: "A web-based Alumni Association Portal built to connect alumni with students and faculty, enabling networking, mentorship, and event management through a secure platform.",
  icon: Users,
  tools: ["Node.js", "Express.js", "PostgreSQL", "EJS", "Bootstrap", "JavaScript"],
  color: "bg-indigo-600",
  type: "webapp",
  cardImage: alumni,
  images: ["/lovable-uploads/alumni-portal-1.png", "/lovable-uploads/alumni-portal-2.png"],
  details: {
    problem: "Colleges often lack a unified digital platform to maintain alumni relationships, organize events, and provide mentorship opportunities for students.",
    overview: "Developed a responsive Alumni Association Portal that allows alumni registration, event participation, and student-alumni interaction, while providing admins tools to manage the community effectively.",
    approach: [
      "EJS: Dynamic server-side rendering for alumni and student views",
      "Node.js & Express: Backend API for authentication, events, and profiles",
      "PostgreSQL: Relational database design for alumni, events, and communication",
      "Bootstrap & JavaScript: Built responsive UI with interactive features"
    ],
    dashboardHighlights: [
      "👤 Alumni & Student Profiles with education and work history",
      "📅 Event Management: Create, manage, and register for alumni events",
      "💬 Forum & Messaging system for alumni-student networking",
      "🔐 Secure authentication with role-based access (Admin, Alumni, Student)",
      "📊 Admin Dashboard for monitoring users, posts, and events"
    ],
    results: [
      "Established a digital bridge between alumni and students",
      "Streamlined event creation and alumni participation",
      "Enabled career guidance and mentorship opportunities",
      "Improved alumni engagement through interactive features"
    ],
    outcomes: "Enhanced alumni-student relations, created a networking hub for career support, and simplified event management for the institution.",
    improvements: [
      "Add real-time chat using WebSockets",
      "Integrate job posting and referral system",
      "Enable push/email notifications for events and messages",
      "Expand analytics for alumni engagement insights"
    ],
    github: "https://github.com/GourangaSahoo/Alumni_Association",
    demo: ""
  }
}
,
    {
  title: "LinkedIn Clone",
  subtitle: "React.js | Node.js | Express.js | Tailwind CSS",
  description: "A full-stack LinkedIn clone replicating core features like user authentication, posts, connections, and notifications with a responsive UI.",
  icon: Users,
  tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  color: "bg-sky-600",
  type: "webapp",
  cardImage: linkedin,
  details: {
    problem: "Students and professionals often lack access to a platform where they can network, share professional updates, and interact, similar to LinkedIn.",
    overview: "A LinkedIn-inspired social networking platform that provides user authentication, posting, connections, and notification systems with a modern responsive interface.",
    features: [
      "👤 User authentication with JWT and secure login/register",
      "📝 Create, like, and comment on posts",
      "🤝 Connection requests and professional networking",
      "🔔 Notifications for posts, likes, and connections",
      "📱 Responsive design using Tailwind CSS"
    ],
    approach: [
      "Built frontend with React.js and Tailwind CSS for responsive UI",
      "Developed backend with Node.js and Express.js for REST APIs",
      "Implemented JWT authentication and role-based access",
      "Designed MongoDB schema for users, posts, and notifications",
      "Optimized performance with efficient API routing and modular structure"
    ],
    results: [
      "Successfully implemented a LinkedIn-like social networking experience",
      "Enabled interactive post creation, likes, and comments",
      "Provided seamless user connections and notifications",
      "Delivered a responsive and scalable platform for networking",
      "Built a project showcasing full-stack development skills"
    ],
    outcomes: "Created a professional networking platform similar to LinkedIn that demonstrates strong skills in MERN stack development and modern UI design.",
    improvements: [
      "Add real-time chat and messaging system",
      "Integrate AI-driven job recommendations",
      "Enable advanced search and filtering for users and posts",
      "Implement cloud storage for media files",
      "Add analytics for user engagement tracking"
    ],
    github: "https://github.com/GourangaSahoo/linkedin-clone",
    demo: "https://linkedin-clone-kx0h.onrender.com"
  }
}
,
{
  title: "E-Commerce Platform",
  subtitle: "MERN Stack | React.js | Node.js | Express.js | MongoDB | Tailwind CSS",
  description: "A modern e-commerce website built on the MERN stack, offering product listings, shopping cart, order management, and secure checkout with an intuitive user experience.",
  icon: ShoppingCart,
  tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"],
  color: "bg-orange-600",
  type: "webapp",
  cardImage: ecommerce,
  images: ["/lovable-uploads/ecommerce-1.png", "/lovable-uploads/ecommerce-2.png"],
  details: {
    problem: "Traditional shopping often limits product reach and lacks convenience, while many small businesses struggle to build scalable online platforms.",
    overview: "Developed a full-featured E-Commerce Platform enabling product browsing, shopping cart management, order placement, and secure payments. Admins can manage products, orders, and user roles from a dedicated dashboard.",
    approach: [
      "React.js: Built responsive and dynamic product pages with shopping cart UI",
      "Node.js & Express: Created backend APIs for products, users, orders, and authentication",
      "MongoDB: Designed schemas for users, products, categories, carts, and orders",
      "Tailwind CSS: Styled modern and mobile-first user interface",
      "JWT Authentication: Secured login, signup, and role-based access"
    ],
    dashboardHighlights: [
      "🛍️ Product Catalog with categories, images, and descriptions",
      "🛒 Shopping Cart with real-time price calculation",
      "💳 Secure Checkout with payment integration (Stripe/PayPal)",
      "📦 Order Tracking for customers",
      "👤 User Profiles with order history",
      "🛠️ Admin Dashboard for managing products, categories, and orders",
      "🔍 Search & Filters for quick product discovery",
      "⭐ Wishlist & Product Reviews system"
    ],
    results: [
      "Delivered a scalable online shopping experience with seamless checkout",
      "Empowered admins with tools for inventory and order management",
      "Improved customer engagement through reviews and wishlists",
      "Increased sales potential for small businesses via digital presence"
    ],
    outcomes: "The platform simplified online shopping for users while providing businesses with a powerful management system to grow their e-commerce presence.",
    improvements: [
      "Integrate AI-based product recommendations",
      "Add real-time chat support for customers",
      "Implement subscription-based product deliveries",
      "Expand analytics dashboard for sales and customer insights",
      "Enable multi-vendor marketplace support"
    ],
    github: "https://github.com/GourangaSahoo/E-commerce",
    demo: ""
  }
}

,
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
            <div key={index} className="glass-card group hover:shadow-hero transition-all duration-300 relative overflow-hidden">
              {/* Animated background for ML project */}
              {project.type === "ml" && (
                <div className="absolute inset-0 opacity-10">
                  <div className="animate-pulse bg-gradient-to-br from-red-500 to-orange-500 w-full h-full"></div>
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.cardImage} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
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
                    >
                      View Details
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
                    </div>
                  </div>
                </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;