
import React from 'react';
import { ExternalLink, Github, Brain, Phone, Shield, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Wukala-GPT",
      description: "Revolutionary AI-powered legal assistant that provides instant legal consultations, document analysis, and case research capabilities for law firms and individuals.",
      icon: Brain,
      techStack: ["Next.js", "OpenAI GPT-4", "Vector DB", "Tailwind CSS"],
      impact: "Reduced legal research time by 80%",
      featured: true,
      link: "#",
      github: "#"
    },
    {
      title: "Healthcare AI System",
      description: "Comprehensive AI-driven healthcare platform featuring symptom analysis, appointment scheduling, and patient management with HIPAA compliance.",
      icon: Shield,
      techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
      impact: "Serving 1000+ patients daily",
      featured: true,
      link: "#",
      github: "#"
    },
    {
      title: "Voice Call Agent",
      description: "Intelligent voice AI agent capable of handling customer service calls, sales inquiries, and appointment bookings with natural conversation flow.",
      icon: Phone,
      techStack: ["Python", "Speech-to-Text", "LLMs", "WebRTC"],
      impact: "95% customer satisfaction rate",
      featured: false,
      link: "#",
      github: "#"
    },
    {
      title: "Enterprise Chatbot Platform",
      description: "White-label chatbot solution for enterprises with advanced NLP, multi-language support, and seamless integration capabilities.",
      icon: Bot,
      techStack: ["MERN Stack", "NLP", "Socket.io", "AWS"],
      impact: "Deployed across 50+ companies",
      featured: false,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world AI solutions that are transforming industries and empowering businesses 
            to achieve more than they thought possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm font-medium text-primary">Business Impact</p>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary/50">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
