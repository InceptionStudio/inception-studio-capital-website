import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, SectionTitle } from '@/components/Blocks'

export default function Page(){
  return (
    <>
      <Nav/>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle title="Privacy"/>
            <p className="mt-4 text-neutral-300 max-w-3xl">We respect your privacy. We only collect information you submit via forms on this site to evaluate your interest and allocations. We do not sell your data. Contact us if you would like your information removed.</p>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
