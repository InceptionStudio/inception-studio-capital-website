import Footer from '@/components/Footer'
import { Container, SectionTitle } from '@/components/Blocks'
import { getDictionary } from '@/lib/i18n'
import HubspotForm from './HubspotForm'

const SUPPORTED_LOCALES = ['en', 'ja'] as const

type Locale = typeof SUPPORTED_LOCALES[number]

type ParagraphRendererArgs = {
  text: string
  email: string
  meetingLinkText: string
  meetingLinkUrl: string
}

function renderParagraph({ text, email, meetingLinkText, meetingLinkUrl }: ParagraphRendererArgs) {
  const tokens = text.split(/(\{\{email\}\}|\{\{link\}\})/g)
  return tokens.map((token, index) => {
    if (token === '{{email}}') {
      return (
        <a
          key={`email-${index}`}
          href={`mailto:${email}`}
          className="text-brand-400 hover:text-brand-300 underline"
        >
          {email}
        </a>
      )
    }
    if (token === '{{link}}') {
      return (
        <a
          key={`link-${index}`}
          href={meetingLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-400 hover:text-brand-300 underline"
        >
          {meetingLinkText}
        </a>
      )
    }
    return <span key={`text-${index}`}>{token}</span>
  })
}

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
              <div className="space-y-6 text-neutral-300 leading-relaxed mb-8">
                {body.paragraphs.map((paragraph: string, idx: number) => (
                  <p key={idx} className="leading-relaxed">
                    {renderParagraph({
                    text: paragraph,
                    email: body.email,
                    meetingLinkText: body.meetingLinkText,
                    meetingLinkUrl: body.meetingLinkUrl,
                  })}
                  </p>
                ))}
              </div>

              <HubspotForm />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
