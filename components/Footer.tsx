import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="border-t border-white/5 py-10 text-sm">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-neutral-400">© {new Date().getFullYear()} Inception Studio Capital</div>
        <div className="flex items-center gap-6 text-neutral-300">
          <a className="hover:text-white/90" href="https://www.inceptionstudio.org" target="_blank" rel="noreferrer">Inception Studio (nonprofit)</a>
          <Link className="hover:text-white/90" href="/privacy">Privacy</Link>
          <Link className="hover:text-white/90" href="/legal">Legal</Link>
          <a className="hover:text-white/90" href="mailto:invest@inceptionstudio.org">Email</a>
        </div>
      </div>
      <div className="container-max mt-6 text-xs text-neutral-500">
        This site is for information only and not an offer to sell or solicit an offer to buy any security. Any offering is made only pursuant to official documents. Venture investing involves risk, including the possible loss of principal. Past performance is not indicative of future results.
      </div>
    </footer>
  )
}
