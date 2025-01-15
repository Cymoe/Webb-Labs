import React from 'react';
import { ArrowUpRight, Brain, Rocket, Zap, Users, BarChart, Mail, MapPin, Phone, Twitter, Linkedin, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Webb Labs</div>
          <div className="flex gap-8">
            {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative group"
              >
                <span className="text-gray-300 hover:text-white transition-colors">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-start pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black"></div>
        
        {/* Video Container */}
        <div className="w-full max-w-[1400px] mx-auto px-6 mt-8">
          <div className="aspect-video relative rounded-xl overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)] bg-black/50">
            <iframe
              src="https://www.loom.com/embed/de69fc649db247f7b3fee72d7e8149d9"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 text-center max-w-6xl relative mt-20">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent leading-tight pb-2">
              We design what's next for the world's leading brands
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              From AI to addictive apps, we design products for the future. We don't follow trends, we create them, and it drives billion-dollar businesses.
            </p>
            <button className="group bg-gradient-to-r from-emerald-400 to-emerald-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 mx-auto">
              REQUEST A BRAINSTORM
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Leaders at billion dollar brands</h2>
          <p className="text-xl text-center text-emerald-400 mb-16 font-light tracking-wide">Join our exclusive waitlist</p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative">
                  <p className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{client.name}</p>
                  <p className="text-gray-400 font-light tracking-wide">{client.description}</p>
                </div>
              </div>
            ))}
            
            <div className="group relative p-8 rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-br from-emerald-500/20 via-gray-500/20 to-emerald-500/20">
                <div className="absolute inset-0 bg-black rounded-lg"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative">
                <p className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-400/60 to-emerald-500/60 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all duration-500">
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
                title: 'AI Agents',
                description: 'Custom AI agent development for task automation, workflow optimization, and intelligent decision support systems.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'AI Implementation Evaluation',
                description: 'Assessment of existing AI systems, performance optimization, and test-driven implementation rewrites.'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                <div className="relative">
                  <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
          <div className="group p-8 rounded-2xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 group-hover:border-emerald-500/50 transition-all duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative">
              <div className="flex items-start gap-12">
                <div className="relative w-48 flex-shrink-0">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="/founder-mountain.jpg"
                      alt="Founder overlooking Matterhorn"
                      className="w-full h-full object-cover rounded-lg ring-1 ring-emerald-500/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-xl"></div>
                  </div>
                </div>
                <div className="space-y-6 flex-1">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Meet Our Founder</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Building software is easy. Creating products that drive real business value is an art.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      We blend technical mastery with business strategy to transform ideas into revenue. Every line of code is written with your bottom line in mind.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
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
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">Let's design a future that keeps you ahead</h2>
          <p className="text-xl text-emerald-400 mb-12 font-light tracking-wide">We work with one new client each month</p>
          <button className="group bg-gradient-to-r from-emerald-400 to-emerald-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 mx-auto">
            REQUEST A BRAINSTORM
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Webb Labs</h3>
              <p className="text-gray-400 mb-6">Transforming businesses through innovative software solutions.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Services', 'Case Studies', 'Careers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-3">
                {['AI Solutions', 'Web Development', 'Mobile Apps', 'Cloud Services', 'Consulting'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>hello@webblabs.dev</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Webb Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/15551234567" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-emerald-500 p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-110 z-50 group"
      >
        <div className="absolute -top-12 right-0 bg-white text-black text-sm py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </div>
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 text-white"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;