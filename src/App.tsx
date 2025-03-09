import React, { useState } from 'react';
import { ArrowUpRight, Brain, Rocket, Zap, Users, BarChart, Mail, Linkedin, Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-[60] bg-black border-b border-amber-500/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Webb Labs</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative group"
              >
                <span className="text-gray-300 hover:text-white transition-colors">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors relative"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-[73px] inset-x-0 bottom-0 bg-black z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="space-y-12">
              {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-3xl text-gray-300 hover:text-indigo-400 transition-colors text-center"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-start pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-black to-black"></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-6 text-center max-w-6xl relative mt-16">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-400 bg-clip-text text-transparent leading-tight pb-2">
             <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-400 bg-clip-text">Generative AI</span> Solutions for Scalable Business Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              AI is no longer a future concept—it's reshaping how businesses operate today. Building Agentic AI systems and Generative AI solutions that drive efficiency, automation, and scale for modern businesses.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-16 mt-16">
          <div className="aspect-video relative rounded-xl overflow-hidden border border-indigo-500/20 shadow-[0_0_50px_rgba(79,70,229,0.1),_0_0_100px_rgba(251,191,36,0.05)] bg-black/50">
            <iframe
              src="https://www.loom.com/embed/de69fc649db247f7b3fee72d7e8149d9"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="mt-8 md:mt-12">
            <a 
              href="#contact"
              className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.3),_0_0_40px_rgba(79,70,229,0.15)] flex items-center gap-2 mx-auto w-fit overflow-hidden isolate"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 ring-2 ring-indigo-500/20 rounded-full group-hover:ring-indigo-400/30 transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0"></div>
              <span className="relative">REQUEST A BRAINSTORM</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative text-blue-100" />
            </a>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Trusted by Industry Leaders</h2>
          <p className="text-xl text-center text-indigo-400 mb-16 font-light tracking-wide">Limited availability for high-impact projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'LEGO', description: 'Global toy manufacturing leader' },
              { name: 'Therma-Tru Doors', description: 'Premium door systems manufacturer' },
              { name: 'BRP', description: 'Powersports vehicle manufacturer' },
              { name: 'Uncharted Society', description: 'Adventure experiences platform' },
              { name: 'Texada Software', description: 'Equipment management solutions' }
            ].map((client, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 group-hover:border-amber-500/20 transition-colors duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative">
                  <p className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-gray-200 group-hover:to-white transition-all duration-500">{client.name}</p>
                  <p className="text-gray-400 font-light tracking-wide">{client.description}</p>
                </div>
              </div>
            ))}
            
            <div className="group relative p-8 rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-br from-indigo-500/20 via-gray-500/20 to-indigo-500/20">
                <div className="absolute inset-0 bg-black rounded-lg"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative">
                <p className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-gray-200 group-hover:to-white transition-all duration-500">
                  Your Brand
                </p>
                <p className="text-gray-600 font-light tracking-wide group-hover:text-gray-400 transition-colors duration-500">
                  The next success story we build together
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Custom Built AI Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Document Processing & Structuring',
                description: 'Convert unstructured documents to structured data through microservices or native application integration.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'RAG Chatbot Development',
                description: 'Platform support for Web, iOS, and Android with specialized repository data integration.'
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: 'Data Mapping & Integration',
                description: 'Expert web scraping, data pipeline development, and custom data structure mapping solutions.'
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'AI Agents & Workflows',
                description: 'Custom AI agent development for task automation, workflow optimization, and intelligent decision support systems.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'AI Implementation Evaluation',
                description: 'Assessment of existing AI systems, performance optimization, and test-driven implementation rewrites.'
              },
              
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Custom Generative AI Apps',
                description: 'AI-powered solutions tailored to your business needs'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'LLM Integrations',
                description: 'Implementing cutting-edge AI to enhance productivity'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 group-hover:border-amber-500/20 transition-colors duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative">
                  <div className="text-indigo-400 mb-6 group-hover:scale-110 group-hover:text-indigo-300 transition-all duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - About */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="container mx-auto px-6 relative">
          <div className="group p-4 md:p-8 rounded-2xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 group-hover:border-amber-500/20 transition-all duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="relative w-32 md:w-48 flex-shrink-0">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="/founder-mountain.jpg"
                      alt="Founder overlooking Matterhorn"
                      className="w-full h-full object-cover rounded-lg ring-1 ring-indigo-500/20 ring-offset-2 ring-offset-amber-500/5"
                    />
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-xl"></div>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6 flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Meet Our Founder</h2>
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      Building software is easy. Creating products that drive real business value is an art.
                    </p>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      We blend technical mastery with business strategy to transform ideas into revenue. Every line of code is written with your bottom line in mind.
                    </p>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      Because great software isn't just about what's possible—it's about what's profitable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-indigo-400 bg-clip-text text-transparent">Let's design a future that keeps you ahead</h2>
          <a 
            href="mailto:myles@webblabs.io"
            className="text-xl text-indigo-400 hover:text-indigo-300 transition-colors font-light tracking-wide inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5 text-indigo-400" />
            myles@webblabs.io
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/5 bg-gradient-to-b from-black via-gray-900/20 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-amber-900/5 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-6 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Info + Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Webb Labs</h3>
                <p className="text-gray-400">Transforming businesses through innovative software solutions.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-4">Get in Touch</h4>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <a href="mailto:myles@webblabs.io" className="hover:text-indigo-400 transition-colors">myles@webblabs.io</a>
                </div>
                <div className="mt-4">
                  <a href="https://www.linkedin.com/in/myles-kameron/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    <span>Follow on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex md:justify-end">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-4">Company</h4>
                <ul className="space-y-3 text-left md:text-right">
                  {['About Us', 'Services', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(' us', '')}`} className="text-gray-400 hover:text-indigo-400 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Webb Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;