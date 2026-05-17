import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-background-deep min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-zinc-border bg-background-panel relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              <MessageSquare className="w-4 h-4" /> Central Communications Hub
            </div>
            <h1 className="text-5xl sm:text-7xl font-sans font-black text-white uppercase tracking-tighter leading-none mb-8">Forge <br /> <span className="text-accent italic font-serif">Enquiries</span></h1>
            <p className="text-zinc-500 text-lg leading-relaxed font-serif italic lowercase">
              whether you need a custom cnc quote, structural fabrication, or industrial machinery maintenance, 
              our engineering team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-10">A1 // Grid Coordinates</h3>
              <div className="space-y-12">
                 {[
                   { icon: MapPin, title: 'Headquarters', detail: '123 Industrial Estate, Lagos, Nigeria' },
                   { icon: MapPin, title: 'Branch Office', detail: 'ROAD 456 Titilayo Matogbun, Ogun State, Nigeria' },
                   { icon: Phone, title: 'Phone Support', detail: '+234 70 6175 98 FORGE 02' },
                   { icon: Mail, title: 'Digital Enquiries', detail: 'enquiries@victusforge.com' },
                   { icon: Clock, title: 'Operational Hours', detail: 'Mon - Sat: 08:00 - 18:00' },
                 ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-accent ring-accent transition-all">
                          <item.icon className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                       </div>
                       <div>
                          <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">{item.title}</div>
                          <div className="text-white font-bold uppercase tracking-tight text-sm">{item.detail}</div>
                       </div>
                    </div>
                 ))}
              </div>
            </div>

            <div className="p-10 bg-background-panel border border-zinc-800 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800">SEC_PROTO_NDA</div>
               <ShieldCheck className="w-8 h-8 text-accent mb-6" />
               <h4 className="text-xl font-bold text-white uppercase tracking-tighter mb-4 italic font-serif">NDA Integrated</h4>
               <p className="text-xs text-zinc-500 leading-relaxed lowercase italic font-serif">
                  all technical drawings and project details submitted through our portal are automatically protected by our standard non-disclosure agreement.
               </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-background-panel border border-zinc-800 p-12 sm:p-20 relative"
            >
              <div className="absolute top-0 left-0 w-px h-12 bg-accent"></div>
              <h3 className="text-4xl font-sans font-black uppercase tracking-tighter mb-12 text-white text-center sm:text-left">Request a Formal <span className="text-accent italic font-serif">Quote</span></h3>
              <form className="space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] ml-1">Identity_Full</label>
                       <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-5 text-sm font-bold uppercase tracking-widest text-white focus:border-accent focus:outline-none transition-colors" placeholder="LOAD_NAME..." />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] ml-1">Enterprise_Org</label>
                       <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-5 text-sm font-bold uppercase tracking-widest text-white focus:border-accent focus:outline-none transition-colors" placeholder="LOAD_COMPANY..." />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] ml-1">Digital_Address</label>
                       <input type="email" className="w-full bg-zinc-900 border border-zinc-800 p-5 text-sm font-bold uppercase tracking-widest text-white focus:border-accent focus:outline-none transition-colors" placeholder="LOAD_EMAIL..." />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] ml-1">Service_Module</label>
                       <select className="w-full bg-zinc-900 border border-zinc-800 p-5 text-xs font-bold uppercase tracking-widest text-white focus:border-accent focus:outline-none appearance-none cursor-pointer">
                          <option>CNC Laser Cutting</option>
                          <option>Custom Fabrication</option>
                          <option>Structural Welding</option>
                          <option>Maintenance Request</option>
                          <option>Material Bulk Inquiry</option>
                       </select>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] ml-1">Project_Geometries</label>
                    <textarea rows={6} className="w-full bg-zinc-900 border border-zinc-800 p-5 text-sm font-bold uppercase tracking-widest text-white focus:border-accent focus:outline-none transition-colors" placeholder="Describe your project requirements, material specs, and deadline..."></textarea>
                 </div>

                 <button className="w-full py-6 bg-accent text-black font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-accent-bright transition-all shadow-2xl">
                    Transmit Engineering Request <Send className="w-4 h-4" />
                 </button>
                 
                 <div className="flex items-center justify-center gap-6 pt-6 font-mono text-[8px] text-zinc-800 uppercase tracking-[0.3em]">
                    <span>Secure_Trafic</span>
                    <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                    <span>AES_256BIT_SYNCED</span>
                 </div>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
