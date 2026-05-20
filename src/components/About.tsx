
import React from 'react';
import { Brain, Code2, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Agentic AI, Not Demos",
      description: "I build AI agents and RAG systems that actually run in production — with guardrails, evals, and clear ROI."
    },
    {
      icon: Code2,
      title: "End-to-End Ownership",
      description: "From discovery to deployment: architecture, backend, frontend, infra. One person, one accountable build."
    },
    {
      icon: Lightbulb,
      title: "Ship in Weeks",
      description: "Lean scoping, weekly demos, no agency overhead. Most MVPs go live in 3–6 weeks."
    },
    {
      icon: Users,
      title: "Business-Outcome First",
      description: "Every system is tied to a metric — revenue lift, hours saved, response time, conversion."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              I turn messy operations into <span className="gradient-text">working AI systems</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm Hamid Saifullah — a software engineer who specializes in Agentic AI, machine learning, and modern web. I work directly with founders, ops leaders, and product teams to replace manual workflows with software that thinks.
              </p>

              <p>
                My sweet spot: AI agents that handle real workflows (support, sales, ops), RAG chatbots trained on your data, ML pipelines that automate decisions, and the React / FastAPI / .NET systems around them.
              </p>

              <p>
                No fluff, no handoffs. You talk to the person who builds it.
              </p>
            </div>

            {/* Key achievements */}
            <div className="mt-8 p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">What I've shipped</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Production AI agents and RAG chatbots for businesses in Pakistan, KSA, and the US</li>
                <li>• Multi-agent workflows that automate support, sales ops, and document processing</li>
                <li>• Full-stack SaaS MVPs from idea to paying users</li>
                <li>• Voice AI (STT/TTS) and bilingual assistants for regulated industries</li>
                <li>• Custom ML pipelines and API integrations on FastAPI, Node, and .NET</li>
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
