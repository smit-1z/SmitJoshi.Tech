
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-6 animate-slide-up">
          <p className="text-primary font-medium">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            <span>Smit Joshi.</span>
            <div className="mt-2 text-foreground/70">I build things for the web.</div>
          </h1>
          
          <p className="max-w-[600px] text-lg text-foreground/70">
            I'm a software developer specializing in building extraordinary digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex gap-4 mt-4">
            <Button 
              size="lg" 
              className="button-transition"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See my work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="button-transition"
              asChild
            >
              <a href="https://drive.google.com/file/d/1R-UCGo1_5NAXd4_IBv4NB6B85YQTivib/view" 
                 target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
