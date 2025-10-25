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
            <SectionTitle eyebrow="Get Started" title="Invest with us"/>
            <div className="mt-8 max-w-3xl">
              <div className="card p-8 space-y-6 text-neutral-300 leading-relaxed">
                <p>Thank you for your interest in the Inception Studio Capital Fund.</p>

                <p>The first step to getting started is to complete the form to confirm that you&apos;re an accredited investor.</p>

                <p>On the next page, you can review the fund&apos;s offering documents and finish the investor application if you&apos;re ready to move forward.</p>

                <p>If you have any questions about this process please contact us at{' '}
                  <a href="mailto:invest@inceptionstudio.capital" className="text-teal-300 hover:text-teal-200 underline">
                    invest@inceptionstudio.capital
                  </a>{' '}
                  or schedule a no-obligation appointment with a Partner{' '}
                  <a
                    href="https://app-na2.hubspot.com/meetings/inception/fund1-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-teal-200 underline"
                  >
                    here
                  </a>.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
