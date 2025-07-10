
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Mail, Building, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BookCallFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookCallForm: React.FC<BookCallFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would normally send the data to your email service
      // For now, we'll simulate the email sending
      console.log('Form Data to be sent to email:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Meeting Request Sent!",
        description: "Thank you for your interest. I'll get back to you within 24 hours to schedule our call.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center">
            <Calendar className="h-6 w-6 mr-3 text-primary" />
            Book a Strategy Call
          </DialogTitle>
          <p className="text-muted-foreground">
            Let's discuss your project and explore how we can work together to bring your vision to life.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center">
                <User className="h-4 w-4 mr-2 text-primary" />
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2 flex items-center">
              <Building className="h-4 w-4 mr-2 text-primary" />
              Company/Organization
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select project type</option>
                <option value="ai-chatbot">AI Chatbot Development</option>
                <option value="voice-agent">Voice AI Agent</option>
                <option value="saas-platform">SaaS Platform</option>
                <option value="web-application">Web Application</option>
                <option value="mobile-app">Mobile Application</option>
                <option value="blockchain">Blockchain Solution</option>
                <option value="consultation">AI/Tech Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-months-plus">6+ months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              Project Details *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your project, goals, and any specific requirements. The more details you provide, the better I can prepare for our call."
            />
          </div>

          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-primary mb-2">What to Expect:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 30-minute strategic discussion about your project</li>
              <li>• Technical feasibility assessment and recommendations</li>
              <li>• Timeline and budget estimation</li>
              <li>• Next steps and project roadmap</li>
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 gradient-bg hover:opacity-90 transition-opacity"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Meeting Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallForm;
