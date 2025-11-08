export default function Footer() {
  return (
    <footer className="bg-gray-900 text-amber-100 py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl">BLV Stitchings</div>
            <p className="mt-2 text-sm text-amber-200/80">Perfect Fit, Elegant Stitch</p>
          </div>
          <div className="text-sm">
            <div className="font-medium">Address</div>
            <p className="text-amber-200/80">123 Elegant Street, Fashion District, City</p>
            <div className="mt-3 font-medium">Contact</div>
            <p className="text-amber-200/80">+91 99999 99999 • hello@blvstitchings.com</p>
          </div>
          <div className="text-sm">
            <div className="font-medium">Follow</div>
            <div className="mt-2 flex gap-4">
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-amber-200/70">
          © 2025 BLV Stitchings. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
