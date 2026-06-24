'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

function CountUp({
  value,
  duration = 1.8,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const count = useMotionValue(0)
  const display = useTransform(count, (latest) =>
    `${prefix}${latest.toFixed(decimals)}${suffix}`,
  )

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: 'easeOut' })
    return () => controls.stop()
  }, [count, duration, value])

  return <motion.span>{display}</motion.span>
}

export function Stats() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  const stats = [
    { value: 320, suffix: '%', label: 'ENGAGEMENT GROWTH' },
    { value: 12, suffix: 'M+', label: 'MONTHLY REACH' },
    { value: 500, suffix: 'K+', label: 'NEW FOLLOWERS GENERATED' },
    { value: 2.4, prefix: '$', suffix: 'M', label: 'REVENUE INFLUENCED', decimals: 1 },
  ]

  return (
    <section className="overflow-hidden bg-linear-to-r from-[#3D5A80] to-[#2D4A70] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div className="mb-8 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-3xl text-white"
              >
                ★
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <span className="font-script text-2xl text-white">A</span>
              </div>
              <span className="text-3xl tracking-wide text-white">150+</span>
            </div>
            <span className="font-script text-5xl leading-none text-white sm:text-6xl">Success</span>
            <span className="text-3xl uppercase tracking-[0.2em] text-white">Stories</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto max-w-3xl text-sm leading-relaxed text-white/90"
          >
            Trusted by entrepreneurs, creators, and business owners who turned their online presence into real impact growth with proven strategies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 text-center text-white md:grid-cols-4"
        >
          {stats.map((data, i) => (
            <motion.div
              key={data.label}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="py-6"
            >
              <h4 className="mb-3 font-serif text-5xl font-bold">
                <CountUp
                  value={data.value}
                  prefix={data.prefix}
                  suffix={data.suffix}
                  decimals={data.decimals}
                />
              </h4>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                {data.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
