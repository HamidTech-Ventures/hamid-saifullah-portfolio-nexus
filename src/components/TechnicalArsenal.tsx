import React from 'react';
import { Layout, Server, Database, Brain, Cpu, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechnicalArsenal = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Langgraph / LangChain", "Prompt Engineering", "Llama Models", "TTS & STT Models", "Vector DBs (Pinecone)"]
    },
    {
      title: "Backend Engineering",
      icon: Server,
      skills: ["FastAPI", "Node.js", "Express.js", "ASP.NET Core", "Python"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQL Server"]
    },
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React.js", "Tailwind CSS", "Redux", "TypeScript"]
    },
    {
      title: "Cloud & DevOps",
      icon: Globe,
      skills: ["AWS", "Azure", "CI/CD", "Git"]
    },
    {
      title: "Core Concepts",
      icon: Cpu,
      skills: ["System Architecture", "SaaS Development", "RESTful APIs", "Microservices"]
    }
  ];

  return (
    <section id="arsenal" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies and frameworks I use to build scalable, high-performance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-muted/20 relative overflow-hidden"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shadow-sm inline-flex ring-1 ring-primary/20">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-background/50 hover:bg-secondary/50 border-border/60 transition-colors py-1.5 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalArsenal;
