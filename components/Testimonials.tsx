'use client'

import { motion } from 'framer-motion'

export function Testimonials() {
  const testimonials = [
    {
      text: 'Our engagement doubled within 90 days. The strategy completely transformed our brand.',
      name: 'Sarah M.',
      role: 'Fashion Founder',
      image: '/sarah.jpg',
    },
    {
      text: 'The first agency that actually delivered measurable business growth.',
      name: 'Alex R.',
      role: 'Wellness Brand',
      image: '/alex.jpg',
    },
    {
      text: 'Our content finally feels premium and aligned with our audience.',
      name: 'Emma L.',
      role: 'Personal Brand',
      image: '/emma.jpg',
    },
  ]

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#faf8f4] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-[#5e76b6]">
            <span className="font-serif block text-4xl uppercase tracking-[0.18em] sm:text-5xl">
              CLIENT LOVE
            </span>

            <span className="font-script -mt-2 block text-5xl leading-none sm:text-6xl">
              Notes
            </span>
          </h2>

          <div className="mx-auto mt-6 flex max-w-xl items-center gap-6">
            <div className="h-px flex-1 bg-[#d8dce8]" />
            <div className="h-px flex-1 bg-[#d8dce8]" />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-[#e8e2d8] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#eef3ff]/0 via-[#eef3ff]/0 to-[#eef3ff]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Stars */}
              <div className="relative z-10 mb-6 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className="text-sm text-[#5e76b6]"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="relative z-10 mb-8 text-[15px] leading-7 text-[#4b5563]">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-3">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  src={item.image}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-[#eef2ff]"
                />

                <div>
                  <p className="text-sm font-medium text-[#24344f]">
                    {item.name}
                  </p>

                  <p className="text-xs text-[#6b7280]">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Quote Mark */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-2 right-4 select-none text-[120px] font-serif leading-none text-[#f1ece4]"
              >
                ”
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}