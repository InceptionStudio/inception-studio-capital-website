import Footer from '@/components/Footer'
import { Container, PrimaryCTA, SecondaryCTA, Card, SectionTitle, StatsRow } from '@/components/Blocks'
import Link from 'next/link'
import Image from 'next/image'
import kpis from '@/data/kpis.json' assert { type: 'json' }
import { getDictionary } from '@/lib/i18n';

type Locale = 'en' | 'ja';

type OpportunityCard = {
  icon: string;
  title: string;
  body: string;
};

type OpportunityContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: OpportunityCard[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    background: string;
    imageAlt: string;
  };
};

type EdgeBullet = {
  title: string;
  body: string;
};

type EdgeContent = {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  title: string;
  bullets: EdgeBullet[];
};

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale, 'home', 'common');
  const capitalizeLabel = (label: string) =>
    label.replace(/^(\s*)(\S)/, (_, spaces: string, first: string) => spaces + first.toUpperCase());
  const opportunity = dict.home.opportunity as OpportunityContent;
  const edge = dict.home.edge as EdgeContent;
  const thesis = dict.home.thesis as {
    eyebrow: string;
    title: string;
    bullets: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  const prefix = locale ? `/${locale}` : '';
  const commit = dict.home.commit as {
    title: string;
    subtitle: string;
  };
  const metrics = [
    {kpi: kpis.foundersParticipated, label: dict.common.metrics.foundersParticipated},
    {kpi: kpis.cohortRetreats, label: dict.common.metrics.cohortRetreats},
    {kpi: kpis.founderNps, label: dict.common.metrics.founderNps},
    {kpi: kpis.founderReferralRate, label: dict.common.metrics.founderReferralRate},
    {kpi: kpis.repeatFounders, label: dict.common.metrics.repeatFounders},
    {kpi: kpis.repeatFoundersWithExit, label: dict.common.metrics.repeatFoundersWithExit},
    {kpi: kpis.numberCompaniesRaised, label: dict.common.metrics.numberCompaniesRaised},
    {kpi: kpis.raisedInTotal, label: dict.common.metrics.raisedInTotal},
    {kpi: kpis.averageIndustryExperience, label: dict.common.metrics.averageIndustryExperience}
  ];
  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden" id="top">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl"/>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl"/>
          </div>
          <Container className="py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow">
                  {dict.home.hero.eyebrow}
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  {dict.home.hero.title_prefix}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                    {dict.home.hero.title_highlight}
                  </span>
                  {dict.home.hero.title_suffix}
                </h1>
                <p className="mt-4 text-neutral-300 max-w-xl">
                  {dict.home.hero.sub}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryCTA href={`${prefix}/invest`}>
                    {dict.common.cta.invest}
                  </PrimaryCTA>
                  <SecondaryCTA
                    href="https://meetings-na2.hubspot.com/inception/fund1-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.common.cta.schedule}
                  </SecondaryCTA>
                  <SecondaryCTA href={`${prefix}/faq`}>
                    {dict.common.nav.faq}
                  </SecondaryCTA>
                </div>
                <StatsRow labels={dict.common.metrics}/>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-neutral-900 relative">
                  <Image src="/JohnJumpstarter.jpg" alt="'Now Is The Time To Build' Presentation" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-2xl bg-white/5 backdrop-blur px-4 py-3 ring-1 ring-white/10 text-xs">
                    {dict.home.edge.title}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* THE OPPORTUNITY */}
        <section className="py-16 md:py-24 border-t border-white/5" id="opportunity">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="eyebrow justify-center">{opportunity.eyebrow}</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">{opportunity.title}</h2>
              <p className="mt-3 text-xl text-neutral-300">{opportunity.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {opportunity.cards.map((card, index) => (
                <Card key={card.title ?? index}>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-lg font-bold text-brand-400 mb-3">{card.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">{card.body}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="max-w-4xl mx-auto">
              <div className="p-8">
                <blockquote className="text-lg text-neutral-200 italic leading-relaxed mb-6">
                  &ldquo;{opportunity.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                    <Image
                      src="/team/andy-chou.jpg"
                      alt={opportunity.testimonial.imageAlt}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{opportunity.testimonial.author}</div>
                    <div className="text-sm text-neutral-300 mt-1">{opportunity.testimonial.role}</div>
                    <div className="text-sm text-neutral-400 mt-1">{opportunity.testimonial.background}</div>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </section>

        {/* OUR EDGE */}
        <section className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden" id="edge">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl"/>
          </div>
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="eyebrow justify-center">{edge.eyebrow ?? 'Our Edge'}</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">{edge.heading}</h2>
              {edge.subtitle && <p className="mt-3 text-xl text-neutral-300">{edge.subtitle}</p>}
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6 text-neutral-300 leading-relaxed">
                {edge.bullets.map((bullet, index) => (
                  <div key={bullet.title || index}>
                    {bullet.title && <h3 className="text-lg font-bold text-brand-400 mb-3">{bullet.title}</h3>}
                    <p dangerouslySetInnerHTML={{ __html: bullet.body.replace(/\n/g, '<br/>') }} />
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((m, i)=> (
                  <Card key={i}>
                    <div className="p-4">
                      <div className="text-3xl font-extrabold text-brand-400 tracking-tight">{m.kpi}</div>
                      <div className="mt-2 text-neutral-300 text-sm">{capitalizeLabel(m.label)}</div>
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
                <SectionTitle eyebrow={thesis.eyebrow} title={thesis.title}/>
                <ul className="space-y-3 text-neutral-300">
                  {thesis.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-400"></span>
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex gap-3">
                  <PrimaryCTA href={`${prefix}/invest`}>{thesis.ctaPrimary}</PrimaryCTA>
                  <SecondaryCTA href={`${prefix}/thesis`}>{thesis.ctaSecondary}</SecondaryCTA>
                </div>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10 relative">
                <Image src="/20240625-DSCF5201.jpg" alt="Inception retreat" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </Container>
        </section>

        {/* PORTFOLIO PREVIEW */}
        <section className="py-16 md:py-24 border-t border-white/5" id="portfolio">
          <Container>
            <div className="text-center max-w-4xl mx-auto mb-12">
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
                        <div className="text-sm font-semibold text-brand-400">Andy Chou</div>
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
                        <div className="text-sm font-semibold text-brand-400">Josh Payne</div>
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
                        <div className="text-sm font-semibold text-brand-400">Elad Ferber &amp; Jan Jannick</div>
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
                      <img src="/logos/mem0.png" alt="mem0 logo" className="h-full w-full object-contain"/>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="text-lg font-bold text-white">mem0</div>
                        <div className="text-sm text-neutral-400 mt-1">Cross-platform memory for LLMs</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-brand-400">Taranjeet Singh &amp; Deshraj Yadav</div>
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
                        <div className="text-sm font-semibold text-brand-400">Kelly Peng</div>
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
                        <div className="text-sm font-semibold text-brand-400">Brandon White &amp; Alex Beatson</div>
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
              <SecondaryCTA href={`${prefix}/portfolio`}>View Full Portfolio</SecondaryCTA>
            </div>
          </Container>
        </section>

        {/* COMMIT STRIP */}
        <section className="py-10 border-t border-white/5 bg-gradient-to-r from-brand-500/15 to-brand-800/15">
          <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">{commit.title}</div>
              <div className="text-neutral-300 text-sm whitespace-pre-line">{commit.subtitle}</div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <PrimaryCTA href={`${prefix}/invest`}>{dict.common.cta.invest}</PrimaryCTA>
              <SecondaryCTA
                href="https://meetings-na2.hubspot.com/inception/fund1-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.common.cta.schedule}
              </SecondaryCTA>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
