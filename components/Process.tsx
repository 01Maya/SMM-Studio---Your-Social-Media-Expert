'use client'
import { motion } from 'framer-motion'
import { FileText, PenTool, Search, TrendingUp } from 'lucide-react'

export function Process() {
  const steps = [
    { num: '01', icon: Search, title: 'DISCOVER', desc: 'We learn about your brand, audience, and business goals.' },
    { num: '02', icon: FileText, title: 'STRATEGIZE', desc: 'We create a custom content and growth plan designed for growth.' },
    { num: '03', icon: PenTool, title: 'CREATE', desc: 'We produce high-converting content that connects and converts.' },
    { num: '04', icon: TrendingUp, title: 'OPTIMIZE', desc: 'We analyze, optimize, and scale what works for real measurable results.' },
  ]

  return (
    <section id="process" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-[#4f6ba1]"
        >
<span className="font-script block text-5xl leading-none sm:text-6xl">
  How We
</span>

<span className="-mt-4.5 block font-serif text-4xl font-semibold uppercase tracking-[0.18em] sm:text-5xl">
  Work
</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="space-y-4 text-center"
              >
                <motion.div whileHover={{ scale: 1.08 }} className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef3fb]">
                    <Icon className="h-8 w-8 text-[#4f6ba1]" />
                  </div>
                </motion.div>
                <div className="font-serif text-lg font-semibold text-[#d9c7a1]">{step.num}</div>
                <h3 className="text-lg font-semibold tracking-[0.2em] text-[#4f6ba1]">{step.title}</h3>
                <p className="text-sm leading-6 text-[#5d6170]">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
