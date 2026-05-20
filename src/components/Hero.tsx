
import React from 'react';
import { ArrowRight, Code, Cpu, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-green-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-blue-500 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center justify-between">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 w-full max-w-2xl mx-auto lg:mx-0 z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 lg:mb-8 animate-fade-in">
              <Rocket className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Agentic AI Systems • Modern Web & Software</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in-up text-shadow leading-tight">
              I help businesses grow with
              <span className="block gradient-text">Agentic AI & modern software</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              I partner with founders and operators to design and ship Agentic AI systems and modern web software that unlock real growth — more revenue, lower costs, faster operations. Engineered to ship in weeks, built to scale for years.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 animate-fade-in-up max-w-xl mx-auto lg:mx-0" style={{ animationDelay: '0.4s' }}>
              {['Agentic AI', 'LangGraph', 'RAG Chatbots', 'ML Automation', 'FastAPI', 'React / Next', 'SaaS MVPs'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-secondary/80 hover:bg-secondary transition-colors rounded-full text-xs sm:text-sm font-medium border border-border/50">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                size="lg"
                className="gradient-bg hover:opacity-90 transition-opacity group w-full sm:w-auto h-12 px-8"
                onClick={() => scrollToSection('contact')}
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto h-12 px-8"
                onClick={() => scrollToSection('projects')}
              >
                See Recent Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-md mx-auto lg:mx-0 mt-16 animate-fade-in border-t border-border/50 pt-8" style={{ animationDelay: '0.8s' }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Systems Shipped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground">24h</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Reply Time</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">Hands-on Build</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center animate-fade-in-up z-10 -translate-y-8 lg:-translate-y-20" style={{ animationDelay: '0.3s' }}>
            <div className="relative group mx-auto lg:mx-0">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/20 bg-muted/20">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 pointer-events-none"></div>
                <img
                  src="/hamid-profile.jpg"
                  alt="Hamid Saifullah"
                  className="object-cover w-full h-full object-top transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
