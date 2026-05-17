import React from 'react';
import { motion } from 'motion/react';
import { Settings, Upload, CheckCircle2, ChevronRight, Calculator, FileText } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const templates = [
  { id: 't1', name: 'Precision Bracket A', material: 'Steel 3mm', path: 'M 10 10 L 90 10 L 90 40 L 60 40 L 60 90 L 10 90 Z' },
  { id: 't2', name: 'Industrial Flange 120', material: 'Aluminum 5mm', path: 'M 50 10 A 40 40 0 1 1 49.9 10 Z' },
  { id: 't3', name: 'Gear Housing Base', material: 'Stainless 2mm', path: 'M 20 20 L 80 20 L 80 80 L 20 80 Z M 40 40 L 60 40 L 60 60 L 40 60 Z' },
  { id: 't4', name: 'Mounting Plate V2', material: 'Mild Steel 6mm', path: 'M 10 30 L 30 10 L 70 10 L 90 30 L 90 70 L 70 90 L 30 90 L 10 70 Z' },
];

export default function CNC() {
  const [step, setStep] = React.useState(1);
  const [selectedTemplate, setSelectedTemplate] = React.useState<string | null>(null);
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStep(3);
    }
  };

  return (
    <div className="bg-background-deep min-h-screen">
      {/* Title section */}
      <section className="py-24 border-b border-zinc-border bg-background-panel relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
             <div className="flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                <Settings className="w-4 h-4" /> Automated Production Lab
             </div>
             <h1 className="text-5xl sm:text-7xl font-sans font-black text-white uppercase tracking-tighter leading-none mb-8">Precision <br /> <span className="text-accent italic font-serif text-6xl block sm:inline">Configurator</span></h1>
             <p className="text-zinc-500 max-w-xl font-serif italic text-lg leading-relaxed lowercase">
               select standard gear profiles or upload custom vector data for high-density laser processing.
             </p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Progress */}
        <div className="flex justify-between items-center mb-24 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-800 -z-10"></div>
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center gap-4 bg-background-deep px-4">
               <div className={cn(
                 "w-12 h-12 rounded-sm flex items-center justify-center font-mono font-bold text-sm border transition-all duration-500",
                 step >= s ? "border-accent text-accent shadow-[0_0_15px_rgba(234,88,12,0.2)] bg-background-elevated" : "border-zinc-800 text-zinc-600 bg-background-deep"
               )}>
                 {step > s ? <CheckCircle2 className="w-5 h-5" /> : `0${s}`}
               </div>
               <span className={cn(
                 "text-[10px] uppercase tracking-[0.2em] font-bold",
                 step >= s ? "text-accent" : "text-zinc-600"
               )}>
                 {['Design Select', 'Configuration', 'Validation', 'Quote'][s-1]}
               </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[500px]">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
            >
              <div className="p-12 bg-background-panel border border-zinc-800 flex flex-col justify-between">
                 <div>
                   <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter mb-8 text-white">System <span className="text-accent italic font-serif">Templates</span></h2>
                   <div className="grid grid-cols-2 gap-4">
                      {templates.map(t => (
                        <button
                          key={t.id}
                          onClick={() => { setSelectedTemplate(t.id); setStep(2); }}
                          className="p-6 bg-zinc-900 border border-zinc-800 hover:border-accent transition-all text-left flex flex-col gap-6 group"
                        >
                           <div className="w-full aspect-square bg-background-deep flex items-center justify-center rounded-sm overflow-hidden border border-zinc-800">
                              <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-zinc-700 group-hover:text-accent/40 transition-colors">
                                 <path d={t.path} fill="none" stroke="currentColor" strokeWidth="2" />
                              </svg>
                           </div>
                           <div>
                             <div className="text-[10px] font-bold uppercase tracking-widest text-white leading-none mb-1">{t.name}</div>
                             <div className="text-[9px] font-mono text-zinc-600 lowercase">{t.material}</div>
                           </div>
                        </button>
                      ))}
                   </div>
                 </div>
              </div>

              <div className="p-12 border border-dashed border-zinc-800 flex flex-col items-center justify-center text-center group hover:border-accent transition-colors cursor-pointer relative bg-background-panel/30">
                 <input 
                   type="file" 
                   className="absolute inset-0 opacity-0 cursor-pointer"
                   onChange={handleFileUpload}
                   accept=".dxf,.dwg,.svg"
                 />
                 <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center mb-8 group-hover:bg-accent ring-accent transition-all">
                    <Upload className="w-10 h-10 text-accent group-hover:text-black transition-all" />
                 </div>
                 <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter mb-6 text-white">Vector <span className="text-zinc-600 italic font-serif">Upload</span></h2>
                 <p className="text-zinc-500 text-[11px] mb-8 max-w-xs mx-auto uppercase tracking-widest font-bold leading-relaxed">
                    inject external vector specifications. .DXF / .DWG / .SVG supported.
                 </p>
                 <div className="px-8 py-3 border border-zinc-700 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] group-hover:text-white transition-colors bg-black/20">
                   Load Local File
                 </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto bg-background-panel border border-zinc-800 p-12"
            >
               <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter mb-10 flex items-center gap-6 text-white">
                  <Calculator className="w-8 h-8 text-accent" /> Configure Material Specs
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <div className="space-y-8">
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] font-bold mb-4">Material Substrate</label>
                      <select className="w-full bg-zinc-900 border border-zinc-800 p-5 text-xs font-bold uppercase tracking-widest text-white focus:border-accent focus:outline-none appearance-none cursor-pointer hover:bg-zinc-800 transition-colors">
                        <option>Mild Steel (S235JR)</option>
                        <option>Stainless Steel (304L)</option>
                        <option>Aluminum (T6-6061)</option>
                        <option>Brushed Brass</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] font-bold mb-4">Nominal Thickness (mm)</label>
                      <div className="grid grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
                         {[1.5, 2, 3, 5, 8, 10, 12, 15].map(v => (
                           <button key={v} className="py-4 bg-background-panel text-[10px] font-mono text-zinc-400 hover:bg-accent hover:text-black transition-all">{v}</button>
                         ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] font-bold mb-4">Production Volume</label>
                      <input type="number" defaultValue={1} className="w-full bg-zinc-900 border border-zinc-800 p-5 text-xs font-bold uppercase tracking-widest text-white focus:border-accent focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] font-bold mb-4">Industrial Surface Treatment</label>
                      <div className="space-y-3">
                         {['Deburring', 'Powder Coating', 'Galvanizing', 'Sand Blasting'].map(f => (
                           <label key={f} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-zinc-500 cursor-pointer hover:text-white transition-colors group">
                             <input type="checkbox" className="w-4 h-4 accent-accent bg-zinc-900 border-zinc-800 rounded-none" />
                             {f}
                           </label>
                         ))}
                      </div>
                    </div>
                  </div>
               </div>
               <div className="flex justify-between items-center pt-10 border-t border-zinc-800">
                  <button onClick={() => setStep(1)} className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest hover:text-white transition-colors">Abort Config</button>
                  <button onClick={() => setStep(3)} className="px-12 py-5 bg-accent text-black font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:bg-accent-bright transition-colors">
                    Validate Parameters <ChevronRight className="w-4 h-4" />
                  </button>
               </div>
            </motion.div>
          )}

          {(step === 3 || step === 4) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
               <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-accent/20 shadow-[0_0_50px_rgba(234,88,12,0.1)]">
                  <FileText className="w-12 h-12 text-accent" />
               </div>
               <h2 className="text-4xl sm:text-5xl font-sans font-black uppercase tracking-tighter mb-6 text-white text-center">Batch <span className="text-accent italic font-serif">Verified</span></h2>
               <p className="text-zinc-500 mb-12 font-serif italic text-lg leading-relaxed lowercase text-center">
                 technical specifications generated. awaiting engineering synchronization.
               </p>
               <div className="p-10 bg-background-panel border border-zinc-800 mb-12 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800 uppercase tracking-widest">VF_STAMP_PROD</div>
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-zinc-800">
                     <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Job Reference</span>
                     <span className="font-mono text-accent text-xs">VF-CNC-2024-8891</span>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-baseline"><span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Base Material</span> <span className="text-sm font-bold text-white uppercase italic font-serif">Mild Steel (5mm)</span></div>
                     <div className="flex justify-between items-baseline"><span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Technique</span> <span className="text-sm font-bold text-white uppercase italic font-serif">Fiber Laser Cutting</span></div>
                     <div className="flex justify-between items-baseline"><span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Lead Time</span> <span className="text-sm font-mono text-green-500 uppercase">3-5 Units (Business Days)</span></div>
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setStep(1)} className="px-10 py-5 border border-zinc-800 text-zinc-500 font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors">Start New Job</button>
                  <NavLink to="/tracking" className="px-10 py-5 bg-accent text-black font-black uppercase tracking-[0.2em] text-[10px]">Track Production Lifecycle</NavLink>
               </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info section */}
      <section className="py-32 bg-background-panel border-t border-zinc-border">
         <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-accent">A1 // Accuracy Guarantee</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed lowercase italic font-serif">
                    fiber laser systems maintain tolerances of +/- 0.01mm. digital visual inspection mandatory for all batch outputs.
                  </p>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-accent">A2 // Substrate Inventory</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed lowercase italic font-serif">
                    vast inventory of industrial materials available for immediate processing. specialized alloys sourced within 24 standard cycles.
                  </p>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-accent">A3 // Rapid Prototyping</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed lowercase italic font-serif">
                    low-latency fabrication queue available for priority R&D projects. sub-24h turnaround for simple vector geometries.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
