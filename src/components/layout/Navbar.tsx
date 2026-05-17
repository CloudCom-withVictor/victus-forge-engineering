import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hammer, ShoppingCart, Newspaper, Settings, MessageSquare, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { path: '/', label: 'Home', icon: Hammer },
  { path: '/cnc', label: 'CNC Cutting', icon: Settings },
  { path: '/store', label: 'Material Store', icon: ShoppingCart },
  { path: '/blog', label: 'News & Blog', icon: Newspaper },
  { path: '/contact', label: 'Enquiries', icon: MessageSquare },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background-panel border-b border-zinc-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-black text-sm">V</div>
            <span className="text-lg font-semibold tracking-tighter uppercase text-white hidden sm:block">
              Victus Forge <span className="text-zinc-muted font-light italic capitalize">Engineering</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-medium uppercase tracking-[0.2em]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "hover:text-white transition-colors py-2 relative",
                    isActive ? "text-accent-bright" : "text-zinc-muted"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-2">
                       <item.icon className="w-3.5 h-3.5" />
                       {item.label}
                    </div>
                    {isActive && <motion.div layoutId="nav-underline" className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-accent-bright" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/tracking"
              className="px-4 py-2 border border-zinc-border text-[10px] font-bold uppercase tracking-widest text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              Order Tracking
            </NavLink>
            <NavLink
              to="/contact"
              className="px-4 py-2 bg-accent text-black text-[10px] font-bold uppercase tracking-widest hover:bg-accent-bright transition-colors"
            >
              Request Quote
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background-panel border-b border-zinc-border"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-4 text-xs font-bold uppercase tracking-wider",
                      isActive ? "text-accent-bright" : "text-zinc-muted"
                    )
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-border">
                <NavLink
                  to="/tracking"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 border border-zinc-border text-xs font-bold uppercase tracking-widest"
                >
                  Track Order
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 bg-accent text-black text-xs font-bold uppercase tracking-widest"
                >
                  Request Quote
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
