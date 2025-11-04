import Footer from '@/components/Footer'
import { Container, PrimaryCTA, SecondaryCTA } from '@/components/Blocks'
import { Award, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AdvisorsSection from '@/components/AdvisorsSection'
import kpis from '@/data/kpis.json' assert { type: 'json' }
import { getDictionary } from '@/lib/i18n'

const SUPPORTED_LOCALES = ['en', 'ja'] as const

type Locale = typeof SUPPORTED_LOCALES[number]

type ListSection = {
  type: 'list'
  title: string
  items: string[]
}

type TextSection = {
  type: 'text'
  title?: string
  body: string
}

type Person = {
  image: { src: string; alt: string }
  name: string
  title: string
  intro: string
  sections: Array<ListSection | TextSection>
  contact: {
    email: string
    phone?: { href: string; label: string }
    linkedin?: string
  }
}

const highlightIconClass = 'h-5 w-5 text-brand-400'
const contactLinkClass = 'flex items-center gap-2 text-neutral-300 hover:text-white transition-colors'

type ContactProps = {
  email: string
  phone?: { href: string; label: string }
  linkedin?: string
  linkedinLabel?: string
}

function ContactLinks({ email, phone, linkedin, linkedinLabel }: ContactProps) {
  return (
    <div className="space-y-3">
      <a href={`mailto:${email}`} className={contactLinkClass}>
        <Mail className="h-4 w-4" />
        {email}
      </a>
      {phone && (
        <a href={phone.href} className={contactLinkClass}>
          <Phone className="h-4 w-4" />
          {phone.label}
        </a>
      )}
      {linkedin && (
        <Link href={linkedin} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
          <Linkedin className="h-4 w-4" />
          {linkedinLabel ?? 'LinkedIn Profile'}
        </Link>
      )}
    </div>
  )
}

type HighlightProps = {
  title: string
  items: string[]
}

function Highlight({ title, items }: HighlightProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
        <Award className={highlightIconClass} />
        {title}
      </h3>
      <ul className="space-y-2 list-disc pl-5 text-neutral-300">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    </div>
  )
}

function isListSection(section: ListSection | TextSection): section is ListSection {
  return section.type === 'list'
}

export default async function TeamPage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  const currentLocale: Locale = SUPPORTED_LOCALES.includes(locale) ? locale : 'en'
  const dict = await getDictionary(currentLocale, 'team', 'common')
  const team = dict.team
  const metrics = dict.common?.metrics ?? {}

  const replacements: Record<string, string> = {
    foundersParticipated: kpis.foundersParticipated,
    repeatFounders: kpis.repeatFounders,
    repeatFoundersWithExit: kpis.repeatFoundersWithExit,
    numberCompaniesRaised: kpis.numberCompaniesRaised,
    companiesTotalRaised: kpis.companiesTotalRaised,
    averageIndustryExperience: kpis.averageIndustryExperience,
    founderNps: kpis.founderNps,
    founderReferralRate: kpis.founderReferralRate
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
    return `/${currentLocale}${href}`
  }

  const linkedinLabel = team.labels?.linkedin ?? 'LinkedIn Profile'

  const john = team.people.john as Person
  const mike = team.people.mike as Person
  const cta = team.cta as {
    title: string
    subtitle: string
    primary: { label: string; href: string; newTab?: boolean }
    secondary: { label: string; href: string; newTab?: boolean }
  }

  const renderSections = (sections: Array<ListSection | TextSection>) =>
    sections.map((section, index) =>
      isListSection(section) ? (
        <Highlight
          key={`${section.title}-${index}`}
          title={section.title}
          items={section.items.map((item) => formatRichText(item).__html)}
        />
      ) : (
        <div key={`${section.title ?? 'text'}-${index}`}>
          {section.title && (
            <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
          )}
          <p className="leading-relaxed" dangerouslySetInnerHTML={formatRichText(section.body)} />
        </div>
      )
    )

  return (
    <>
      <main>
        <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="eyebrow justify-center">{team.hero.eyebrow}</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                {team.hero.title}
              </h1>
              {team.hero.sub && (
                <p
                  className="text-xl text-neutral-300"
                  dangerouslySetInnerHTML={formatRichText(team.hero.sub)}
                />
              )}
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-28">
          <Container>
            <div className="max-w-6xl mx-auto space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                <div>
                  <div className="aspect-square rounded-2xl bg-white/5 ring-1 ring-white/10 mb-6 overflow-hidden relative">
                    <Image
                      src={john.image.src}
                      alt={john.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{john.name}</h2>
                  <p className="text-lg text-brand-400 mb-6">{john.title}</p>
                  <ContactLinks
                    email={john.contact.email}
                    phone={john.contact.phone}
                    linkedin={john.contact.linkedin}
                    linkedinLabel={linkedinLabel}
                  />
                </div>
                <div className="space-y-8 text-neutral-300">
                  <p
                    className="text-lg leading-relaxed"
                    dangerouslySetInnerHTML={formatRichText(john.intro)}
                  />
                  {renderSections(john.sections)}
                </div>
              </div>

              <div className="border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                <div>
                  <div className="aspect-square rounded-2xl bg-white/5 ring-1 ring-white/10 mb-6 overflow-hidden relative">
                    <Image
                      src={mike.image.src}
                      alt={mike.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{mike.name}</h2>
                  <p className="text-lg text-brand-400 mb-6">{mike.title}</p>
                  <ContactLinks
                    email={mike.contact.email}
                    phone={mike.contact.phone}
                    linkedin={mike.contact.linkedin}
                    linkedinLabel={linkedinLabel}
                  />
                </div>
                <div className="space-y-8 text-neutral-300">
                  <p
                    className="text-lg leading-relaxed"
                    dangerouslySetInnerHTML={formatRichText(mike.intro)}
                  />
                  {renderSections(mike.sections)}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <AdvisorsSection />

        <section className="py-10 border-t border-white/5 bg-gradient-to-r from-brand-500/15 to-brand-800/15">
          <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold" dangerouslySetInnerHTML={formatRichText(cta.title)} />
              <div className="text-neutral-300 text-sm" dangerouslySetInnerHTML={formatRichText(cta.subtitle)} />
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <PrimaryCTA
                href={resolveHref(cta.primary.href)}
                target={cta.primary.newTab ? '_blank' : undefined}
                rel={cta.primary.newTab ? 'noopener noreferrer' : undefined}
              >
                {cta.primary.label}
              </PrimaryCTA>
              <SecondaryCTA
                href={resolveHref(cta.secondary.href)}
                target={cta.secondary.newTab ? '_blank' : undefined}
                rel={cta.secondary.newTab ? 'noopener noreferrer' : undefined}
              >
                {cta.secondary.label}
              </SecondaryCTA>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
