'use client'

import { motion } from 'framer-motion'

export function About() {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#faf8f4] py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative Flower */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.9, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 z-10 block w-28 opacity-80 sm:w-36 lg:hidden"
      >
        <motion.img
          src="/about flower.png"
          alt="Flower Decoration"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-auto w-full object-contain blur-[1px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.9, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-[-10px] right-[-10px] z-10 hidden lg:block"
      >
        <motion.img
          src="/about flower.png"
          alt="Flower Decoration"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-[340px] w-auto object-contain opacity-75 blur-[2px]"
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-20 md:grid-cols-2">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto h-[520px] w-full max-w-[620px]"
          >
            {/* Back Paper */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-16 top-6 h-[330px] w-[270px] rotate-[-4deg] border-[6px] border-white bg-[#f4d8ac]"
            />

            {/* Paper Layer */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute left-28 top-0 h-[360px] w-[290px] rotate-[5deg] border-[6px] border-white bg-[#f0f0f0]"
            />

            {/* Small Polaroid */}
            <motion.div
              whileHover={{ rotate: -2, scale: 1.04 }}
              className="absolute left-24 top-12 z-20"
            >
              <img
                src="/POTRAIT.png"
                alt="Polaroid"
                className="h-[185px] w-[155px] object-cover border-[6px] border-white drop-shadow-xl"
              />
            </motion.div>

            {/* Main Polaroid */}
            <motion.div
              whileHover={{ rotate: 2, scale: 1.04 }}
              className="absolute left-44 top-20 z-30"
            >
              <img
                src="/smm (2).png"
                alt="Main Polaroid"
                className="h-[310px] w-[260px] object-cover border-[6px] border-white drop-shadow-2xl"
              />
            </motion.div>

            {/* Headphones */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-[230px] top-0 z-40"
            >
              <img
                src="HEADSETS.png"
                alt="Headphones"
                className="h-[155px] w-[155px] object-contain"
              />
            </motion.div>

            {/* Disco Ball */}
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute bottom-8 left-4"
            >
              <img
                src="/cta mirrorball.png"
                alt="Disco Ball"
                className="h-[180px] w-[180px] object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-md text-center"
          >
            {/* Heading */}
            <motion.div variants={item}>
              <h2 className="text-[#5e76b6]">
                <span className="font-serif block text-4xl uppercase tracking-[0.12em] sm:text-5xl">
                  ABOUT
                </span>

                <span className="font-script -mt-2 block text-5xl leading-none sm:text-6xl">
                  Me
                </span>
              </h2>
            </motion.div>

            {/* Intro Text */}
            <motion.p
              variants={item}
              className="mx-auto mt-8 max-w-md text-lg leading-7 text-[#5d6170]"
            >
              Hi, I'm Kate! I help entrepreneurs, creators, and coaches
              grow their Instagram with strategies that actually work.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-md text-lg leading-7 text-[#5d6170]"
            >
              After figuring out how to beat the overwhelm of algorithms
              and trends, now after helping 150+ clients build their
              Instagram presence, I've turned my experience into
              step-by-step programs designed to save you time, boost your
              confidence, and finally make Instagram your most powerful
              business tool.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={item}
              className="mt-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group inline-flex items-center gap-4 rounded-full border border-[#5e76b6] bg-transparent px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#5e76b6] transition-all duration-300 hover:bg-[#5e76b6] hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  +
                </span>

                <span>More About Me</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  +
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}