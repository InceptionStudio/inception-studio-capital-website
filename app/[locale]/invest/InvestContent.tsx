'use client'

import { trackScheduleCall } from '@/lib/analytics'

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
          onClick={() => trackScheduleCall('invest_page')}
        >
          {meetingLinkText}
        </a>
      )
    }
    return <span key={`text-${index}`}>{token}</span>
  })
}

type InvestContentProps = {
  paragraphs: string[]
  email: string
  meetingLinkText: string
  meetingLinkUrl: string
}

export default function InvestContent({ paragraphs, email, meetingLinkText, meetingLinkUrl }: InvestContentProps) {
  return (
    <div className="space-y-6 text-neutral-300 leading-relaxed mb-8">
      {paragraphs.map((paragraph: string, idx: number) => (
        <p key={idx} className="leading-relaxed">
          {renderParagraph({
            text: paragraph,
            email,
            meetingLinkText,
            meetingLinkUrl,
          })}
        </p>
      ))}
    </div>
  )
}
