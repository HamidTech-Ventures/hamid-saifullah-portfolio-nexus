
import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Hamid's AI assistant. Ask me anything about his background, skills, projects, or how you can work together!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const knowledgeBase = {
    skills: "Hamid specializes in AI & Generative AI (Agents, RAG, STT/TTS, LLMs), MERN Stack, .NET development, Blockchain & Smart Contracts, SaaS Platforms, and Scalable Web Systems.",
    experience: "Hamid is a 21-year-old Software Engineer from Pakistan with 2+ years of experience. He's a tech entrepreneur and AI innovator who builds real-world AI solutions.",
    projects: "Hamid has worked on 10+ projects including Wukala-GPT, Healthcare AI System, Voice Call Agent, and various SaaS platforms that transform industries.",
    company: "Hamid is the founder of a company that builds real-world AI solutions for businesses globally.",
    contact: "You can reach Hamid through the contact form on this website, LinkedIn, or email for business opportunities, partnerships, or project collaborations.",
    services: "Hamid offers AI solution development, web application development, blockchain development, SaaS platform creation, and technical consulting services.",
    location: "Hamid is based in Pakistan but works with clients globally.",
    age: "Hamid is 21 years old.",
    background: "Hamid started his journey as a software engineer and evolved into a tech entrepreneur, focusing on AI innovation and building solutions that have real-world impact."
  };

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('stack')) {
      return knowledgeBase.skills;
    } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('career')) {
      return knowledgeBase.experience;
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('build')) {
      return knowledgeBase.projects;
    } else if (lowerQuestion.includes('company') || lowerQuestion.includes('startup') || lowerQuestion.includes('business')) {
      return knowledgeBase.company;
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('hire')) {
      return knowledgeBase.contact;
    } else if (lowerQuestion.includes('service') || lowerQuestion.includes('offer') || lowerQuestion.includes('help')) {
      return knowledgeBase.services;
    } else if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('based')) {
      return knowledgeBase.location;
    } else if (lowerQuestion.includes('age') || lowerQuestion.includes('old')) {
      return knowledgeBase.age;
    } else if (lowerQuestion.includes('background') || lowerQuestion.includes('story') || lowerQuestion.includes('about')) {
      return knowledgeBase.background;
    } else {
      return "I can help you learn about Hamid's skills, experience, projects, company, or how to contact him. What would you like to know specifically?";
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 p-0 gradient-bg hover:opacity-90 transition-opacity shadow-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 z-50 w-80 h-96 shadow-xl border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Bot className="h-5 w-5 mr-2 text-primary" />
              Ask about Hamid
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-primary" />}
                      {message.sender === 'user' && <User className="h-4 w-4 mt-0.5" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Hamid..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm" className="px-3">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
