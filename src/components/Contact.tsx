
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import BookCallForm from './BookCallForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hamid@example.com",
      href: "mailto:hamid@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hamidsaifullah",
      href: "https://linkedin.com/in/hamidsaifullah"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hamidsaifullah",
      href: "https://github.com/hamidsaifullah"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? Let's discuss your project, 
            explore investment opportunities, or simply connect over shared ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact form */}
          <div className="animate-fade-in-up">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or how we can work together..."
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-bg hover:opacity-90 transition-opacity">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Contact info and CTA */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="space-y-8">
              {/* Contact information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              className="text-foreground hover:text-primary transition-colors"
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Schedule a meeting */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Schedule a Meeting</h3>
                  <p className="text-muted-foreground mb-6">
                    Prefer a direct conversation? Book a 30-minute call to discuss your project 
                    requirements and explore how we can work together.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={() => setIsBookCallOpen(true)}
                  >
                    Book a Call
                  </Button>
                </CardContent>
              </Card>

              {/* Response time */}
              <div className="p-6 rounded-lg bg-card border border-border">
                <h4 className="font-semibold text-primary mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  feel free to reach out directly via LinkedIn or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </section>
  );
};

export default Contact;
