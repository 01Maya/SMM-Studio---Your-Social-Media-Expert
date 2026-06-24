'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const services = [
    {
      title: 'CONTENT STRATEGY',
      image:
        'service1.png',
      desc: 'Eye-catching posts and captions that match your brand voice and save you hours of work while keeping your feed cohesive.',
      price: 'FROM $999 / MONTH',
      extra: [
        '✓ 12 posts/reels designed per month',
        '✓ Branded templates for consistency',
        '✓ Captions optimized for engagement',
      ],
    },
    {
      title: 'CAMPAIGN MANAGEMENT',
      image:
        'hero.png',
      desc: 'Stress-free execution of launches and promotions, from planning to results, so you can focus on running your business.',
      price: 'FROM $1299 / MONTH',
      extra: [
        '✓ Tailored content calendar',
        '✓ Setup & execution of promotions',
        '✓ Analytics report to track success',
      ],
    },
    {
      title: '1:1 COACHING',
      image:
        'smm (2).png',
      desc: 'Personalized guidance and a clear roadmap to grow with confidence and consistency, no matter your starting point.',
      price: 'FROM $1599 / MONTH',
      extra: [
        '✓ 6 Monthly private coaching calls',
        '✓ Custom growth roadmap',
        '✓ WhatsApp chat support',
      ],
    },
  ]

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      style={{
        background:
          'repeating-linear-gradient(90deg,#edf1fc 0px,#edf1fc 40px,#e7ecf8 40px,#e7ecf8 80px)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* LEFT LABEL */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative flex h-[220px] w-full max-w-[240px] items-center justify-center rounded-[40px] border-4 border-[#f0ebe2] bg-[#faf8f4] shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="absolute inset-3 rounded-[34px] border border-[#e7e1d7]" />

              <h2 className="text-center text-[#5e76b6]">
<span className="font-script block text-5xl leading-none sm:text-6xl">
  My
</span>

<span className="-mt-2 block font-serif text-3xl uppercase tracking-[0.08em] sm:text-4xl">
  Services
</span>
              </h2>
            </div>
          </motion.div>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const expanded = activeCard === index

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() =>
                    setActiveCard(expanded ? null : index)
                  }
                  className="group cursor-pointer overflow-hidden rounded-[28px] border border-[#ebe5dc] bg-[#faf8f4] shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden p-4 pb-0">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      animate={{
                        scale: expanded ? 1.06 : 1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="h-[180px] w-full rounded-[18px] object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="mb-5 text-center font-serif text-[24px] leading-tight text-[#5e76b6]">
                      {service.title}
                    </h3>

                    <p className="text-center text-sm leading-7 text-[#5d6170]">
                      {service.desc}
                    </p>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 space-y-3 border-t border-[#e7e1d7] pt-6 text-sm text-[#5d6170]">
                            {service.extra.map((item) => (
                              <p key={item}>{item}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-8 text-center">
                      <p className="font-serif text-xl text-[#5e76b6]">
                        {service.price}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="mt-6 w-full rounded-full bg-[#5e76b6] py-3 text-xs uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#4d66aa]"
                    >
                      COLLABORATE
                    </motion.button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}