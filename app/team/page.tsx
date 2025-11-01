import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container } from '@/components/Blocks'
import { Award, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import AdvisorsSection from '@/components/AdvisorsSection'

const highlightIconClass = 'h-5 w-5 text-teal-300'
const contactLinkClass = 'flex items-center gap-2 text-neutral-300 hover:text-white transition-colors'

function ContactLinks({
  email,
  phone,
  linkedin
}: {
  email: string
  phone?: { href: string; label: string }
  linkedin?: string
}) {
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
          LinkedIn Profile
        </Link>
      )}
    </div>
  )
}

function Highlight({
  title,
  items
}: {
  title: string
  items: string[]
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
        <Award className={highlightIconClass} />
        {title}
      </h3>
      <ul className="space-y-2 list-disc pl-5 text-neutral-300">
        {items.map(item => (
          <li key={item} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="eyebrow justify-center">Our Partners</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Meet the team
              </h1>
              <p className="text-xl text-neutral-300">
                Over five decades of combined Silicon Valley experience in AI, startups, and venture capital.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-28">
          <Container>
            <div className="max-w-6xl mx-auto space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                <div>
                  <div className="aspect-square rounded-2xl bg-white/5 ring-1 ring-white/10 mb-6" />
                  <h2 className="text-3xl font-bold text-white">John Whaley</h2>
                  <p className="text-lg text-teal-300 mb-6">Co-Founder &amp; Managing Partner</p>
                  <ContactLinks
                    email="john@inceptionstudio.org"
                    linkedin="https://linkedin.com/in/joewhaley"
                  />
                </div>
                <div className="space-y-8 text-neutral-300">
                  <p className="text-lg leading-relaxed">
                    John Whaley is a serial entrepreneur and renowned expert in compilers, cybersecurity, and machine learning.
                    He founded three cybersecurity companies—Moka5, UnifyID, and Redcoat AI—and created Inception Studio, a zero-equity
                    accelerator for elite AI founders.
                  </p>
                  <Highlight
                    title="Academic excellence"
                    items={[
                      'Stanford PhD, Arthur Samuel Best Doctoral Thesis Award',
                      'MIT B.S. and M.Eng. in EECS with a perfect 5.0 GPA',
                      'Adjunct Lecturer at Stanford (Compilers & Building with LLMs)',
                      'Named to Forbes AI 50',
                      'Best paper awards at PLDI, ISSTA, and OOPSLA',
                      'His work on compilers formed the basis of Chapter 12 of the "Dragon Book"'
                    ]}
                  />
                  <Highlight
                    title="Entrepreneurship"
                    items={[
                      'Redcoat AI: AI-powered cybersecurity',
                      'UnifyID: Behavioral biometrics authentication (acquired by Prove)',
                      'Moka5: Enterprise virtual desktop infrastructure (raised $45M+)',
                      'Multiple startup competition wins including SXSW, RSA, MIT AI Idol',
                      'Runner-up at TechCrunch Disrupt SF 2016'
                    ]}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Inception Studio impact</h3>
                    <p className="leading-relaxed">
                      In 2022, John launched Inception Studio to give experienced founders the focused, zero-equity support they need.
                      The community has now welcomed 219 founders who have started 40 companies and raised over $152M, with trust built
                      before any capital is deployed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
                <div>
                  <div className="aspect-square rounded-2xl bg-white/5 ring-1 ring-white/10 mb-6" />
                  <h2 className="text-3xl font-bold text-white">Mike Morris</h2>
                  <p className="text-lg text-teal-300 mb-6">Co-Founder &amp; Managing Partner</p>
                  <ContactLinks
                    email="mike@inceptionstudio.org"
                    linkedin="https://www.linkedin.com/in/mikemorris7/"
                  />
                </div>
                <div className="space-y-8 text-neutral-300">
                  <p className="text-lg leading-relaxed">
                    Mike Morris is a 28-year Silicon Valley veteran with deep expertise in building world-class technical teams.
                    Before co-founding Inception Studio and Redcoat AI, he helped grow multiple startups through acquisitions and an IPO.
                  </p>
                  <Highlight
                    title="Career highlights"
                    items={[
                      'VMware: one of the first 80 employees, scaling from startup to 20,000-employee public company',
                      'NetCitadel: founding technical leader (acquired by Proofpoint)',
                      'UnifyID: VP Engineering (acquired by Prove)',
                      'Led engineering organizations through multiple acquisitions',
                      'Nearly three decades of leadership in enterprise software and cybersecurity'
                    ]}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Expertise</h3>
                    <p className="leading-relaxed">
                      Mike brings battle-tested operational experience—knowing how to build, scale, and integrate technical teams.
                      His track record through multiple exits gives founders a clear blueprint for creating acquirable, defensible companies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Inception Studio</h3>
                    <p className="leading-relaxed">
                      As co-founder of Inception Studio, Mike shapes the retreat programs and community that attract elite technical founders.
                      He focuses on identifying teams with the depth, execution, and resilience to win in AI-native markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <AdvisorsSection />
      </main>
      <Footer />
    </>
  )
}
