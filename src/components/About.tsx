
import React from 'react';
import { Brain, Code2, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "AI-First Mindset",
      description: "Leveraging cutting-edge AI technologies to solve real-world problems and create intelligent solutions."
    },
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Mastering both frontend and backend technologies to build complete, scalable applications."
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Constantly exploring new technologies and methodologies to stay ahead in the tech landscape."
    },
    {
      icon: Users,
      title: "Impact Focused",
      description: "Building solutions that make a meaningful difference in people's lives and business operations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Hamid Saifullah</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At 21, I've already embarked on a journey to reshape industries through technology. 
                From my base in Pakistan, I'm building AI solutions that solve real problems for 
                businesses worldwide.
              </p>
              
              <p>
                My passion lies at the intersection of artificial intelligence, software engineering, 
                and entrepreneurship. I believe that great technology should be accessible, practical, 
                and transformative.
              </p>
              
              <p>
                As the founder of an AI solutions company, I'm not just writing code – I'm crafting 
                the future of how businesses operate, communicate, and grow. Every project is an 
                opportunity to push boundaries and create something remarkable.
              </p>
            </div>

            {/* Key achievements */}
            <div className="mt-8 p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Key Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Founded AI solutions company at age 21</li>
                <li>• Developed enterprise-grade AI agents and chatbots</li>
                <li>• Built scalable SaaS platforms serving global clients</li>
                <li>• Expertise in blockchain and smart contract development</li>
                <li>• Pioneered voice-AI integration for business automation</li>
              </ul>
            </div>
          </div>

          {/* Right side - Values grid */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={value.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
