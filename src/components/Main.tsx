import { Github, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '../utils/scrollView';

export const Main = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hello, I'm <span className="text-blue-400">Lam Pham</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Engineering solutions to non-existing problems. Turning simple ideas into complex code. Welcome.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/lpham2309" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/lam-p-09b64a8a/" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:lam.pham3110@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <button 
          onClick={() => scrollToSection('projects')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          See More
        </button>
      </div>
    </section>
  );
};