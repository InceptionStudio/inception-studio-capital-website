import Footer from '@/components/Footer'
import { Container, PrimaryCTA, SectionTitle } from '@/components/Blocks'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import kpis from '@/data/kpis.json' assert { type: 'json' }
import { getDictionary } from '@/lib/i18n'

const SUPPORTED_LOCALES = ['en', 'ja'] as const

export default async function Page({
  params: { locale }
}: {
  params: { locale: typeof SUPPORTED_LOCALES[number] }
}) {
  const currentLocale = SUPPORTED_LOCALES.includes(locale) ? locale : 'en'
  const dict = await getDictionary(currentLocale, 'faq', 'common')
  const faq = dict.faq
  const metrics = dict.common?.metrics ?? {}

  const prefix = `/${currentLocale}`

  const replacements: Record<string, string> = {
    foundersParticipated: kpis.foundersParticipated,
    repeatFounders: kpis.repeatFounders,
    repeatFoundersWithExit: kpis.repeatFoundersWithExit,
    founderNps: kpis.founderNps,
    founderReferralRate: kpis.founderReferralRate,
    numberCompaniesRaised: kpis.numberCompaniesRaised,
    companiesTotalRaised: kpis.companiesTotalRaised,
    averageIndustryExperience: kpis.averageIndustryExperience
  }

  const replaceTokens = (input: string) =>
    input.replace(/{{(.*?)}}/g, (_, key) => replacements[key.trim()] ?? '')

  const formatRichText = (input: string) => ({
    __html: replaceTokens(input).replace(/\n/g, '<br/>')
  })

  const resolveHref = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return href
    }
    return `${prefix}${href}`
  }

  const renderCTA = () => {
    if (!faq.cta) return null
    const target = faq.cta.newTab ? '_blank' : undefined
    const rel = faq.cta.newTab ? 'noopener noreferrer' : undefined
    return (
      <PrimaryCTA href={resolveHref(faq.cta.href)} target={target} rel={rel}>
        {faq.cta.label}
      </PrimaryCTA>
    )
  }

  const renderClosingSegment = (segment: any, index: number) => {
    if (segment.type === 'text') {
      return (
        <span
          key={`closing-text-${index}`}
          dangerouslySetInnerHTML={formatRichText(segment.value)}
        />
      )
    }
    const link = faq.closing.links[segment.key]
    const href = resolveHref(link.href)
    const target = link.newTab ? '_blank' : undefined
    const rel = link.newTab ? 'noopener noreferrer' : undefined
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a key={`closing-link-${segment.key}-${index}`} href={href} target={target} rel={rel} className="text-teal-300 hover:text-teal-200 underline">
          {link.label}
        </a>
      )
    }
    return (
      <Link key={`closing-link-${segment.key}-${index}`} href={href} target={target} rel={rel} className="text-teal-300 hover:text-teal-200 underline">
        {link.label}
      </Link>
    )
  }

  return (
    <>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow={faq.hero.eyebrow} title={faq.hero.title} />
            <div className="mt-6 flex">
              {renderCTA()}
            </div>
            <div className="mt-6 divide-y divide-white/10">
              {faq.items.map((item: { q: string; a: string }, index: number) => (
                <details key={index} className="group py-4">
                  <summary className="cursor-pointer list-none flex items-center justify-between text-left">
                    <span className="font-medium">{replaceTokens(item.q)}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-neutral-300" dangerouslySetInnerHTML={formatRichText(item.a)} />
                </details>
              ))}
              <details className="group py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between text-left">
                  <span className="font-medium">{faq.closing.question}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-neutral-300">
                  {faq.closing.segments.map((segment: any, idx: number) => renderClosingSegment(segment, idx))}
                </p>
              </details>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
