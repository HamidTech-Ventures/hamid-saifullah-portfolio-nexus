
import React from 'react';
import { Rocket, Target, TrendingUp, Users, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Ventures = () => {
  const achievements = [
    {
      icon: Users,
      number: "10+",
      label: "Clients Served"
    },
    {
      icon: Globe,
      number: "3–6w",
      label: "MVP Timeline"
    },
    {
      icon: TrendingUp,
      number: "24h",
      label: "Reply Time"
    },
    {
      icon: Zap,
      number: "100%",
      label: "Code You Own"
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
            How I <span className="gradient-text">Work With Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engagements built around outcomes, not hours. Pick the model that fits — fixed-scope MVP, retainer, or fractional AI engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main venture */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Rocket className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium text-primary">Engagement Models</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Built to ship — not to bill hours
              </h3>

              <p className="text-lg text-muted-foreground mb-6">
                I keep teams small (usually just me, sometimes one senior collaborator) so you get an experienced builder on the keyboard every day. That's how MVPs go live in weeks instead of quarters.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center mb-3">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold text-primary">Fixed-Scope MVP (3–6 weeks)</h4>
                </div>
                <p className="text-muted-foreground">
                  Best for founders. We define one outcome, you get a live AI system — agent, RAG chatbot, automation, or SaaS — with code you own.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center mb-3">
                  <Rocket className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold text-primary">Monthly Retainer / Fractional AI Engineer</h4>
                </div>
                <p className="text-muted-foreground">
                  For teams that need ongoing AI/ML work — evals, new agents, integrations, infra. Predictable monthly cost, no recruiting cycle.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="gradient-bg hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
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
                <h4 className="text-xl font-semibold mb-4 text-primary">What I Build</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Agentic AI workflows (LangGraph, multi-agent)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    RAG chatbots trained on your data
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Voice AI agents (STT / TTS, real-time)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    ML automation & workflow bots
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Full-stack SaaS MVPs (React + FastAPI/.NET)
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
