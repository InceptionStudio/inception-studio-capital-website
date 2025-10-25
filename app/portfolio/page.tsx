import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, SectionTitle, Card } from '@/components/Blocks'

export default function Page(){
  const companies = [
    {name:'Ventrilo', blurb:'Voice‑native collaboration. $10M from a16z after forming team & demo at Inception.'},
    {name:'Mem0', blurb:'Cross-platform memory layer for LLMs. $20M Series A. 40K+ stars on GitHub.'},
    {name:'TextClub', blurb:'In stealth. Founded by Deyan Vitanov: Stanford MBA, 4x founder (3 acquired), CMO at gaming unicorn Playco.'},
    {name:'Coframe', blurb:'AI‑driven UX optimization. $9M from Khosla Ventures.'},
    {name:'Scorecard', blurb:'AI-native vertical SaaS for performance analytics.'},
    {name:'Hyperscale', blurb:'Scaling AI infrastructure for enterprise workloads.'},
    {name:'Axiom', blurb:'Next-generation data platform built for AI.'},
    {name:'ContextKey', blurb:'Intelligent context management for AI applications.'},
    {name:'Rmix', blurb:'First fully autonomous prescription vending machines. $4M pre-seed. 5 units in production.'},
    {name:'Synthpop', blurb:'AI-powered creative tools for music production.'},
    {name:'Glasp', blurb:'Social knowledge curation platform.'},
    {name:'Precognition Labs', blurb:'Predictive AI for enterprise decision-making.'},
    {name:'Greenflash', blurb:'Turning AI interactions into actionable product insights. Signed ClickUp as enterprise client.'},
    {name:'Octagon', blurb:'Multi-sided AI marketplace infrastructure.'},
    {name:'Sela', blurb:'Vertical AI for regulated industries.'},
    {name:'Lightning Rod', blurb:'Real-time AI threat detection and response.'},
    {name:'Skywalk', blurb:'AI copilot for complex enterprise workflows.'},
    {name:'First Intelligence', blurb:'Perplexity for the real world. Multimodal AI that can see, understand, and generate. Available as CAPI AI.'},
    {name:'Omi', blurb:'AI-native consumer application platform.'},
    {name:'GuestOS', blurb:'Voice AI for hospitality. 10 customers in production. Recruited elite Inception talent.'},
    {name:'PrismaX', blurb:'AI-powered data transformation and analytics.'},
    {name:'April', blurb:'Conversational AI for enterprise support.'},
    {name:'AIx2', blurb:'Dual-model AI architecture for enhanced performance.'},
    {name:'Emerald', blurb:'AI for sustainable energy optimization.'},
    {name:'Dryft', blurb:'Autonomous AI agents for logistics.'},
    {name:'Hexus', blurb:'AI-native collaboration workspace.'},
    {name:'Alex AI', blurb:'Agentic research assistant. Acquired by OpenAI (Aug 2025).'},
  ]
  return (
    <>
      <Nav/>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow="Portfolio" title="Inception companies" subtitle="Selective, high‑conviction investments alongside top‑tier firms."/>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((c)=> (
                <Card key={c.name}><div className="p-6"><div className="font-semibold">{c.name}</div><p className="mt-2 text-neutral-300 text-sm">{c.blurb}</p></div></Card>
              ))}
            </div>
            <div className="mt-8 text-sm text-neutral-400">42 companies founded through Inception have raised $166M+ in follow-on funding.</div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
