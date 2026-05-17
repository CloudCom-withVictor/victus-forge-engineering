import { motion } from 'motion/react';
import { Hammer, ShieldCheck, Zap, ArrowRight, Construction, Drill } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Fabrication() {
  const capabilities = [
    { title: 'Structural Welding', desc: 'heavy-duty welding for building frames, industrial platforms, and safety structures.', icon: Construction },
    { title: 'Custom Sheet Metal', desc: 'bending, punching, and assembly of custom enclosures, cabinets, and components.', icon: Drill },
    { title: 'Pipe Fabrication', desc: 'precision pipe cutting and welding for industrial oil/gas and hydraulic systems.', icon: Zap },
    { title: 'Surface Treatment', desc: 'powder coating, galvanizing, and industrial painting for long-lasting protection.', icon: ShieldCheck },
  ];

  return (
    <div className="bg-background-deep min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-zinc-border bg-background-panel relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              <Hammer className="w-4 h-4" /> Heavy-Duty Forge Operations
            </div>
            <h1 className="text-5xl sm:text-7xl font-sans font-black text-white uppercase tracking-tighter leading-none mb-8">Fabrication & <br /> <span className="text-accent italic font-serif text-6xl block sm:inline">Welding</span></h1>
            <p className="text-zinc-500 text-lg leading-relaxed font-serif italic lowercase">
               victus forge engineering combines traditional craftsmanship with high-density technology 
               to deliver structural and decorative metal solutions that last generations.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 max-w-7xl mx-auto px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i} 
                className="p-12 bg-background-panel group hover:bg-background-elevated transition-colors flex gap-10 items-start"
              >
                 <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-accent ring-accent transition-all">
                    <cap.icon className="w-8 h-8 text-accent group-hover:text-black transition-colors" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-accent transition-colors">{cap.title}</h3>
                    <p className="text-zinc-500 text-sm mb-8 leading-relaxed lowercase italic font-serif">
                       {cap.desc}
                    </p>
                    <NavLink to="/contact" className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all">
                       Enquire now <ArrowRight className="w-4 h-4" />
                    </NavLink>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-accent relative overflow-hidden">
         <div className="absolute inset-0 grid-bg-dots opacity-10"></div>
         <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
            <h2 className="text-5xl sm:text-7xl font-sans font-black uppercase tracking-tighter mb-8 text-black leading-none italic font-serif">Heavy Industry <br/> Certified Standards</h2>
            <p className="text-lg font-bold text-black/60 mb-12 max-w-2xl mx-auto lowercase italic font-serif">our welders are AWS D1.1 and ISO 9606-1 certified, ensuring every bead meets international safety protocols.</p>
            <NavLink to="/contact" className="inline-block px-12 py-5 bg-black text-accent font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-transform shadow-2xl">
               Discuss Your Project
            </NavLink>
         </div>
      </section>
    </div>
  );
}
