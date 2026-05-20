
import React from 'react';
import { ExternalLink, Github, Brain, Phone, Shield, Bot, Scale, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Wukala-GPT",
      description: "An enterprise-grade LegalTech SaaS platform tailored for Pakistan. It features a bilingual (Urdu/English) AI chatbot for real-time legal assistance via text and voice, AES-256 document security, a dynamic lawyer hiring marketplace, and comprehensive access to verified legal news and literature.",
      icon: Scale,
      techStack: ["React.js", "Langgraph", "Vector DB", "Tailwind CSS", 'FastAPI', 'ASP.NET core', 'PostgreSql'],
      impact: "In Development",
      featured: true,
      github: "https://wukala-gpt-kappa.vercel.app/"
    },
    {
      title: "Al-Nukhwa",
      description: "Prophetic Tib: Medicine & Healthcare is a unique digital platform dedicated to traditional and prophetic healing methods practiced across India, Pakistan, and Afghanistan. Rooted in centuries-old wisdom, it offers guidance, remedies, and educational content based on Desi and prophetic medicine, promoting natural wellness through trusted cultural practices and Sunnah-based healing traditions.",
      icon: Activity,
      techStack: ["FastAPI", "TTS & STT Models", "Llama", "Pinecone", "React", "ASP.NET core"],
      impact: "In development",
      featured: true,
      github: "https://github.com/Hamid-GenAI-Eng/AlNukhwa.Backend.git"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">AI Systems Shipped</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real Agentic AI, RAG, and SaaS builds — not prototypes. Each one solved a concrete business problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-muted/20 relative overflow-hidden flex flex-col h-full"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <CardHeader className="flex-none">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shadow-sm inline-flex ring-1 ring-primary/20">
                    <project.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                        title="View Source on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.featured && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 shadow-sm font-semibold tracking-wide uppercase text-[10px] py-1">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">{project.description}</p>
              </CardHeader>
              
              <CardContent className="mt-auto pt-6 border-t border-border/50">
                <div className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-background/50 hover:bg-secondary/50 border-border/60 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/20 transition-colors flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">Business Impact</span>
                    <span className="text-sm font-medium text-foreground text-right">{project.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Link to="/projects">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              View All Solutions
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
