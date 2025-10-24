import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, SectionTitle, Card } from '@/components/Blocks'

export default function Page(){
  const companies = [
    {name:'Ventrilo', blurb:'Voice‑native collaboration. $10M from a16z at $50M post‑formation.'},
    {name:'Coframe', blurb:'AI‑driven UX optimization. $9M Khosla Ventures.'},
    {name:'Alex AI', blurb:'Agentic research assistant. Acquired by OpenAI (Aug 2025).'},
    {name:'GuestOS', blurb:'AI frontdesk for hospitality.'},
    {name:'First Intelligence', blurb:'AI for enterprise decisions.'},
    {name:'TextClub', blurb:'RCS gaming/text apps.'},
  ]
  return (
    <>
      <Nav/>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow="Portfolio" title="A few highlights" subtitle="Selective, high‑conviction investments alongside top‑tier firms."/>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {companies.map((c)=> (
                <Card key={c.name}><div className="p-6"><div className="font-semibold">{c.name}</div><p className="mt-2 text-neutral-300 text-sm">{c.blurb}</p></div></Card>
              ))}
            </div>
            <div className="mt-8 text-sm text-neutral-400">Logos and additional company details available upon request.</div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
