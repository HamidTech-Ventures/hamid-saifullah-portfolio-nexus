
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechnicalArsenal from '@/components/TechnicalArsenal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechnicalArsenal />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
