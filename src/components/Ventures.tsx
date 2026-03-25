
import React from 'react';
import { Rocket, Target, TrendingUp, Users, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Ventures = () => {
  const achievements = [
    {
      icon: Users,
      number: "5+",
      label: "Enterprise Clients"
    },
    {
      icon: Globe,
      number: "5",
      label: "Personal Products"
    },
    {
      icon: TrendingUp,
      number: "200%",
      label: "YoY Growth"
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime"
    }
  ];

  const handleCompanyLink = () => {
    // Replace with your actual company website
    window.open('https://your-company-website.com', '_blank');
  };

  return (
    <section id="ventures" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Ventures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building companies that harness the power of AI to solve real-world problems 
            and create lasting value for businesses globally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main venture */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Rocket className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium text-primary">Current Venture</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Founder at HamidTech Ventures
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                Founded with the vision to democratize AI technology, our company specializes in 
                creating intelligent solutions that transform how businesses operate, communicate, 
                and serve their customers.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center mb-3">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold text-primary">Mission</h4>
                </div>
                <p className="text-muted-foreground">
                  To bridge the gap between cutting-edge AI research and practical business applications, 
                  making advanced technology accessible to companies of all sizes.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center mb-3">
                  <Rocket className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold text-primary">Vision</h4>
                </div>
                <p className="text-muted-foreground">
                  To become the leading provider of AI-powered business solutions globally, 
                  empowering organizations to achieve unprecedented efficiency and innovation.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                className="gradient-bg hover:opacity-90 transition-opacity"
                onClick={handleCompanyLink}
              >
                Learn More About Our Company
              </Button>
            </div>
          </div>

          {/* Right side - Stats and services */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement) => (
                <Card key={achievement.label} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-primary mb-1">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-4 text-primary">Core Services</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    AI Chatbot Development & Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Voice AI Agents & Speech Recognition
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Custom LLM Solutions & RAG Systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Business Process Automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    SaaS Platform Development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
