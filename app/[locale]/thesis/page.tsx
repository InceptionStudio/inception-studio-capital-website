import Footer from '@/components/Footer'
import { Container, SectionTitle, Card, PrimaryCTA } from '@/components/Blocks'
import { getDictionary } from '@/lib/i18n'

const localeOrder = ['en', 'ja'] as const

export default async function Page({
  params: { locale }
}: {
  params: { locale: typeof localeOrder[number] }
}) {
  const dict = await getDictionary(locale, 'thesis')
  const narrativeParagraphs: string[] = dict.thesis.narrative.paragraphs
  const lpCard = dict.thesis.lpCard

  return (
    <>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow={dict.thesis.hero.eyebrow} title={dict.thesis.hero.title}/>
            <div className="mt-6 grid lg:grid-cols-2 gap-10">
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                {narrativeParagraphs.map((paragraph, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
              <Card>
                <div className="p-6">
                  <div className="font-semibold">{lpCard.title}</div>
                  <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-2">
                    {lpCard.points.map((point: string) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <PrimaryCTA href={`/${locale}/invest`}>{lpCard.cta}</PrimaryCTA>
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
