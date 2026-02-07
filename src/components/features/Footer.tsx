import { Leaf, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8" strokeWidth={2.5} />
              <span className="text-xl font-semibold">PureAir</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Breathing life into sustainable technology. Join our community for clean air and a cleaner planet.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-semibold">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-[30px] bg-white/10 border border-white/20 text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="px-6 py-2 bg-white text-primary rounded-[30px] hover:bg-white/90 transition-all">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-primary-foreground/60">No spam. Eco-tips only.</p>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Air Purifiers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Replacement Filters
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Eco-Bundles
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Science
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Certification Logos */}
            <div className="flex items-center gap-6 opacity-70">
              <div className="text-xs font-semibold px-4 py-2 border border-primary-foreground/30 rounded-full">
                B-CORP
              </div>
              <div className="text-xs font-semibold px-4 py-2 border border-primary-foreground/30 rounded-full">
                GREEN GUARD
              </div>
              <div className="text-xs font-semibold px-4 py-2 border border-primary-foreground/30 rounded-full">
                CARBON NEUTRAL
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-primary-foreground/60">
              © 2026 PureAir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
