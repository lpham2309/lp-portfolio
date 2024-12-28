import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to new opportunities.
          Feel free to reach out!
        </p>
        <div className="flex justify-center gap-8">
          <a href="mailto:lam.pham3110@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
            <Mail size={24} className="mr-2" />
            Email
          </a>
          <a href="https://www.linkedin.com/in/lam-p-09b64a8a/" className="flex items-center hover:text-blue-400 transition-colors">
            <Linkedin size={24} className="mr-2" />
            LinkedIn
          </a>
          <a href="https://github.com/lpham2309" className="flex items-center hover:text-blue-400 transition-colors">
            <Github size={24} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};