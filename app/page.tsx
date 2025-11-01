import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, PrimaryCTA, SecondaryCTA, Card, SectionTitle, StatsRow } from '@/components/Blocks'
import Link from 'next/link'
import Image from 'next/image'

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
                <p className="mt-4 text-neutral-300 max-w-xl">We built the Bay Area’s most selective zero‑equity founder community. Our fund takes first‑money positions and follows winners—with privileged access others can’t get.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryCTA href="/invest">Invest with us</PrimaryCTA>
                  <SecondaryCTA
                    href="https://meetings-na2.hubspot.com/inception/fund1-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a call
                  </SecondaryCTA>
                  <SecondaryCTA href="/faq">FAQ</SecondaryCTA>
                </div>
                <StatsRow/>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-neutral-900 relative">
                  <Image src="/Cohort.7.jpg" alt="Inception retreat" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-2xl bg-white/5 backdrop-blur px-4 py-3 ring-1 ring-white/10 text-xs">Zero‑equity retreats → privileged access</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* THE OPPORTUNITY */}
        <section className="py-16 md:py-24 border-t border-white/5" id="opportunity">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="eyebrow justify-center">The Opportunity</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Why Experienced Founders Choose Us</h2>
              <p className="mt-3 text-xl text-neutral-300">Traditional accelerators fail elite founders. We built something different.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <div className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold text-teal-300 mb-3">Zero Equity Model</h3>
                  <p className="text-neutral-300 leading-relaxed">Our non-profit accelerator takes 0% equity, attracting founders who would never join YC or traditional programs.</p>
                </div>
              </Card>
              <Card>
                <div className="p-8">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold text-teal-300 mb-3">3-Day Retreats</h3>
                  <p className="text-neutral-300 leading-relaxed">Not a 3-month program. Experienced founders need focus and deadlines, not basic startup education.</p>
                </div>
              </Card>
              <Card>
                <div className="p-8">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-teal-300 mb-3">First Money In</h3>
                  <p className="text-neutral-300 leading-relaxed">We invest at formation, before anyone else. Best terms, privileged access to elite founders.</p>
                </div>
              </Card>
            </div>

            <Card className="max-w-4xl mx-auto">
              <div className="p-8">
                <blockquote className="text-lg text-neutral-200 italic leading-relaxed mb-6">
                  &ldquo;Inception gave us that initial push to get over the &apos;activation energy&apos; required... Our company would not exist without Inception.&rdquo;
                </blockquote>
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                    <Image
                      src="/team/andy-chou.jpg"
                      alt="Andy Chou"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Andy Chou</div>
                    <div className="text-sm text-neutral-300 mt-1">Founder & CEO, Ventrilo (raised $10M from a16z)</div>
                    <div className="text-sm text-neutral-400 mt-1">Previously founded Coverity (acquired for $350M)</div>
                  </div>
                </div>
              </div>
            </Card>
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
                <SectionTitle eyebrow="Our Thesis" title="Simple thesis, powerful edge"/>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-300"></span><span><strong>Experienced founders win.</strong> They’re 1.6–2.0× likelier to produce outsized outcomes and raise more with less dilution.</span></li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-300"></span><span><strong>Zero‑equity top‑of‑funnel.</strong> Our 72‑hour retreats attract elite repeat founders who avoid traditional accelerators.</span></li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-300"></span><span><strong>Own the earliest allocation.</strong> $100k starters at formation, then $500k–$1.5M into validated winners, with MFN & pro‑rata.</span></li>
                </ul>
                <div className="pt-2 flex gap-3">
                  <PrimaryCTA href="/invest">Invest with us</PrimaryCTA>
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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="eyebrow justify-center">Portfolio</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Backing AI&apos;s Future Leaders</h2>
              <p className="mt-3 text-xl text-neutral-300">From Stanford PhDs to exited founders, our portfolio represents the best of Silicon Valley</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Ventrilo */}
              <Card>
                <Link
                  href="https://ventrilo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center p-1">
                      <img src="/logos/ventrilo.png" alt="Ventrilo logo" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-lg font-bold text-white">Ventrilo.ai</div>
                        <div className="text-sm text-neutral-400 mt-1">AI-powered quality for developers</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-teal-300">Andy Chou</div>
                        <p className="text-sm text-neutral-300 mt-1">Stanford PhD, Coverity Founder/CTO (acq. by Synopsys for $350M)</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-xs text-neutral-400">Raised</div>
                          <div className="text-sm font-semibold text-white mt-1">$10M</div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-400">Lead Investor</div>
                          <div className="text-sm font-semibold text-white mt-1">a16z</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              {/* Coframe */}
              <Card>
                <Link
                  href="https://coframe.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center p-1">
                      <img src="/logos/coframe.jpg" alt="Coframe logo" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-lg font-bold text-white">Coframe</div>
                        <div className="text-sm text-neutral-400 mt-1">Automatically refine UX with AI</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-teal-300">Josh Payne</div>
                        <p className="text-sm text-neutral-300 mt-1">2x Stanford dropout, Founder Autograph (unicorn), AccessBell (acquired)</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-xs text-neutral-400">Raised</div>
                          <div className="text-sm font-semibold text-white mt-1">$9M</div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-400">Lead Investor</div>
                          <div className="text-sm font-semibold text-white mt-1">Khosla</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              {/* SynthPop */}
              <Card>
                <Link
                  href="https://synthpop.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center p-1">
                      <img src="/logos/synthpop.png" alt="SynthPop logo" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-lg font-bold text-white">SynthPop</div>
                        <div className="text-sm text-neutral-400 mt-1">Unlocking AI for healthcare</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-teal-300">Elad Ferber &amp; Jan Jannick</div>
                        <p className="text-sm text-neutral-300 mt-1">Founder Spry Health; Stanford PhD, Founder imeem and VoiceBase</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-xs text-neutral-400">Raised</div>
                          <div className="text-sm font-semibold text-white mt-1">$23M</div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-400">Founded</div>
                          <div className="text-sm font-semibold text-white mt-1">2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              {/* mem0 */}
              <Card>
                <Link
                  href="https://mem0.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center p-1">
                      <img src="/logos/mem0.svg" alt="mem0 logo" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-lg font-bold text-white">mem0</div>
                        <div className="text-sm text-neutral-400 mt-1">Cross-platform memory for LLMs</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-teal-300">Taranjeet Singh &amp; Deshraj Yadav</div>
                        <p className="text-sm text-neutral-300 mt-1">First GPT Store (400K MAU), Led AI Platform at Tesla</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-xs text-neutral-400">Series A</div>
                          <div className="text-sm font-semibold text-white mt-1">$20M</div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-400">GitHub Stars</div>
                          <div className="text-sm font-semibold text-white mt-1">40K+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              {/* First Intelligence */}
              <Card>
                <Link
                  href="https://first-intelligence.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center p-1">
                      <img src="/logos/first-intelligence.png" alt="First Intelligence logo" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-lg font-bold text-white">First Intelligence</div>
                        <div className="text-sm text-neutral-400 mt-1">AI that remembers everything</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-teal-300">Kelly Peng</div>
                        <p className="text-sm text-neutral-300 mt-1">UC Berkeley EECS, MIT EECS, 15+ patents, Forbes 30u30</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-xs text-neutral-400">Patents</div>
                          <div className="text-sm font-semibold text-white mt-1">15+</div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-400">Awards</div>
                          <div className="text-sm font-semibold text-white mt-1">2x CES</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              {/* AxiomBio */}
              <Card>
                <Link
                  href="https://axi.om/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center p-1">
                      <img src="/logos/axiom.png" alt="AxiomBio logo" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-lg font-bold text-white">AxiomBio</div>
                        <div className="text-sm text-neutral-400 mt-1">AI toxicity platform replacing animal testing</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-teal-300">Brandon White &amp; Alex Beatson</div>
                        <p className="text-sm text-neutral-300 mt-1">Beatson, ex-Director of ML at Redesign Science, Princeton PhD in generative models, and 2× Scale AI GenAI hackathon runner-up</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-xs text-neutral-400">Funding</div>
                          <div className="text-sm font-semibold text-white mt-1">$15M Series A</div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-400">Enterprise pilots</div>
                          <div className="text-sm font-semibold text-white mt-1">7 pharma</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-neutral-300 mb-4">Plus 36 more exceptional companies...</p>
              <SecondaryCTA href="/portfolio">View Full Portfolio</SecondaryCTA>
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
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <PrimaryCTA href="/invest">Invest with us</PrimaryCTA>
              <SecondaryCTA
                href="https://meetings-na2.hubspot.com/inception/fund1-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a call
              </SecondaryCTA>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
