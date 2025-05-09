
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-secondary/50 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-foreground/70">
            © {currentYear} Smit Joshi. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#home"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
