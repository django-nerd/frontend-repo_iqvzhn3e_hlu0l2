import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const whatsappURL = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi BLV Stitchings, I would like to book: ${form.service || 'Service'} on ${form.date || 'Preferred date'}. My name is ${form.name || ''}.`
  )}`;

  return (
    <section id="contact" className="bg-amber-50 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.h2
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-gray-900"
        >
          Book Your Stitch
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-amber-200/70 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-amber-200/70 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-amber-200/70 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" required />
              </div>
              <div>
                <label className="text-sm text-gray-700">Type of Service</label>
                <select name="service" value={form.service} onChange={handleChange} className="mt-1 w-full rounded-lg border border-amber-200/70 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Select</option>
                  <option>Custom Stitching</option>
                  <option>Alterations & Repairs</option>
                  <option>Bridal & Party Wear Design</option>
                  <option>Kids & Men's Tailoring</option>
                  <option>Embroidery & Fabric Detailing</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} className="mt-1 w-full rounded-lg border border-amber-200/70 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-700">Message</label>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border border-amber-200/70 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <div className="mt-6 flex gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-3 text-white shadow-lg transition hover:shadow-amber-500/40">
                <Send className="h-4 w-4" /> Submit
              </button>
              <a href={whatsappURL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-6 py-3 text-amber-800 hover:bg-amber-200">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            {sent && <div className="mt-3 text-sm text-green-600">Thanks! We will contact you shortly.</div>}
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="mt-1 h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-medium">BLV Stitchings Studio</div>
                  <div>123 Elegant Street, Fashion District, City</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6 text-gray-700">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-600" /> +91 99999 99999</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-600" /> hello@blvstitchings.com</div>
              </div>
              <div className="mt-4 flex items-center gap-6 text-gray-700">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-600" /> Mon-Sat: 10am - 8pm</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a href="#" className="inline-flex items-center gap-2 text-amber-700 hover:underline"><Instagram className="h-4 w-4" /> Instagram</a>
                <a href="#" className="inline-flex items-center gap-2 text-amber-700 hover:underline"><Facebook className="h-4 w-4" /> Facebook</a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow">
              <iframe
                title="BLV Stitchings Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019047938015!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1610000000000"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
