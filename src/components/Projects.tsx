
import React from 'react';
import { ExternalLink, Github, Brain, Phone, Shield, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Wukala-GPT",
      description: "Wukala-GPT is a powerful SaaS legal platform that offers an AI law chatbot answering Pakistan law queries in Urdu and English (text and voice), secures legal documents on blockchain, helps users find and hire lawyers with filters, provides verified national/international legal news, and offers free access to Pakistan law books.",
      icon: Brain,
      techStack: ["React.js", "Langchain", 'Groq Llama', "Vector DB", "Tailwind CSS", 'FastAPI', 'ASP.NET Web Api', 'PostgreSql'],
      impact: "Reduced legal research time by 80%",
      featured: true,
      link: "https://elevate-digital-presence.vercel.app/",
      github: "https://github.com/HamidTech-Ventures"
    },
    {
      title: "Healthcare AI System",
      description: "MediTech AI is a smart healthcare platform offering telemedicine, AI chatbots for doctors and patients, secure medical record storage, appointment booking, and free medicine delivery—streamlining care for doctors, patients, students, and pharmacies. It bridges modern technology with healthcare to improve access, efficiency, and patient outcome",
      icon: Shield,
      techStack: ["React", "Node.js", "TensorFlow", "MongoDB", 'AWS', 'CI/CD'],
      impact: "Serving 1000+ patients daily",
      featured: true,
      link: "https://elevate-digital-presence.vercel.app/",
      github: "https://github.com/HamidTech-Ventures"
    },
    {
      title: "Sehat-e-Nabvi Hub",
      description: "Prophetic Tib: Medicine & Healthcare is a unique digital platform dedicated to traditional and prophetic healing methods practiced across India, Pakistan, and Afghanistan. Rooted in centuries-old wisdom, it offers guidance, remedies, and educational content based on Desi and prophetic medicine, promoting natural wellness through trusted cultural practices and Sunnah-based healing traditions.",
      icon: Shield,
      techStack: ["FastAPI", "TTS & STT Models", "Llama", "Pinecone", "React", "ASP.NET Web Api"],
      impact: "95% customer satisfaction rate",
      featured: false,
      link: "https://elevate-digital-presence.vercel.app/",
      github: "https://github.com/HamidTech-Ventures"
    },
    {
      title: "Enterprise Chatbot Platform",
      description: "SupportAI is an advanced AI-powered customer support chatbot that provides instant, multilingual assistance, handles FAQs, and automates query resolution for businesses—enhancing customer experience and reducing response time across platforms. White-label chatbot solution for enterprises with advanced NLP, multi-language support, and seamless integration capabilities.",
      icon: Bot,
      techStack: ["FastAPI", "Langchain", "Prompt Engineering", "AWS"],
      impact: "Deployed across 2+ Products",
      featured: false,
      link: "https://elevate-digital-presence.vercel.app/",
      github: "https://github.com/HamidTech-Ventures"
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
          <Link to="/projects">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
