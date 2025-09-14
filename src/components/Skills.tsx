import { Badge } from "@/components/ui/badge";
import { Globe, Server, Layers, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-orange-500",
      skills: ["Java", "Python", "C"],
    },
    {
      title: "Frontend Development",
      icon: Layers,
      color: "text-blue-500",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Mantine UI",
        "Bootstrap",
        "Daisy UI",
        "Material UI",
        "Three.js",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-500",
      skills: [
        "Node.js",
        "Express.js",
        "Socket.io",
        "REST APIs",
        "Authentication (JWT/OAuth)",
      ],
    },
    {
      title: "Database & Cloud",
      icon: Code,
      color: "text-purple-500",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "AWS (EC2, IAM, S3, Lambda, Amplify, SNS, CloudWatch, RDS)",
        "Render",
      ],
    },
    {
      title: "Version Control & Tools",
      icon: Code,
      color: "text-yellow-500",
      skills: ["Git", "GitHub", "Postman"],
    },
    {
      title: "Coursework",
      icon: Code,
      color: "text-teal-500",
      skills: ["Cloud Computing", "DSA", "System Design", "DBMS", "OOP"],
    },
    {
      title: "Soft Skills",
      icon: Code,
      color: "text-pink-500",
      skills: [
        "Communication",
        "Problem-Solving",
        "Time Management",
        "Team Collaboration",
      ],
    },
  ];

  const languages = [
    { name: "Odia", level: "Proficient" },
    { name: "Hindi", level: "Proficient" },
    { name: "English", level: "Advanced" },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-3">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-5 md:p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <category.icon className={`h-6 w-6 ${category.color}`} />
                <h3 className="text-xl font-sora font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="glass-card p-5">
          <div className="flex items-center gap-3 mb-5">
            <Globe className="h-6 w-6 text-indigo-500" />
            <h3 className="text-xl font-sora font-semibold">Languages</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className="text-base font-semibold text-foreground mb-1">
                  {language.name}
                </div>
                <Badge variant="secondary" className="text-xs px-2 py-1">
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
