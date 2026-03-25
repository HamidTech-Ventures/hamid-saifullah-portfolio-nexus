
import React from 'react';
import { ArrowLeft, ExternalLink, Github, Brain, Phone, Shield, Bot, Zap, Database, Code, Smartphone, Scale, Activity, Boxes, ShoppingCart, Wrench, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

const AllProjects = () => {
  const allProjects = [
    {
      title: "Wukala-GPT",
      description: "An enterprise-grade LegalTech SaaS platform tailored for Pakistan. It features a bilingual (Urdu/English) AI chatbot for real-time legal assistance via text and voice, AES-256 document security, a dynamic lawyer hiring marketplace, and comprehensive access to verified legal news and literature.",
      icon: Scale,
      techStack: ["React.js", "Langgraph", "Vector DB", "Tailwind CSS", 'FastAPI', 'ASP.NET core', 'PostgreSql'],
      impact: "Reduced legal research time by 80%",
      featured: true,
      category: "AI & LLM",
      github: "https://wukala-gpt-kappa.vercel.app/",
      status: "In Development"
    },
    {
      title: "Al-Nukhwa",
      description: "Prophetic Tib: Medicine & Healthcare is a unique digital platform dedicated to traditional and prophetic healing methods practiced across India, Pakistan, and Afghanistan. Rooted in centuries-old wisdom, it offers guidance, remedies, and educational content based on Desi and prophetic medicine, promoting natural wellness through trusted cultural practices and Sunnah-based healing traditions.",
      icon: Activity,
      techStack: ["FastAPI", "TTS & STT Models", "Llama", "Pinecone", "React", "ASP.NET core"],
      impact: "In development",
      featured: true,
      github: "https://github.com/Hamid-GenAI-Eng/AlNukhwa.Backend.git",
      category: "Healthcare",
      status: "In development"
    },
    {
      title: "Light craft management system",
      description: "A comprehensive inventory management and invoicing system custom-built for a client in the LED lighting industry. The platform streamlines daily operations by automating billing processes, providing real-time stock tracking, and managing order fulfillment efficiently.",
      icon: Boxes,
      techStack: ["MERN Stack", "Node.js", "Express.js", "React.js", "MongoDB"],
      impact: "95% customer satisfaction rate",
      category: "software development",
      github: "https://github.com/Hamid-GenAI-Eng/light-craft-backend.git",
      status: "Live"
    },
    {
      title: "Toys E-commerce and Management System",
      description: "A full-stack e-commerce platform and comprehensive store management system. It features a seamless, interactive shopping experience for customers, paired with a robust administrative dashboard for real-time inventory tracking, order fulfillment, and seamless payment processing.",
      icon: ShoppingCart,
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
      impact: "95% customer satisfaction rate",
      category: "E-commerce",
      github: "https://github.com/Hamid-GenAI-Eng/toys-ecommerce-backend.git",
      status: "stop by client"
    },
    {
      title: "Jeddah Repair",
      description: "A professional service provider brand's Website developed for a Saudi Arabian client providing comprehensive home maintenance solutions. The website streamlines customer inquiries and connecting for plumbing, electrical, and general repair services, delivering a localized and user-friendly digital experience.",
      icon: Wrench,
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
      impact: "100% client satisfaction rate",
      category: "web development",
      status: "live",
      github: "https://www.jeddahdepairs.com/",
    }
  ];

  const categories = ["All", "AI & LLM", "SaaS", "Healthcare", "web development", "E-commerce"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
            {/* Header */}
            <div className="mb-12">
              <Link to="/">
                <Button variant="ghost" className="mb-6 group">
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Button>
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                All <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A comprehensive showcase of innovative solutions I've built across various industries and technologies.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "gradient-bg" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-muted/20 relative overflow-hidden flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.15}s` }}
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
                        <Badge variant={project.status.toLowerCase() === 'live' ? 'default' : 'secondary'} className="shadow-sm font-semibold tracking-wide uppercase text-[10px] py-1">
                          {project.status.toUpperCase()}
                        </Badge>
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
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default AllProjects;
