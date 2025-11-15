import Footer from '@/components/Footer'
import { Container, SectionTitle, Card } from '@/components/Blocks'
import Link from 'next/link'
import Image from 'next/image'
import kpis from '@/data/kpis.json' assert { type: 'json' }

type Locale = 'en' | 'ja'

export default function Page({
  params: { locale }
}: {
  params: { locale: Locale }
}){
  const prefix = locale ? `/${locale}` : ''
  const companies = [
    {name:'Ventrilo', blurb:'AI-powered writing assistant. $10M from a16z after forming team & demo at Inception.', logo:'/logos/ventrilo.png', url:'https://ventrilo.ai'},
    {name:'mem0', blurb:'Cross-platform memory layer for LLMs. $20M Series A. 40K+ stars on GitHub.', logo:'/logos/mem0.png', url:'https://mem0.ai'},
    {name:'TextClub', blurb:'In stealth. Founded by Deyan Vitanov: Stanford MBA, 4x founder (3 acquired), CMO at gaming unicorn Playco.'},
    {name:'Coframe', blurb:'AI‑driven UX optimization. $9M from Khosla Ventures.', logo:'/logos/coframe.jpg', url:'https://coframe.ai'},
    {name:'Scorecard', blurb:'Evaluate, optimize, and ship enterprise AI agents.', logo:'/logos/scorecard.png', url:'https://scorecard.io'},
    {name:'Hyperscale', blurb:'AI automation for trucking carriers.', logo:'/logos/hyperscale.png', url:'https://hsys.ai'},
    {name:'Axiom Bio', blurb:'Replacing lab and animal testing with AI.', logo:'/logos/axiom.png', url:'https://axi.om/'},
    {name:'ContextKey', blurb:'A small device to let AI control your phone.', logo:'/logos/contextkey.png', url:'https://dafdef.com/'},
    {name:'Rmix', blurb:'First fully autonomous prescription vending machines. $4M pre-seed. 5 units in production.'},
    {name:'Synthpop', blurb:'AI to streamline healthcare workflows.', logo:'/logos/synthpop.png', url:'https://synthpop.ai'},
    {name:'Glasp', blurb:'Social knowledge curation platform.', logo:'/logos/glasp.ico', url:'https://glasp.co'},
    {name:'Precognition Labs', blurb:'AI agents for trust, safety, fraud, risk, and compliance teams.', logo:'/logos/precognition-labs.jpg', url:'https://www.precognitionlabs.ai/'},
    {name:'Greenflash', blurb:'Turning AI interactions into actionable product insights. Signed ClickUp as enterprise client.', logo:'/logos/greenflash.png', url:'https://greenflash.ai'},
    {name:'Octagon', blurb:'Copilot for financial analysts.', logo:'/logos/octagon.png', url:'https://www.octagonai.co/'},
    {name:'Sela', blurb:'AI voice sales agents that beat human performance.', logo:'/logos/sela.svg', url:'https://trysela.com/'},
    {name:'Lightning Rod', blurb:'Accurate predictive models with AI.', logo:'/logos/lightning-rod.png', url:'https://www.lightningrod.ai/'},
    {name:'Subtle', blurb:'Voice that works everywhere.', logo:'/logos/subtle.svg', url:'https://subtle.co/'},
    {name:'First Intelligence', blurb:'Perplexity for the real world. Multimodal AI that can see, understand, and generate. Available as CAPI AI.', logo:'/logos/first-intelligence.png', url:'https://first-intelligence.com'},
    {name:'Omi', blurb:'AI wearable “second brain” that turns conversations into insights and memory you can search, summarize, and share.', logo:'/logos/omi.png', url:'https://www.omi.me/'},
    {name:'GuestOS', blurb:'Voice AI for hospitality. 10 customers in production.', logo:'/logos/guestos.ico', url:'https://guestos.ai'},
    {name:'PrismaX', blurb:'Building the bridge between robotics and mainstream adoption.', logo:'/logos/prismax.svg', url:'https://prismax.ai/'},
    {name:'April', blurb:'Voice AI executive assistant.', logo:'/logos/april.jpg', url:'https://tryapril.com/'},
    {name:'AIx2', blurb:'AI for fundraising and investing.', logo:'/logos/aix2.png', url:'https://aix2.ai/', logoBg:'bg-white/60'},
    {name:'Emerald', blurb:'Remote health monitoring without wearables.', logo:'/logos/emerald.png', url:'https://emeraldinno.com/', logoBg:'bg-white/60'},
    {name:'Dryft', blurb:'AI agents for the physical world.', logo:'/logos/dryft.ico', url:'https://godryft.com/'},
    {name:'Hexus', blurb:'Create stunning demos, videos, and guides with AI.', logo:'/logos/hexus.svg', url:'https://www.hexus.ai/'},
    {name:'Alex AI', blurb:'AI agent for Xcode. Acquired by OpenAI (Aug 2025).', logo:'/logos/alex-ai.png', url:'https://www.alexcodes.app/'},
  ]
  return (
    <>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow="Portfolio" title="Inception companies" subtitle={`These are just some of the ${kpis.numberCompaniesRaised} companies founded through Inception that have already raised ${kpis.companiesTotalRaised}+ in follow-on funding.`}/>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company)=> {
                const content = (
                  <div className="p-6 flex gap-4">
                    <div className={`h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl ${company.logoBg ?? 'bg-white/10'} ring-1 ring-white/10 flex items-center justify-center p-1`}>
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span className="text-lg font-semibold text-white/80">
                          {company.name[0]}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{company.name}</div>
                      <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{company.blurb}</p>
                    </div>
                  </div>
                )
                return (
                  <Card key={company.name}>
                    {company.url ? (
                      <Link
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </Card>
                )
              })}
            </div>
            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Image
                  src="/investor-logos.svg"
                  alt="Logos of venture funds that have invested alongside Inception"
                  width={1024}
                  height={256}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                <p className="text-base text-neutral-100">
                  Want to invest in these companies and more?
                </p>
                <Link href={`${prefix}/invest`} className="btn btn-primary">
                  Invest with us
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
