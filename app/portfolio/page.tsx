import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, SectionTitle, Card } from '@/components/Blocks'
import Link from 'next/link'

export default function Page(){
  const companies = [
    {name:'Ventrilo', blurb:'Voice‑native collaboration. $10M from a16z after forming team & demo at Inception.', logo:'/logos/ventrilo.png', url:'https://ventrilo.ai'},
    {name:'mem0', blurb:'Cross-platform memory layer for LLMs. $20M Series A. 40K+ stars on GitHub.', logo:'/logos/mem0.svg', url:'https://mem0.ai'},
    {name:'TextClub', blurb:'In stealth. Founded by Deyan Vitanov: Stanford MBA, 4x founder (3 acquired), CMO at gaming unicorn Playco.'},
    {name:'Coframe', blurb:'AI‑driven UX optimization. $9M from Khosla Ventures.', logo:'/logos/coframe.jpg', url:'https://coframe.ai'},
    {name:'Scorecard', blurb:'AI-native vertical SaaS for performance analytics.', logo:'/logos/scorecard.png', url:'https://scorecard.io'},
    {name:'Hyperscale', blurb:'Scaling AI infrastructure for enterprise workloads.', logo:'/logos/hyperscale.png', url:'https://hsys.ai'},
    {name:'Axiom Bio', blurb:'Next-generation data platform built for AI.', logo:'/logos/axiom.png', url:'https://axi.om/'},
    {name:'ContextKey', blurb:'Intelligent context management for AI applications.', logo:'/logos/contextkey.png', url:'https://dafdef.com/'},
    {name:'Rmix', blurb:'First fully autonomous prescription vending machines. $4M pre-seed. 5 units in production.'},
    {name:'Synthpop', blurb:'AI-powered creative tools for music production.', logo:'/logos/synthpop.png', url:'https://synthpop.ai'},
    {name:'Glasp', blurb:'Social knowledge curation platform.', logo:'/logos/glasp.ico', url:'https://glasp.co'},
    {name:'Precognition Labs', blurb:'Predictive AI for enterprise decision-making.', logo:'/logos/precognition-labs.jpg', url:'https://www.precognitionlabs.ai/'},
    {name:'Greenflash', blurb:'Turning AI interactions into actionable product insights. Signed ClickUp as enterprise client.', logo:'/logos/greenflash.png', url:'https://greenflash.ai'},
    {name:'Octagon', blurb:'Multi-sided AI marketplace infrastructure.', logo:'/logos/octagon.png', url:'https://www.octagonai.co/'},
    {name:'Sela', blurb:'Vertical AI for regulated industries.', logo:'/logos/sela.svg', url:'https://trysela.com/'},
    {name:'Lightning Rod', blurb:'Real-time AI threat detection and response.', logo:'/logos/lightning-rod.png', url:'https://www.lightningrod.ai/'},
    {name:'Skywalk', blurb:'AI copilot for complex enterprise workflows.', logo:'/logos/skywalk.png', url:'https://www.skywalk.ai/'},
    {name:'First Intelligence', blurb:'Perplexity for the real world. Multimodal AI that can see, understand, and generate. Available as CAPI AI.', logo:'/logos/first-intelligence.png', url:'https://first-intelligence.com'},
    {name:'Omi', blurb:'AI-native consumer application platform.', logo:'/logos/omi.png', url:'https://www.omi.me/'},
    {name:'GuestOS', blurb:'Voice AI for hospitality. 10 customers in production. Recruited elite Inception talent.', logo:'/logos/guestos.ico', url:'https://guestos.ai'},
    {name:'PrismaX', blurb:'AI-powered data transformation and analytics.', logo:'/logos/prismax.svg', url:'https://prismax.ai/'},
    {name:'April', blurb:'Conversational AI for enterprise support.', logo:'/logos/april.jpg', url:'https://tryapril.com/'},
    {name:'AIx2', blurb:'Dual-model AI architecture for enhanced performance.', logo:'/logos/aix2.png', url:'https://aix2.ai/'},
    {name:'Emerald', blurb:'AI for sustainable energy optimization.', logo:'/logos/emerald.png', url:'https://emeraldinno.com/'},
    {name:'Dryft', blurb:'Autonomous AI agents for logistics.', logo:'/logos/dryft.ico', url:'https://godryft.com/'},
    {name:'Hexus', blurb:'AI-native collaboration workspace.', logo:'/logos/hexus.svg', url:'https://www.hexus.ai/'},
    {name:'Alex AI', blurb:'Agentic research assistant. Acquired by OpenAI (Aug 2025).', logo:'/logos/alex-ai.png', url:'https://www.alexcodes.app/'},
  ]
  return (
    <>
      <Nav/>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow="Portfolio" title="Inception companies" subtitle="Selective, high‑conviction investments alongside top‑tier firms."/>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company)=> {
                const content = (
                  <div className="p-6 flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center p-1">
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
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
            <div className="mt-10 text-base text-neutral-200">
              These are just some of the 42 companies founded through Inception that have already raised $166M+ in follow-on funding.
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
