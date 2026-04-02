import { Flame, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.05)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bebas text-3xl tracking-wider mb-6">
              <Flame className="text-red-600 w-8 h-8" />
              <span>SUPER SMASH KC</span>
            </div>
            <p className="text-gray-400 max-w-sm text-lg">
              Kansas City's ultimate rage room experience. Smash stress, break everything, and feel better instantly.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bebas text-xl tracking-widest uppercase mb-6">Location</h4>
            <p className="text-gray-400">
              1234 Smash Avenue<br />
              Kansas City, MO 64108<br />
              (555) 123-4567
            </p>
          </div>
          <div>
            <h4 className="text-white font-bebas text-xl tracking-widest uppercase mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Super Smash KC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Waiver</a>
          </div>
        </div>
      </div>
    </footer>
  );
}