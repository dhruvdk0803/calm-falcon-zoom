import { Flame, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-comic-blue border-t-8 border-black pt-24 pb-12 relative overflow-hidden bg-halftone-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 bg-white border-4 border-black shadow-comic p-8 rounded-xl">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-black font-bebas text-4xl tracking-wider mb-6">
              <Flame className="text-comic-red w-10 h-10 fill-comic-red" strokeWidth={2} stroke="black" />
              <span>SUPER SMASH KC</span>
            </div>
            <p className="text-black font-bold max-w-sm text-xl uppercase">
              Kansas City's ultimate rage room experience. Smash stress, break everything, and feel better instantly.
            </p>
          </div>
          <div>
            <h4 className="text-comic-blue font-bebas text-3xl tracking-widest uppercase mb-6 text-outline-black">Location</h4>
            <p className="text-black font-bold text-lg uppercase">
              1234 Smash Avenue<br />
              Kansas City, MO 64108<br />
              (555) 123-4567
            </p>
          </div>
          <div>
            <h4 className="text-comic-yellow font-bebas text-3xl tracking-widest uppercase mb-6 text-outline-black">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-comic-red border-4 border-black shadow-comic-sm flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-comic transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-comic-yellow border-4 border-black shadow-comic-sm flex items-center justify-center text-black hover:-translate-y-1 hover:shadow-comic transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-comic-green border-4 border-black shadow-comic-sm flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-comic transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-lg font-bold text-black uppercase">
          <p className="bg-white px-4 py-2 border-2 border-black rounded-md shadow-comic-sm">&copy; {new Date().getFullYear()} Super Smash KC. All rights reserved.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#" className="bg-white px-4 py-2 border-2 border-black rounded-md shadow-comic-sm hover:-translate-y-1 transition-transform">Privacy Policy</a>
            <a href="#" className="bg-white px-4 py-2 border-2 border-black rounded-md shadow-comic-sm hover:-translate-y-1 transition-transform">Terms of Service</a>
            <a href="#" className="bg-white px-4 py-2 border-2 border-black rounded-md shadow-comic-sm hover:-translate-y-1 transition-transform">Waiver</a>
          </div>
        </div>
      </div>
    </footer>
  );
}