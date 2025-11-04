'use client'
import { useState } from 'react'
import Link from 'next/link'
import LangSwitch from './LangSwitch'
import type { Locale } from '@/app/[locale]/layout'

type NavLabels = {
  thesis: string
  portfolio: string
  team: string
  faq: string
  invest: string
}

const defaultLabels: NavLabels = {
  thesis: 'Thesis',
  portfolio: 'Portfolio',
  team: 'Team',
  faq: 'FAQ',
  invest: 'Invest with us'
}

export default function Nav({ locale, labels = defaultLabels }: { locale?: Locale; labels?: NavLabels }){
  const [open, setOpen] = useState(false)
  const prefix = locale ? `/${locale}` : ''
  const navLinks = [
    { label: labels.thesis, href: `${prefix}/thesis` },
    { label: labels.portfolio, href: `${prefix}/portfolio` },
    { label: labels.team, href: `${prefix}/team` },
    { label: labels.faq, href: `${prefix}/faq` }
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/5">
      <div className="container-max">
        <div className="flex h-16 items-center justify-between">
          <Link href={`${prefix}/`} className="flex items-center gap-3">
            <img src="/inception-logo.png" alt="Inception Studio Capital" className="h-8 w-auto" />
            <span className="font-semibold tracking-tight">Inception Studio Capital</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map(({ href, label })=> (
              <Link key={href} href={href} className="hover:text-white/90">{label}</Link>
            ))}
            {locale && <LangSwitch locale={locale} />}
            <Link href={`${prefix}/invest`} className="btn btn-primary">{labels.invest}</Link>
          </nav>
          <button className="md:hidden inline-flex items-center p-2" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-neutral-950/90">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(({ label, href })=> (
              <Link key={href} href={href} className="block py-1">{label}</Link>
            ))}
            {locale && (
              <div className="py-1">
                <LangSwitch locale={locale} />
              </div>
            )}
            <Link href={`${prefix}/invest`} className="btn btn-primary w-full justify-center">{labels.invest}</Link>
          </div>
        </div>
      )}
    </header>
  )
}
