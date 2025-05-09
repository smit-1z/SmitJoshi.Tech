
import { Button } from "@/components/ui/button";

export function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Express", "MongoDB", "SQL", "AWS", 
    "Git", "Docker"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-right">
            <p className="text-lg text-foreground/80">
              Hello! I'm Smit Joshi, a passionate software developer with expertise in creating 
              modern web applications and solutions. I enjoy solving complex problems and turning 
              ideas into reality through elegant code.
            </p>
            
            <p className="text-lg text-foreground/80">
              My journey in tech started with my fascination with computers at a young age. 
              Since then, I've gained experience across various domains including web development, 
              backend systems, and cloud infrastructure.
            </p>
            
            <p className="text-lg text-foreground/80">
              I'm constantly learning and exploring new technologies to stay at the forefront 
              of innovation. Currently, I'm focused on fullstack development and building 
              user-centered applications.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <Button 
              className="button-transition"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1R-UCGo1_5NAXd4_IBv4NB6B85YQTivib/view" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              {/* Profile image placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-4xl font-bold">SJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
