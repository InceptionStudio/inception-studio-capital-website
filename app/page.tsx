import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, PrimaryCTA, SecondaryCTA, Card, SectionTitle, StatsRow } from '@/components/Blocks'

export default function Home(){
  return (
    <>
      <Nav/>
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden" id="top">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"/>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"/>
          </div>
          <Container className="py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow">Silicon Valley • AI‑native • Zero‑equity funnel</p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Backing the most <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">experienced AI founders</span> from day zero.
                </h1>
                <p className="mt-4 text-neutral-300 max-w-xl">We built the Bay Area’s most selective zero‑equity founder community. Our $20M fund takes first‑money positions and follows winners—with privileged access others can’t get.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryCTA href="/secure-allocation">Secure allocation</PrimaryCTA>
                  <SecondaryCTA href="/interest">Register interest</SecondaryCTA>
                  <SecondaryCTA href="/faq">FAQ</SecondaryCTA>
                </div>
                <StatsRow/>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop" alt="Inception retreat" className="h-full w-full object-cover"/>
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-2xl bg-white/5 backdrop-blur px-4 py-3 ring-1 ring-white/10 text-xs">Zero‑equity retreats → privileged access</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* OUR EDGE */}
        <section className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden" id="edge">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl"/>
          </div>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="eyebrow justify-center">Our Edge</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">The Inception Advantage</h2>
              <p className="mt-3 text-xl text-neutral-300">We&apos;ve cracked the code on attracting elite founders</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6 text-neutral-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-teal-300 mb-3">No Adverse Selection</h3>
                  <p>Every accelerator takes equity. The best founders have better options, so they don&apos;t participate. This creates adverse selection.</p>
                </div>
                <div>
                  <p>We flipped the model. <strong>Zero equity means zero adverse selection.</strong> The best founders join Inception because there&apos;s no downside.</p>
                </div>
                <div>
                  <p><strong>Result:</strong> We see founders other investors never will. We invest before anyone else. We get the best terms.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {kpi:'235', label:'Founders participated'},
                  {kpi:'19', label:'Cohort retreats'},
                  {kpi:'84', label:'Founder NPS'},
                  {kpi:'87%', label:'Founder‑to‑founder referrals'},
                  {kpi:'82%', label:'Repeat founders'},
                  {kpi:'32%', label:'Repeat founders with prior successful exit'},
                  {kpi:'42', label:'Companies raised'},
                  {kpi:'>$1.4B', label:'Raised in total'},
                  {kpi:'15+ yrs', label:'Average industry experience'},
                ].map((m, i)=> (
                  <Card key={i}>
                    <div className="p-4">
                      <div className="text-3xl font-extrabold text-teal-300 tracking-tight">{m.kpi}</div>
                      <div className="mt-2 text-neutral-300 text-sm">{m.label}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* THESIS PREVIEW */}
        <section className="py-16 md:py-24" id="thesis">
          <Container>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <SectionTitle title="Simple thesis, powerful edge"/>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-300"></span><span><strong>Experienced founders win.</strong> They’re 1.6–2.0× likelier to produce outsized outcomes and raise more with less dilution.</span></li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-300"></span><span><strong>Zero‑equity top‑of‑funnel.</strong> Our 72‑hour retreats attract elite repeat founders who avoid traditional accelerators.</span></li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-300"></span><span><strong>Own the earliest allocation.</strong> $100k starters at formation, then $500k–$1.5M into validated winners, with MFN & pro‑rata.</span></li>
                </ul>
                <div className="pt-2 flex gap-3">
                  <PrimaryCTA href="/secure-allocation">Secure allocation</PrimaryCTA>
                  <SecondaryCTA href="/thesis">Read the full thesis</SecondaryCTA>
                </div>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="Workshop" className="h-full w-full object-cover"/>
              </div>
            </div>
          </Container>
        </section>

        {/* PORTFOLIO PREVIEW */}
        <section className="py-16 md:py-24 border-t border-white/5" id="portfolio">
          <Container>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <SectionTitle title="Selective portfolio, privileged access" subtitle="42 companies founded through Inception have raised $166M+ in follow-on funding."/>
              <SecondaryCTA href="/portfolio">See all companies</SecondaryCTA>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {['Ventrilo','Mem0','TextClub','Coframe','GuestOS','Rmix','Greenflash','First Intelligence','Alex AI','Scorecard','Hyperscale','Axiom'].map((name)=> (
                <div key={name} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-sm text-neutral-300">
                  {name}
                </div>
              ))}
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {title:'Mem0', text:'$20M Series A. Cross-platform memory layer for LLMs. 40K+ stars on GitHub.'},
                {title:'Ventrilo', text:'$10M from a16z after forming team & demo at Inception.'},
                {title:'Alex AI', text:'Acquired by OpenAI (Aug 2025).'},
              ].map((f,i)=> (
                <Card key={i}><div className="p-6"><div className="font-semibold">{f.title}</div><p className="mt-2 text-neutral-300 text-sm">{f.text}</p></div></Card>
              ))}
            </div>
          </Container>
        </section>

        {/* COMMIT STRIP */}
        <section className="py-10 border-t border-white/5 bg-gradient-to-r from-teal-950/40 to-cyan-950/40">
          <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">Allocations are limited for Fund I.</div>
              <div className="text-neutral-300 text-sm">Minimum commitment $250K. Initial capital call 25%.</div>
            </div>
            <PrimaryCTA href="/secure-allocation">Secure allocation</PrimaryCTA>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
