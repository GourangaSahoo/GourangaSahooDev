import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Engineer Intern",
      company: "APT Software Avenues Pvt. Ltd.",
      location: "Kolkata, IN",
      duration: "May 2024 – Jul 2024",
      type: "Internship",
      achievements: [
        "Automated model training workflows to speed up experiments",
        "Evaluated models with accuracy, precision, recall, F1, AUC; improved reliability",
        "Optimized models to boost accuracy and cut compute time",
        "Built web apps to serve real-time predictions"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Rinex",
      location: "Bengaluru, IN", 
      duration: "Jan 2024 – Mar 2024",
      type: "Internship",
      achievements: [
        "Performed EDA on large datasets to find patterns and trends",
        "Built ML models for classification and regression tasks",
        "Created visualizations and dashboards with Tableau, Power BI, and R Shiny",
        "Cleaned and transformed raw data for analysis and reporting"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-6 md:p-8 hover:shadow-hero transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora font-semibold text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-secondary-accent font-medium mb-3">
                    {exp.company}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;