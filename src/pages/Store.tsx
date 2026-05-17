import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Filter, Search, Grid, List as ListIcon, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';

const mockProducts: Product[] = [
  { id: 'p1', name: 'Mild Steel Square Bar', description: '20mm x 20mm Industrial grade S235JR', price: 4500, unit: '6m Length', category: 'Steel', stock: 120 },
  { id: 'p2', name: 'Stainless Steel Plate', description: '304L Food Grade, 2mm Thickness', price: 12500, unit: 'sqm', category: 'Stainless', stock: 45 },
  { id: 'p3', name: 'Aluminum Checker Plate', description: '5-Bar Pattern, 3mm Thickness', price: 8900, unit: 'sqm', category: 'Aluminum', stock: 18 },
  { id: 'p4', name: 'Industrial Welding Wire', description: '0.8mm MIG Wire, 15kg Spool', price: 15000, unit: 'Spool', category: 'Consumables', stock: 30 },
  { id: 'p5', name: 'Corten Steel Sheet', description: 'Weathering Steel, 5mm Thickness', price: 18500, unit: 'sqm', category: 'Steel', stock: 12 },
  { id: 'p6', name: 'Plasma Consumable Kit', description: 'Thermal Dynamics SL60/SL100 compatible', price: 32000, unit: 'Kit', category: 'Consumables', stock: 5 },
];

