import Footer from '@/components/Footer'
import { Container, SectionTitle, Card, PrimaryCTA, SecondaryCTA } from '@/components/Blocks'

export default function Page(){
  return (
    <>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow="Thesis" title="Where our edge comes from"/>
            <div className="mt-6 grid lg:grid-cols-2 gap-10">
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p><strong>Experience compounds.</strong> Our cohorts are 80%+ repeat founders with deep domain expertise. They move faster, hire better, and avoid early dilution.</p>
                <p><strong>Zero‑equity funnel → privileged access.</strong> We earn trust first via 72‑hour retreats, then invest. This eliminates adverse selection and secures MFN & pro‑rata.</p>
                <p><strong>First money in. Double down on the ones that take off.</strong> ~$100k starters across ~40 companies at formation; $500k–$1.5M core positions into ~12 with traction. Target 20–30% fund into breakouts.</p>
                <p><strong>Concentrated ownership.</strong> We optimize for early ownership with room to follow, not spray‑and‑pray.</p>
              </div>
              <Card><div className="p-6">
                <div className="font-semibold">What this means for LPs</div>
                <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-2">
                  <li>Proprietary deal flow from an invite‑only, zero‑equity community founders love.</li>
                  <li>Early allocation in hard‑to‑access AI teams; ability to double‑down post‑signal.</li>
                  <li>Disciplined pacing and reserves with strong governance.</li>
                </ul>
                <div className="mt-5">
                  <PrimaryCTA href="/invest">Invest with us</PrimaryCTA>
                </div>
              </div></Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
