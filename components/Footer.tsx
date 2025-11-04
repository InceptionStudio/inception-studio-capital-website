'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import enCommon from '@/locales/en/common.json' assert { type: 'json' }
import jaCommon from '@/locales/ja/common.json' assert { type: 'json' }

const FOOTER_DICTIONARIES: Record<string, typeof enCommon.footer> = {
  en: enCommon.footer,
  ja: jaCommon.footer,
}

export default function Footer(){
  const params = useParams()
  const localeParam = params?.locale
  const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam
  const labels = FOOTER_DICTIONARIES[locale ?? ''] ?? enCommon.footer
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10 text-sm">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-neutral-400">© {currentYear} {labels.firmName}</div>
        <div className="flex items-center gap-6 text-neutral-300">
          <a className="hover:text-white/90" href="https://www.inceptionstudio.org" target="_blank" rel="noreferrer">
            {labels.nonprofit}
          </a>
          <Link className="hover:text-white/90" href="/privacy">{labels.privacy}</Link>
          <Link className="hover:text-white/90" href="/legal">{labels.legal}</Link>
          <a className="hover:text-white/90" href="mailto:invest@inceptionstudio.org">{labels.email}</a>
        </div>
      </div>
      <div className="container-max mt-6 text-xs text-neutral-500 whitespace-pre-line">
        {labels.disclaimer}
      </div>
    </footer>
  )
}
