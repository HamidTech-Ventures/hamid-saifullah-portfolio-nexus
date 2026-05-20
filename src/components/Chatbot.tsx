
import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot, User, Mic, MicOff, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Hamid's AI assistant. Ask me anything about his background, skills, projects, or if you'd like to schedule a meeting with him!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const toggleVoiceInput = () => setIsListening((v) => !v);
  const toggleVoiceOutput = () => setVoiceEnabled((v) => !v);

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
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 p-0 gradient-bg hover:opacity-90 transition-opacity shadow-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 z-50 w-80 h-96 shadow-xl border-primary/20 flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Bot className="h-5 w-5 mr-2 text-primary" />
                Chat with Hamid's AI
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleVoiceOutput}
                  className="h-6 w-6 p-0 hover:bg-muted"
                  title={voiceEnabled ? "Disable voice" : "Enable voice"}
                >
                  {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeChatbot}
                  className="h-6 w-6 p-0 hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
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
                      {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />}
                      {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="text-sm prose prose-sm dark:prose-invert max-w-none prose-p:my-2 prose-headings:mb-2 prose-headings:mt-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-pre:my-2 prose-table:my-2">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {message.text}
                        </ReactMarkdown>
                      </div>
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
                  disabled={isLoading || isListening}
                />
                <Button 
                  onClick={toggleVoiceInput} 
                  size="sm" 
                  className="px-3"
                  variant={isListening ? "default" : "outline"}
                  disabled={isLoading}
                >
                  {isListening ? <Mic className="h-4 w-4 animate-pulse" /> : <MicOff className="h-4 w-4" />}
                </Button>
                <Button onClick={handleSendMessage} size="sm" className="px-3" disabled={isLoading || isListening}>
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
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
