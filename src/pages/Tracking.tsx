import React from 'react';
import { motion } from 'motion/react';
import { Truck, Package, Clock, ShieldCheck, MapPin, Search, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Tracking() {
  const [orderId, setOrderId] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setIsLoaded(true);
  };

  const statusSteps = [
    { label: 'Order Confirmed', icon: Package, date: 'May 10, 14:20', completed: true },
    { label: 'In Production', icon: Clock, date: 'May 11, 09:12', completed: true },
    { label: 'Quality Inspection', icon: ShieldCheck, date: 'May 12, 11:45', completed: true },
    { label: 'Out for Delivery', icon: Truck, date: 'In Progress', completed: false },
    { label: 'Delivered', icon: MapPin, date: '--', completed: false },
  ];

  return (
    <div className="bg-background-deep min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-zinc-border bg-background-panel relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              <Truck className="w-4 h-4" /> Real-Time Logistics Tracking
            </div>
            <h1 className="text-5xl sm:text-7xl font-sans font-black text-white uppercase tracking-tighter leading-none mb-8">Production <br /> <span className="text-accent italic font-serif">Lifecycle</span></h1>
            <p className="text-zinc-500 text-lg leading-relaxed font-serif italic lowercase">
               monitor your cnc jobs, fabrication progress, and material shipments in real-time. 
               enter your unique forge tracking id below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-8">
        {!isLoaded ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-xl mx-auto text-center"
          >
             <form onSubmit={handleSearch} className="relative mb-12">
                <input 
                  type="text" 
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="ID // VF-2024-8891"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-none py-6 px-10 text-xl font-mono text-accent focus:outline-none focus:border-accent transition-all uppercase placeholder:text-zinc-800"
                />
                <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-accent text-black hover:bg-accent-bright transition-colors">
                   <Search className="w-5 h-5" />
                </button>
             </form>
             <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] font-serif italic">Forge Tracking IDs are provided in your order confirmation email.</p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-16"
          >
             {/* Left Column: Summary */}
             <div className="lg:col-span-1 space-y-12">
                <div className="bg-background-panel border border-zinc-800 p-10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800 uppercase tracking-widest">LIVE_STATUS_ACTIVE</div>
                   <div className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.2em] mb-4">Current_State</div>
                   <div className="text-4xl font-sans font-black text-accent uppercase tracking-tighter mb-8 italic font-serif">In_Transit</div>
                   
                   <div className="space-y-6 pt-10 border-t border-zinc-800">
                      <div className="flex justify-between items-baseline">
                         <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Tracking_ID</span>
                         <span className="font-mono text-white text-xs">{orderId}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                         <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Asset_Type</span>
                         <span className="text-sm font-bold text-white uppercase italic font-serif">CNC LASER CUT</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                         <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Carrier</span>
                         <span className="text-sm font-bold text-white uppercase italic font-serif">VICTUS_LOGISTICS</span>
                      </div>
                   </div>
                </div>

                <div className="p-10 bg-accent text-black relative group overflow-hidden">
                   <div className="absolute inset-0 grid-bg-dots opacity-10 group-hover:scale-110 transition-transform"></div>
                   <div className="relative z-10">
                      <h4 className="text-2xl font-sans font-black uppercase tracking-tighter mb-4 italic font-serif leading-none">Engineering <br /> Hotline</h4>
                      <p className="text-sm font-bold text-black/60 mb-8 lowercase italic font-serif">need to update your delivery address or engineering specs mid-lifecycle?</p>
                      <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:gap-6 transition-all">
                         Sync With Engineer <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </div>

             {/* Right Column: Timeline */}
             <div className="lg:col-span-2">
                <div className="bg-background-panel border border-zinc-800 p-12">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-16">B1 // Production Timeline</h3>
                   
                   <div className="space-y-0">
                      {statusSteps.map((step, i) => (
                        <div key={i} className="flex gap-10 group">
                           <div className="flex flex-col items-center">
                              <div className={cn(
                                "w-14 h-14 rounded-sm border transition-all duration-500 flex items-center justify-center",
                                step.completed ? "bg-accent border-accent text-black shadow-[0_0_20px_rgba(234,88,12,0.1)]" : "bg-zinc-900 border-zinc-800 text-zinc-800"
                              )}>
                                 <step.icon className={cn("w-6 h-6", step.completed ? "" : "opacity-30")} />
                              </div>
                              {i < statusSteps.length - 1 && (
                                <div className={cn(
                                  "w-[1px] h-20 transition-colors duration-1000",
                                  step.completed ? "bg-accent" : "bg-zinc-800"
                                )}></div>
                              )}
                           </div>
                           
                           <div className="pt-3 pb-20">
                              <h4 className={cn(
                                "text-2xl font-sans font-black uppercase tracking-tighter transition-colors leading-none",
                                step.completed ? "text-white" : "text-zinc-800"
                              )}>{step.label}</h4>
                              <p className={cn(
                                "text-[10px] font-bold uppercase tracking-[0.2em] mt-3",
                                step.completed ? "text-accent" : "text-zinc-800"
                              )}>{step.date}</p>
                              {i === 3 && step.completed === false && (
                                <p className="mt-8 p-4 border border-accent/20 bg-accent/5 text-[11px] text-accent/60 uppercase tracking-widest font-bold font-mono">
                                   Estimated_Arrival :: May 14, 2024 // 17:00_LST
                                </p>
                              )}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
