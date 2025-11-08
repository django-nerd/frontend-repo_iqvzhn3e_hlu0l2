import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b border-amber-200/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-serif text-xl text-gray-900">BLV Stitchings</a>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber-700 transition">{l.label}</a>
          ))}
          <a href="#contact" className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-4 py-2 text-white shadow">Book Now</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between border-b">
            <div className="font-serif text-xl">BLV Stitchings</div>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-6 w-6" /></button>
          </div>
          <div className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-lg text-gray-800">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-5 py-3 text-white shadow">Book Your Stitch</a>
          </div>
        </div>
      )}
    </header>
  );
}
