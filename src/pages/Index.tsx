
import { useEffect } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Smit Joshi | Software Developer";
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  
  return (
    <MainLayout>
      <div className="page-transition">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </MainLayout>
  );
};

export default Index;
