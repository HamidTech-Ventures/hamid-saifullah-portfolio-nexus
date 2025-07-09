
import React from 'react';
import { ArrowRight, Code, Cpu, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-green-500 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-blue-500 rounded-full animate-float opacity-30" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8 animate-fade-in">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Tech Entrepreneur & AI Innovator</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up text-shadow leading-tight">
            Building the Future with
            <span className="block gradient-text">AI, Code & Purpose</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            21-year-old Software Engineer from Pakistan, creating real-world AI solutions that transform industries and empower businesses globally.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
            {['AI & LLMs', 'MERN Stack', 'Blockchain', 'SaaS', '.NET'].map((tech) => (
              <span key={tech} className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary rounded-full text-xs sm:text-sm font-medium border border-border">
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity group w-full sm:w-auto">
              See My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
              Let's Build Together
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto mt-12 sm:mt-16 animate-fade-in px-4" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">2+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
