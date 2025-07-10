
import React from 'react';
import { ArrowLeft, ExternalLink, Github, Brain, Phone, Shield, Bot, Zap, Database, Code, Smartphone } from 'lucide-react';
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
      description: "Revolutionary AI-powered legal assistant that provides instant legal consultations, document analysis, and case research capabilities for law firms and individuals.",
      icon: Brain,
      techStack: ["Next.js", "OpenAI GPT-4", "Vector DB", "Tailwind CSS"],
      impact: "Reduced legal research time by 80%",
      featured: true,
      category: "AI & LLM",
      status: "Live"
    },
    {
      title: "Healthcare AI System",
      description: "Comprehensive AI-driven healthcare platform featuring symptom analysis, appointment scheduling, and patient management with HIPAA compliance.",
      icon: Shield,
      techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
      impact: "Serving 1000+ patients daily",
      featured: true,
      category: "Healthcare",
      status: "Live"
    },
    {
      title: "Voice Call Agent",
      description: "Intelligent voice AI agent capable of handling customer service calls, sales inquiries, and appointment bookings with natural conversation flow.",
      icon: Phone,
      techStack: ["Python", "Speech-to-Text", "LLMs", "WebRTC"],
      impact: "95% customer satisfaction rate",
      category: "AI & Voice",
      status: "Live"
    },
    {
      title: "Enterprise Chatbot Platform",
      description: "White-label chatbot solution for enterprises with advanced NLP, multi-language support, and seamless integration capabilities.",
      icon: Bot,
      techStack: ["MERN Stack", "NLP", "Socket.io", "AWS"],
      impact: "Deployed across 50+ companies",
      category: "SaaS",
      status: "Live"
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting platform using smart contracts to ensure transparent, secure, and tamper-proof elections for organizations.",
      icon: Zap,
      techStack: ["Solidity", "Web3.js", "React", "Ethereum"],
      impact: "100% transparent elections",
      category: "Blockchain",
      status: "Beta"
    },
    {
      title: "Real Estate Management SaaS",
      description: "Complete property management solution with tenant portals, maintenance tracking, rent collection, and financial reporting.",
      icon: Database,
      techStack: [".NET Core", "SQL Server", "React", "Azure"],
      impact: "Managing 500+ properties",
      category: "SaaS",
      status: "Live"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Advanced analytics platform providing real-time insights for online retailers with AI-powered sales predictions.",
      icon: Code,
      techStack: ["MERN Stack", "D3.js", "Machine Learning", "Redis"],
      impact: "25% increase in sales conversion",
      category: "Analytics",
      status: "Live"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and personal finance management.",
      icon: Smartphone,
      techStack: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      impact: "50k+ active users",
      category: "FinTech",
      status: "Live"
    }
  ];

  const categories = ["All", "AI & LLM", "SaaS", "Blockchain", "Healthcare", "FinTech", "Analytics"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <project.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        {project.featured && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            Featured
                          </Badge>
                        )}
                        <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.techStack.length - 3} more
                            </Badge>
                          )}
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
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default AllProjects;
