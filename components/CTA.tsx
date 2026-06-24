'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-[#edf2ff] via-[#e6edff] to-[#edf2ff] py-12 sm:py-16"
    >
      {/* Left Disco Ball */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 0.35, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 z-0 block w-24 opacity-30 sm:w-32 md:hidden"
      >
        <Image
          src="/cta mirrorball.png"
          alt="Disco Ball"
          width={420}
          height={220}
          className="pointer-events-none h-auto w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 0.35, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -left-12 bottom-0 hidden md:block"
      >
        <Image
          src="/cta mirrorball.png"
          alt="Disco Ball"
          width={420}
          height={220}
          className="pointer-events-none"
        />
      </motion.div>

      {/* Right Flower Blur */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -right-3 bottom-0 z-0 block w-24 opacity-40 blur-[0.5px] sm:-right-5 sm:w-32 md:hidden"
      >
        <Image
          src="/cta flower.png"
          alt="Flower"
          width={460}
          height={460}
          className="pointer-events-none h-auto w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -right-10 bottom-0 hidden md:block"
      >
        <Image
          src="/cta flower.png"
          alt="Flower"
          width={460}
          height={460}
          className="pointer-events-none opacity-50 blur-[1px]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Script Text */}
          <h3 className="font-script text-4xl leading-none text-[#5e76b6] sm:text-5xl">
            Ready to
          </h3>

          <h2 className="-mt-2.5 font-serif text-4xl uppercase tracking-wide text-[#5e76b6] sm:text-5xl lg:text-6xl">
            Grow Your Brand?
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#6b7280] sm:text-base">
            Let's create content that connects, engages, and converts.
          </p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group mt-6 inline-flex items-center gap-4 rounded-full border border-[#5e76b6] bg-white/70 px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#5e76b6] backdrop-blur-sm transition-all duration-300 hover:bg-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              +
            </span>

            <span>Let's Work Together</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              +
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}