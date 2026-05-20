
import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Hamid Saifullah</h3>
            <p className="text-muted-foreground">
              Helping businesses grow with Agentic AI systems and modern web software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#ventures" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Agentic AI', 'LangGraph', 'RAG', 'LLMs', 'Machine Learning', 'FastAPI', 'Node.js', '.NET', 'React', 'AWS', 'Python'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            <Code className="h-4 w-4 text-primary" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-orange-500" />
            <span>by Hamid Saifullah</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2026 Hamid Saifullah. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
