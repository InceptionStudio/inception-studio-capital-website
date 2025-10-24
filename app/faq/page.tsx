import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, SectionTitle } from '@/components/Blocks'
import { ArrowRight } from 'lucide-react'

export default function Page(){
  const items = [
    {q:'What makes your access unique?', a:'Our zero‑equity retreats attract elite repeat founders who avoid traditional accelerators. We build trust before investing, so we consistently secure early allocation with MFN and pro‑rata rights.'},
    {q:'How do you deploy capital?', a:'~$100k starter checks in ~40 companies at incorporation (1–2% target ownership). Then $500k–$1.5M core positions in ~12 companies with strong traction (2.5–10%).'},
    {q:'Who are the GPs?', a:'John Whaley (Stanford PhD, Forbes AI 50, 3x founder incl. UnifyID) and Mike Morris (28‑year Silicon Valley operator, early VMware, 3 acquisitions + 1 IPO).'},
    {q:'What are the fund terms?', a:'Target size $20M, 10‑year term (two 1‑year extensions), 2% management fee, 20% carry, $250k minimum commitment, 25% initial capital call.'},
  ]
  return (
    <>
      <Nav/>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow="FAQ" title="Frequently asked"/>
            <div className="mt-6 divide-y divide-white/10">
              {items.map((f, i)=> (
                <details key={i} className="group py-4">
                  <summary className="cursor-pointer list-none flex items-center justify-between text-left">
                    <span className="font-medium">{f.q}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90"/>
                  </summary>
                  <p className="mt-3 text-neutral-300">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
