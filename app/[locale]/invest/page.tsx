import Footer from '@/components/Footer'
import { Container, SectionTitle } from '@/components/Blocks'
import { getDictionary } from '@/lib/i18n'
import HubspotForm from './HubspotForm'
import InvestContent from './InvestContent'

const SUPPORTED_LOCALES = ['en', 'ja'] as const

type Locale = typeof SUPPORTED_LOCALES[number]

export default async function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const currentLocale: Locale = SUPPORTED_LOCALES.includes(locale) ? locale : 'en'

  const dict = await getDictionary(currentLocale, 'invest')
  const body = dict.invest.body

  return (
    <>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow={dict.invest.hero.eyebrow} title={dict.invest.hero.title} />
            <div className="mt-8 max-w-3xl">
              <InvestContent
                paragraphs={body.paragraphs}
                email={body.email}
                meetingLinkText={body.meetingLinkText}
                meetingLinkUrl={body.meetingLinkUrl}
              />

              <HubspotForm />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
