import Footer from '@/components/Footer'
import { Container, SectionTitle } from '@/components/Blocks'

export default function Page(){
  return (
    <>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle title="Legal"/>
            <div className="mt-4 text-neutral-300 max-w-3xl space-y-3">
              <p>This site is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any offering will be made only pursuant to official offering documents, which include details about investment objectives, risks, fees and expenses.</p>
              <p>Venture investments involve substantial risk, including the possible loss of all invested capital. Past performance is not indicative of future results.</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
