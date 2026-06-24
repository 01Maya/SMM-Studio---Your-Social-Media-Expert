'use client'
import { motion } from 'framer-motion'

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f3eb] pt-32 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,107,161,0.08),transparent_26%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 space-y-4"
        >
          <motion.div variants={item} className="text-sm font-semibold uppercase tracking-[0.38em] text-[#4f6ba1]">
            STRATEGY • CONTENT • GROWTH
          </motion.div>


<motion.div variants={item}>
  <h1 className="-mb-4 font-script text-6xl leading-none text-[#4f6ba1] sm:text-7xl lg:text-8xl">
    Your
  </h1>
</motion.div>


<motion.div variants={item}>
<h2 className="font-serif text-6xl leading-[0.75] tracking-[0.02em] text-[#4f6ba1] sm:text-7xl lg:text-8xl">
  SOCIAL
  <br />
  MEDIA
</h2>
</motion.div>

<motion.div variants={item}>
  <h3 className="-mt-4 font-script text-6xl leading-none tracking-[0.08em] text-[#4f6ba1] sm:text-7xl lg:text-8xl">
    Expert
  </h3>
</motion.div>

          <motion.p variants={item} className="max-w-xl text-base leading-7 text-[#5d6170] sm:text-md" style={{ marginTop: '-0.1rem' }}>
            Strategy, content, and growth tailored to your brand — designed to help you show up with confidence and convert attention into loyal customers.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row" style={{ marginTop: '-0.2rem' }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center rounded-full border border-[#4f6ba1] bg-[#4f6ba1] px-8 py-3.5 text-sm font-semibold tracking-[0.24em] text-white transition-colors hover:bg-[#3c5388]"
            >
              WORK WITH ME
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center justify-center rounded-full border border-[#d9d3c7] bg-white/70 px-8 py-3.5 text-sm font-semibold tracking-[0.24em] text-[#4f6ba1] transition-colors hover:bg-white"
            >
              VIEW SERVICES
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto max-w-4xl lg:max-w-5xl"
        >
          <div className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-[#e8eef7] blur-2xl" />
          <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-[#efe4d3] blur-3xl" />
          <motion.img
            src="hero.png"
            alt="Social Media Strategy"
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[760px] rounded-[2rem] object-cover shadow-2xl sm:max-w-[840px] lg:max-w-[940px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
