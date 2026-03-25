
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
      title: "End-to-End Solutions Delivery",
      description: "Architecting and delivering complete, scalable platforms that drive business growth and operational efficiency."
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
    <section id="about" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Hamid Saifullah</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I am a 21-year-old software engineer and entrepreneur based in Pakistan, driven by a passion for building transformative AI and SaaS solutions.
              </p>
              
              <p>
                Currently in my final year of my Computer Science degree, my focus lies at the intersection of AI, robust software architecture, and practical business applications. As an experienced developer, I don't just write code—I architect solutions that solve real-world problems for global businesses.
              </p>
              
              <p>
                From developing intelligent platforms to scaling web applications, I treat every project as an opportunity to push technical boundaries and build accessible, high-impact technology.
              </p>
            </div>

            {/* Key achievements */}
            <div className="mt-8 p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Key Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Developed full stack software for businesses in Pakistan and KSA</li>
                <li>• Developing enterprise-grade AI agents and chatbots</li>
                <li>• Built scalable SaaS platforms serving global clients</li>
                <li>• Expertise in Retrieval Augumented Generation (RAG) systems</li>
                <li>• Multi-agentic integration for business automation</li>
              </ul>
            </div>
          </div>

          {/* Right side - Values grid */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={value.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 sm:p-6">
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
