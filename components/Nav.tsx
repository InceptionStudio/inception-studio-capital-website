'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/5">
      <div className="container-max">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-teal-400 to-cyan-500" />
            <span className="font-semibold tracking-tight">Inception Studio Capital</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/thesis" className="hover:text-white/90">Thesis</Link>
            <Link href="/portfolio" className="hover:text-white/90">Portfolio</Link>
            <Link href="/faq" className="hover:text-white/90">FAQ</Link>
            <Link href="/secure-allocation" className="btn btn-primary">Secure allocation</Link>
          </nav>
          <button className="md:hidden inline-flex items-center p-2" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-neutral-950/90">
          <div className="px-4 py-4 space-y-3">
            {[['Thesis','/thesis'],['Portfolio','/portfolio'],['FAQ','/faq']].map(([label, path])=> (
              <Link key={path} href={path} className="block py-1">{label}</Link>
            ))}
            <Link href="/secure-allocation" className="btn btn-primary w-full justify-center">Secure allocation</Link>
          </div>
        </div>
      )}
    </header>
  )
}
