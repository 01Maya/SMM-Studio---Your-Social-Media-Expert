import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
