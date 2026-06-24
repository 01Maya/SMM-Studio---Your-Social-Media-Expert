'use client'

import { motion } from 'framer-motion'
import { Globe, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    { label: 'Content Strategy', href: '#services' },
    { label: 'Campaign Management', href: '#services' },
    { label: '1:1 Coaching', href: '#services' },
  ]

  return (
    <footer className="relative overflow-hidden bg-linear-to-r from-[#3D5A80] to-[#2D4A70] text-white">
      {/* Top Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <h3 className="font-script text-4xl leading-none text-white">
              SMM Studio
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
              Strategy. Content. Growth.
              <br />
              All in one place.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="mailto:hello@smmstudio.com"
                aria-label="Email"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:border-l lg:border-white/20 lg:pl-8"
          >
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-white/90">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
{/* Contact */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="lg:border-l lg:border-white/20 lg:pl-8"
>
  <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-white/90">
    Contact
  </h4>

  <div className="space-y-6 text-sm text-white/80">
    <div>
      <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/60">
        Email
      </p>
      <p>hello@smmstudio.com</p>
    </div>

    <div>
      <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/60">
        Timings
      </p>
      <p>Monday — Friday</p>
      <p>09:00 — 18:00</p>
    </div>
  </div>
</motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:border-l lg:border-white/20 lg:pl-8"
          >
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-white/90">
              Let's Connect
            </h4>

            <p className="mb-1 text-sm text-white/80">
              Ready to grow your brand?
            </p>

            <p className="mb-5 text-sm text-white/80">
              Let's make it happen.
            </p>

            <button className="rounded-full bg-white px-6 py-2 text-xs font-medium tracking-[0.15em] text-[#5f76b6] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              BOOK A CALL
            </button>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-5 text-xs text-white/70 md:flex-row md:items-center md:justify-between"
        >
          <p>© 2025 SMM Studio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}