import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, SectionTitle } from '@/components/Blocks'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Page(){
  const items = [
    {q:'What is Inception Studio Capital?', a:'We\'re a $20M venture fund backing experienced AI founders from day zero. We built Inception Studio, the most selective founder community in Silicon Valley, specifically to attract high-quality repeat entrepreneurs who avoid traditional accelerators. 235 founders have participated, 82% are repeat founders, and 32% have prior successful exits.'},
    {q:'What makes your access unique?', a:'Our zero‑equity retreats eliminate adverse selection—the best founders join because there\'s no downside. We build trust before investing, so we consistently secure early allocation with MFN and pro‑rata rights. We see and invest in companies at formation stage, often pre-product, getting privileged access other investors can\'t access.'},
    {q:'How do you deploy capital?', a:'First money in. Double down on the ones that take off. ~$100k starter checks in ~40 companies at incorporation (1–2% target ownership), then $500k–$1.5M core positions in ~12 companies with strong traction (2.5–10% ownership). We secure MFN and pro‑rata rights on every investment to follow our winners.'},
    {q:'Who are the General Partners?', a:'John Whaley: Stanford PhD (Best Thesis Award), MIT undergrad, Forbes AI 50, teaches at Stanford CS. Serial entrepreneur with 3 companies including UnifyID. Mike Morris: 28‑year Silicon Valley veteran with 3 acquisitions + 1 IPO, early at VMware. Combined 50+ years of experience building and scaling AI companies.'},
    {q:'What are the fund terms?', a:'Target size $20M, 10‑year term (with up to two 1‑year extensions), 2% management fee, 20% carry, $250K minimum commitment, 25% initial capital call. We focus exclusively on AI-native companies.'},
    {q:'What kind of founders do you attract?', a:'Experienced technical founders: 82% repeat entrepreneurs, 32% with prior successful exits, 15+ years average industry experience, 84 NPS score, 87% referred by other founders. These are founders who would never join traditional accelerators but value our zero-equity model for co-founder matching and focused environment.'},
    {q:'What portfolio results have you achieved?', a:'42 companies founded through Inception have raised $166M+ in follow-on funding. Notable outcomes include: Mem0 ($20M Series A), Ventrilo ($10M from a16z), Coframe ($9M from Khosla), and Alex AI (acquired by OpenAI in August 2025). Multiple companies achieving significant valuation increases.'},
    {q:'Why do experienced founders choose Inception?', a:'They face unique challenges: highly selective about co-founders, networks may have aged out, traditional accelerators don\'t make sense (7% for $125K?), and they need a deadline to get started. Our 3-day zero-equity retreats solve these problems while providing community, advisory, recruiting, and fundraising support.'},
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
              <details className="group py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between text-left">
                  <span className="font-medium">How can I learn more or invest?</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90"/>
                </summary>
                <p className="mt-3 text-neutral-300">
                  <Link href="/invest" className="text-teal-300 hover:text-teal-200 underline">Complete the investment form</Link> to confirm accredited investor status and review offering documents. Email{' '}
                  <a href="mailto:invest@inceptionstudio.capital" className="text-teal-300 hover:text-teal-200 underline">invest@inceptionstudio.capital</a> or{' '}
                  <a href="https://app-na2.hubspot.com/meetings/inception/fund1-info" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-200 underline">schedule a no-obligation call with a Partner</a>. We also host Demo Days where you can see founders and companies firsthand.
                </p>
              </details>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
