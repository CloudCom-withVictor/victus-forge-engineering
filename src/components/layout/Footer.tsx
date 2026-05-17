import { Hammer, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background-panel border-t border-zinc-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-black text-sm">V</div>
              <span className="font-semibold tracking-tighter uppercase text-white">
                VICTUS FORGE
              </span>
            </div>
            <p className="text-zinc-muted text-[11px] uppercase tracking-wider mb-6 leading-relaxed">
              Premium precision engineering, specialized in CNC cutting, fabrication, and industrial maintenance. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded border border-zinc-border flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-zinc-border flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-zinc-border flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6 font-bold">Services</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-wider text-zinc-400">
              <li><NavLink to="/cnc" className="hover:text-accent transition-colors">CNC Laser Cutting</NavLink></li>
              <li><NavLink to="/fabrication" className="hover:text-accent transition-colors">Fabrication & Welding</NavLink></li>
              <li><NavLink to="/maintenance" className="hover:text-accent transition-colors">Maintenance & Install</NavLink></li>
              <li><NavLink to="/store" className="hover:text-accent transition-colors">Material Store</NavLink></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6 font-bold">Explore</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-wider text-zinc-400">
              <li><NavLink to="/blog" className="hover:text-accent transition-colors">News & Articles</NavLink></li>
              <li><NavLink to="/about" className="hover:text-accent transition-colors">About Victus Forge</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-accent transition-colors">Careers</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-accent transition-colors">Request a Quote</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-wider text-zinc-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>123 Industrial Estate, Lagos</span>
                <span>ROAD 456 Titilayo Matogbun, Ogun State, Nigeria</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+234 70 6175 98 FORGE 02</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>enquiries@victusforge.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="h-8 border-t border-zinc-border bg-background-panel flex items-center justify-between px-8">
        <div className="flex gap-6 items-center text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 
            CNC Queue: Active
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 
            Foundry: Operational
          </div>
        </div>
        <div className="text-[9px] text-zinc-600 tracking-[0.1em] uppercase">
          &copy; 2024 VICTUS FORGE ENGINEERING LTD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
