import React from 'react';
import { motion } from 'motion/react';
import { Search, Newspaper, Tag, Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost, Category } from '../types';
import { cn } from '../lib/utils';

const categories: Category[] = ['Engineering', 'Fabrication', 'CNC Cutting', 'Company Updates', 'Industry Insights'];

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Fiber Laser Cutting in 2024',
    excerpt: 'How fiber laser technology is revolutionizing metal fabrication efficiency and precision across West Africa.',
    content: 'Full article content about laser cutting...',
    category: 'CNC Cutting',
    author: 'Victor Oladimeji',
    date: 'May 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Victus Forge Opens New Fabrication Wing',
    excerpt: 'We are proud to announce the expansion of our Lagos facility, doubling our welding capacity.',
    content: 'Expansion details...',
    category: 'Company Updates',
    author: 'Engineering Dept',
    date: 'May 05, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5f64d0b0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Structural Steel Best Practices: AWS D1.1',
    excerpt: 'Understanding the importance of standardizing welding procedures for commercial construction.',
    content: 'Welding standards...',
    category: 'Fabrication',
    author: 'Chief Engineer',
    date: 'April 28, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Optimizing Material Usage in Heavy Industry',
    excerpt: 'Reducing waste through smart nesting algorithms in CNC machining.',
    content: 'Material optimization...',
    category: 'Engineering',
    author: 'Logistics Team',
    date: 'April 20, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800'
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<Category | 'All'>('All');

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background-deep min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-zinc-border bg-background-panel relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                <Newspaper className="w-4 h-4" /> Technical Documentation & News
              </div>
              <h1 className="text-5xl sm:text-7xl font-sans font-black text-white uppercase tracking-tighter leading-none mb-8">Engineering <br /> <span className="text-accent italic font-serif text-6xl block sm:inline">Intelligence</span></h1>
              <p className="text-zinc-500 max-w-xl font-serif italic text-lg leading-relaxed">
                Critical insights into material sciences, CNC optimization, and structural fabrication standards.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
              <input 
                type="text" 
                placeholder="Search database..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 py-5 pl-12 pr-4 text-xs font-bold uppercase tracking-widest text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Feed */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <motion.article 
                    layout
                    key={post.id}
                    className="flex flex-col bg-background-panel group"
                  >
                    <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                       <img 
                         src={post.imageUrl} 
                         alt={post.title}
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                         referrerPolicy="no-referrer"
                       />
                       <div className="absolute top-6 left-6">
                          <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold text-accent uppercase tracking-[0.2em] border border-accent/20">
                            {post.category}
                          </span>
                       </div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                       <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6">
                          <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-accent transition-colors uppercase tracking-tight">{post.title}</h3>
                       <p className="text-zinc-500 text-sm mb-12 leading-relaxed lowercase italic font-serif">
                         {post.excerpt}
                       </p>
                       <div className="mt-auto pt-8 border-t border-zinc-border flex items-center justify-between">
                          <button className="flex items-center gap-3 text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                            Full Report <ArrowRight className="w-3 h-3" />
                          </button>
                       </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full py-32 text-center bg-background-panel">
                   <p className="font-mono text-zinc-700 text-xs tracking-widest uppercase italic">Error: No_Data_Entries_Found</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-16">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-8 font-bold flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-accent" /> Categories
              </h4>
              <div className="space-y-px bg-zinc-900 border border-zinc-900">
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={cn(
                    "w-full text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors",
                    selectedCategory === 'All' ? "bg-accent text-black" : "bg-background-panel text-zinc-500 hover:text-white"
                  )}
                >
                  System All
                </button>
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "w-full text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors",
                      selectedCategory === cat ? "bg-accent text-black" : "bg-background-panel text-zinc-500 hover:text-white"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-10 bg-accent text-black border border-accent">
                <h4 className="font-bold text-2xl mb-4 leading-tight uppercase tracking-tighter">Forge Sub</h4>
                <p className="text-[11px] font-bold uppercase leading-relaxed mb-8 opacity-70">Join our newsletter to receive mechanical specifications and industry standards directly.</p>
                <div className="space-y-3">
                   <input 
                     type="email" 
                     placeholder="INTERNAL@ORG.COM"
                     className="w-full bg-black/10 border border-black/20 px-4 py-4 text-xs font-bold uppercase tracking-widest placeholder:text-black/30 focus:outline-none"
                   />
                   <button className="w-full bg-black text-accent font-black py-4 text-[10px] uppercase tracking-[0.3em]">
                     Activate Sync
                   </button>
                </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
