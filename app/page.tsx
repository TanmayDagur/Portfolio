
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Project } from '@/components/project';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import ResumePage from '@/components/resume';

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      
      < Header />

      <main className="flex-1">
        
        <Hero />

        
        <Project />

        
        <Skills />

        <ResumePage />

        <Contact />
        
      </main>

      <Footer />
      
    </div>
  );
}
