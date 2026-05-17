import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Settings, Hammer, ShieldCheck, Truck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background-deep">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden border-b border-zinc-border bg-background-panel/30">
        <div className="absolute inset-0 grid-bg-dots opacity-40 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-sm text-[10px] font-mono text-accent uppercase tracking-[0.3em] mb-8">
                <Zap className="w-3.5 h-3.5" /> High-Density Engineering
              </div>
              <h1 className="text-6xl sm:text-8xl font-sans font-bold leading-[0.85] tracking-tighter text-white mb-8 uppercase">
                Precision <br/>
                <span className="text-zinc-600 font-light lowercase">at the</span> <br/>
                <span className="italic font-serif text-accent">Forge</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed uppercase tracking-tight">
                Industrial-grade CNC solutions, structural fabrication, and 
                maintenance services for modern manufacturing labs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink 
                  to="/contact" 
                  className="px-8 py-4 bg-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-accent-bright transition-all"
                >
                  Request Quote
                </NavLink>
                <NavLink 
                  to="/store" 
                  className="px-8 py-4 border border-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all"
                >
                  Materials Shop
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technical Detail Decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-background-elevated/50 border-l border-zinc-border hidden md:block">
           <div className="h-full w-full flex flex-col p-12 justify-center gap-12 opacity-20 filter grayscale">
              <div className="border border-zinc-700 aspect-square flex items-center justify-center p-8">
                 <Settings className="w-full h-full text-white animate-spin-slow" />
              </div>
              <div className="space-y-4">
                 <div className="h-1 bg-zinc-800 w-full"></div>
                 <div className="h-1 bg-zinc-800 w-3/4"></div>
                 <div className="h-1 bg-accent w-1/2"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Stats/Badge bar */}
      <div className="bg-background-elevated py-4 border-b border-zinc-border">
        <div className="max-w-7xl mx-auto px-8">
           <div className="flex flex-wrap justify-between gap-8 py-4">
              {[
                { label: 'System Accuracy', val: '0.01mm' },
                { label: 'Active Projects', val: '24' },
                { label: 'Facility Uptime', val: '100%' },
                { label: 'Logistics', val: 'Global' },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-4">
                   <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{stat.label}:</span>
                   <span className="text-sm font-mono text-accent">{stat.val}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-32 bg-background-deep">
        <div className="max-w-7xl mx-auto px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4 font-bold">Industrial Capabilities</h2>
                <h3 className="text-4xl sm:text-5xl font-sans font-bold text-white uppercase tracking-tighter">Core Engineering <span className="font-serif italic font-normal text-zinc-500">Hub</span></h3>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-zinc-900 border border-zinc-900">
              {[
                { 
                  title: 'CNC Precision', 
                  desc: 'High-speed laser, plasma, and waterjet cutting for complex geometry.',
                  link: '/cnc'
                },
                { 
                  title: 'Structural Fabrication', 
                  desc: 'Certified welding and assembly of large-scale mechanical structures.',
                  link: '/fabrication'
                },
                { 
                  title: 'Maintenance', 
                  desc: 'Scheduled industrial maintenance and emergency machinery repair.',
                  link: '/maintenance'
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="p-12 bg-background-panel hover:bg-background-elevated transition-colors group"
                >
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-zinc-500 text-sm mb-12 leading-relaxed tracking-wide lowercase italic font-serif h-12">{service.desc}</p>
                  <NavLink to={service.link} className="flex items-center gap-3 text-[10px] font-bold text-accent uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    Explore Service <ArrowRight className="w-3 h-3" />
                  </NavLink>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-background-panel border-y border-zinc-border relative">
        <div className="max-w-7xl mx-auto px-8 text-center">
           <h2 className="text-5xl sm:text-7xl font-sans font-black text-white uppercase tracking-tighter mb-12">Next Gen <span className="text-accent italic font-serif">Production</span></h2>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NavLink to="/contact" className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all">
                Process Quote
              </NavLink>
              <NavLink to="/store" className="px-12 py-5 border border-zinc-700 text-zinc-300 font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all">
                Shop Materials
              </NavLink>
           </div>
        </div>
      </section>
    </div>
  );
}