export default function Store() {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [cart, setCart] = React.useState<{id: string, qty: number}[]>([]);

  const addToCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) return prev.map(item => item.id === id ? {...item, qty: item.qty + 1} : item);
      return [...prev, {id, qty: 1}];
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="bg-background-deep min-h-screen">
      {/* Store Header */}
      <section className="py-24 border-b border-zinc-border bg-background-panel relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <div>
                <div className="flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                  <ShoppingBag className="w-4 h-4" /> Professional Resource Supply
                </div>
                <h1 className="text-5xl sm:text-7xl font-sans font-black text-white uppercase tracking-tighter leading-none mb-8">Material <br /> <span className="text-accent italic font-serif text-6xl block sm:inline">Store</span></h1>
                <p className="text-zinc-500 max-w-xl font-serif italic text-lg leading-relaxed lowercase">
                   direct access to industrial-grade metals and engineering consumables. high-volume discounts available.
                </p>
              </div>

              <div className="flex items-center gap-4">
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                    <input type="text" placeholder="SEARCH_INVENTORY..." className="bg-zinc-900 border border-zinc-800 px-12 py-5 text-[10px] font-bold uppercase tracking-widest text-white focus:outline-none focus:border-accent w-80" />
                 </div>
                 <button className="p-5 bg-zinc-900 border border-zinc-800 hover:border-accent transition-colors relative group">
                    <ShoppingCart className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-black text-[10px] font-bold rounded-none flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Main Store Area */}
      <section className="py-24 max-w-7xl mx-auto px-8">
         <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4 space-y-16">
               <div className="bg-background-panel border border-zinc-800 p-10 sticky top-32">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-10 font-bold flex items-center gap-3">
                    <Filter className="w-4 h-4 text-accent" /> Filter_Params
                  </h4>
                  
                  <div className="space-y-12">
                     <div>
                        <span className="block text-[9px] font-black text-zinc-700 uppercase tracking-[0.2em] mb-6">A1 // Categories</span>
                        <div className="space-y-4">
                           {['Steel', 'Stainless', 'Aluminum', 'Copper/Brass', 'Consumables'].map(c => (
                             <label key={c} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500 cursor-pointer hover:text-white transition-colors group">
                                <input type="checkbox" className="w-4 h-4 accent-accent bg-zinc-900 border-zinc-800 rounded-none" /> {c}
                             </label>
                           ))}
                        </div>
                     </div>

                     <div>
                        <span className="block text-[9px] font-black text-zinc-700 uppercase tracking-[0.2em] mb-6">A2 // Price Range (₦)</span>
                        <div className="grid grid-cols-2 gap-px bg-zinc-800">
                           <input type="number" placeholder="MIN" className="bg-zinc-900 px-4 py-3 text-[10px] font-mono text-white focus:outline-none focus:bg-zinc-800" />
                           <input type="number" placeholder="MAX" className="bg-zinc-900 px-4 py-3 text-[10px] font-mono text-white focus:outline-none focus:bg-zinc-800" />
                        </div>
                     </div>

                     <button className="w-full py-4 bg-accent text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-accent-bright transition-colors">
                        Re-Sync Results
                     </button>
                  </div>
               </div>
            </aside>

            {/* Product List */}
            <div className="lg:w-3/4">
               <div className="flex justify-between items-center mb-10 pb-6 border-b border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Inventory_Cycle // {mockProducts.length} Results</span>
                  <div className="flex items-center gap-4">
                     <button onClick={() => setView('grid')} className={cn("p-2 transition-colors", view === 'grid' ? "text-accent" : "text-zinc-700 hover:text-white")}><Grid className="w-5 h-5" /></button>
                     <button onClick={() => setView('list')} className={cn("p-2 transition-colors", view === 'list' ? "text-accent" : "text-zinc-700 hover:text-white")}><ListIcon className="w-5 h-5" /></button>
                  </div>
               </div>

               <div className={cn(
                 "grid gap-px bg-zinc-800 border border-zinc-800",
                 view === 'grid' ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
               )}>
                  {mockProducts.map(p => (
                    <motion.div 
                      key={p.id}
                      layout
                      className={cn(
                        "bg-background-panel group hover:bg-background-elevated transition-colors",
                        view === 'list' ? "flex gap-12 p-12 items-center" : "flex flex-col"
                      )}
                    >
                       <div className={cn(
                         "bg-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700",
                         view === 'list' ? "w-56 h-56 border border-zinc-800" : "h-72"
                       )}>
                          <div className="w-full h-full flex items-center justify-center">
                             <div className="absolute inset-0 grid-bg-dots opacity-20 group-hover:opacity-40 transition-opacity"></div>
                             <ShoppingBag className="w-12 h-12 text-zinc-900 group-hover:text-accent/20 transition-all scale-150" />
                             <div className="absolute top-6 left-6">
                               <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[9px] font-bold text-accent border border-accent/20 uppercase tracking-[0.2em]">{p.category}</span>
                             </div>
                          </div>
                       </div>
                       
                       <div className={cn("p-10 flex flex-col flex-grow", view === 'list' && "p-0")}>
                          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-accent transition-colors leading-none">{p.name}</h3>
                          <p className="text-[13px] text-zinc-500 mb-10 font-serif italic lowercase leading-relaxed">{p.description}</p>
                          <div className="mt-auto">
                             <div className="flex items-baseline justify-between mb-8">
                                <div className="text-2xl font-mono font-bold text-white tracking-tighter">₦{p.price.toLocaleString()} <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest block mt-1">/ {p.unit}</span></div>
                             </div>
                             <button 
                               onClick={() => addToCart(p.id)}
                               className="w-full py-5 bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-accent uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-accent hover:text-black transition-all"
                             >
                               <ShoppingCart className="w-4 h-4" /> Procure Asset
                             </button>
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>

               {/* Pagination */}
               <div className="mt-20 flex justify-center gap-px bg-zinc-800 border border-zinc-800 w-fit mx-auto">
                  {[1, 2, 3].map(n => (
                    <button key={n} className={cn(
                      "w-12 h-12 transition-colors font-mono text-[10px] font-bold uppercase",
                      n === 1 ? "bg-accent text-black" : "bg-background-panel text-zinc-600 hover:text-white"
                    )}>{n}</button>
                  ))}
                  <button className="px-8 h-12 bg-background-panel text-zinc-600 hover:text-white transition-colors flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest">
                    Next_Set <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
