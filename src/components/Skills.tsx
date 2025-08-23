import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Brain, Code, Users, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data & BI",
      icon: BarChart3,
      color: "text-blue-500",
      skills: [
        { name: "Data Analysis", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistical Analysis", level: 80 },
        { name: "Excel/Advanced Excel", level: 88 },
        { name: "Power BI", level: 85 }
      ]
    },
    {
      title: "ML & NLP",
      icon: Brain,
      color: "text-purple-500",
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Deep Learning", level: 82 },
        { name: "NLP", level: 85 },
        { name: "Model Development", level: 86 },
        { name: "Data Preprocessing", level: 90 }
      ]
    },
    {
      title: "Programming & DB",
      icon: Code,
      color: "text-green-500",
      skills: [
        { name: "Python", level: 92 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Professional",
      icon: Users,
      color: "text-orange-500",
      skills: [
        { name: "Team Leadership", level: 78 },
        { name: "Teamwork", level: 90 },
        { name: "Management Skills", level: 75 }
      ]
    }
  ];

  const languages = [
    { name: "Bengali", level: "Proficient" },
    { name: "Odia", level: "Proficient" },
    { name: "Hindi", level: "Proficient" },
    { name: "English", level: "Advanced" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`h-6 w-6 ${category.color}`} />
                <h3 className="text-xl font-sora font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-6 w-6 text-indigo-500" />
            <h3 className="text-xl font-sora font-semibold">Languages</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-medium text-foreground mb-1">{language.name}</div>
                <Badge variant="secondary" className="text-xs">
                  {language.level}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;