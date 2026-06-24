'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Process', id: 'process' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-15% 0px -40% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    setActiveSection(id)
    setMenuOpen(false)

    const offset = 88
    const top = Math.max(0, window.scrollY + el.getBoundingClientRect().top - offset)

    window.requestAnimationFrame(() => {
      window.scrollTo({ top, behavior: 'smooth' })
    })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-[#e5e1d8] bg-[#f7f3eb]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => scrollTo('home')}
            className="font-script text-3xl text-[#4f6ba1]"
          >
            SMM Studio
          </motion.button>

          <div className="hidden items-center gap-4 md:flex">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(item.id)}
                className={`group relative text-[0.62rem] font-medium tracking-[0.24em] uppercase transition-colors ${
                  activeSection === item.id ? 'text-[#4f6ba1]' : 'text-[#5d6170] hover:text-[#4f6ba1]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#4f6ba1] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('contact')}
            className="group hidden items-center gap-3 rounded-full border border-[#4f6ba1] bg-transparent px-6 py-2.5 text-[0.62rem] font-semibold tracking-[0.2em] text-[#4f6ba1] uppercase transition-all duration-300 hover:bg-[#4f6ba1] hover:text-white md:inline-flex"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">+</span>
            <span>LET&apos;S GROW TOGETHER</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">+</span>
          </motion.button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-[#d9d3c7] p-2 text-[#4f6ba1] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#e5e1d8] bg-[#f7f3eb] md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold tracking-[0.24em] uppercase transition-colors ${
                    activeSection === item.id ? 'bg-[#eef3fb] text-[#4f6ba1]' : 'text-[#4b5563]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
