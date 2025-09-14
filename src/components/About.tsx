const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="glass-card p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I'm a Computer Science undergraduate passionate about building scalable and user-friendly
            web applications.My focus is on developing responsive frontends, robust backends, and integrating
            databases to deliver complete end-to-end solutions.I constantly explore new technologies to improve performance, 
            usability, and deployment, ensuring that the applications I build are both efficient and impactful.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Fresher</div>
              <div className="text-sm text-muted-foreground">Less than 1 year</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;