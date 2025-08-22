import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "GIET University, Gunupur",
      duration: "Expected 2026",
      status: "Current",
      description: "Specializing in Data Science and Machine Learning applications"
    },
    {
      degree: "Senior Secondary",
      institution: "Tokyo Advanced Higher Secondary School, Remuna, Balasore", 
      duration: "Completed",
      cgpa: "7.89",
      description: "Science stream with focus on Mathematics and Computer Science"
    },
    {
      degree: "Higher Secondary",
      institution: "Saraswati Shishu Vidya Mandir, Bhograi, Balasore",
      duration: "Completed", 
      cgpa: "8.11",
      description: "Strong foundation in core subjects and analytical thinking"
    }
  ];

  const achievements = [
    {
      title: "HackerRank Profile",
      description: "Active problem solver with strong algorithmic skills",
      link: "https://www.hackerrank.com/profile/gpritam1471",
      icon: "🏆"
    },
    {
      title: "LeetCode Profile", 
      description: "Regular practice in data structures and algorithms",
      link: "https://leetcode.com/u/Pritam_Kumar_Ghosh/",
      icon: "💡"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-sora font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="glass-card p-6 hover:shadow-hero transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {edu.status === "Current" && (
                          <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                        {edu.cgpa && (
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            CGPA: {edu.cgpa}
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-sora font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      
                      <p className="text-lg text-secondary-accent font-medium mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Coding Profiles */}
          <div>
            <h3 className="text-2xl font-sora font-semibold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Coding Profiles
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card p-6 hover:shadow-hero transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
              
              {/* Additional Info Card */}
              <div className="glass-card p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-foreground mb-2">
                  Continuous Learning
                </h4>
                <p className="text-sm text-muted-foreground">
                  Regular participation in coding challenges and hackathons to stay updated with latest technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;