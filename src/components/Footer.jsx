import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="bg-black border-t border-yellow-500/20 py-20">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 mb-16">
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          <h4 className="text-2xl font-display font-bold gradient-text">MADRE PACKAGES</h4>
        </div>
        <p className="text-gray-400 text-sm">Luxury packaging excellence since inception.</p>
      </div>
      {/* Link groups omitted for brevity - follow original pattern */}
      <div className="text-gray-400 text-sm space-y-2">
        <h5 className="text-yellow-500 uppercase tracking-widest mb-4">Contact</h5>
        <p>marketing@zahirdamaso.com</p>
        <p>+971 42 564 306</p>
      </div>
    </div>
    <div className="text-center text-gray-500 text-xs tracking-widest uppercase border-t border-yellow-500/10 pt-8">
      © 2024 Madre Packages And Design.
    </div>
  </footer>
);

export default Footer;