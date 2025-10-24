'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Container, SectionTitle } from '@/components/Blocks'
import { useState } from 'react'

export default function Page(){
  const [state, setState] = useState<{loading:boolean; ok:boolean; error:string|null}>({loading:false, ok:false, error:null});
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    setState({loading:true, ok:false, error:null});
    try{
      const r = await fetch('/api/invest', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
      const js = await r.json();
      if(!r.ok || !js.ok) throw new Error(js.error || 'Request failed');
      setState({loading:false, ok:true, error:null});
      (e.target as HTMLFormElement).reset();
    }catch(err:any){
      setState({loading:false, ok:false, error: err.message || 'Error'});
    }
  }
  return (
    <>
      <Nav/>
      <main>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle eyebrow="Commit" title="Invest with us" subtitle="Tell us your target commitment and details. We'll confirm availability and next steps. Allocations are limited."/>
            <div className="card">
              <form className="p-6 grid md:grid-cols-2 gap-6" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm text-neutral-300">Full name</label>
                  <input required name="name" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2" placeholder="Alex Morgan"/>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300">Email</label>
                  <input required type="email" name="email" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2" placeholder="alex@example.com"/>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300">LinkedIn URL</label>
                  <input name="linkedin" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2" placeholder="https://www.linkedin.com/in/…"/>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300">Are you an accredited investor?</label>
                  <select required name="accredited" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2">
                    <option value="">Select…</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Investing via entity/fund</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300">Target commitment (USD)</label>
                  <input required name="commitment" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2" placeholder="$250,000"/>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300">Timing</label>
                  <select name="timing" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2">
                    <option>ASAP (this quarter)</option>
                    <option>Next quarter</option>
                    <option>Exploring / need a call</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-neutral-300">Notes</label>
                  <textarea name="notes" rows={4} className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2" placeholder="Any constraints, decision process, references, etc."/>
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-3">
                  <button disabled={state.loading} className="btn btn-primary disabled:opacity-60">{state.loading? 'Submitting…' : 'Submit request'}</button>
                  {state.ok && <span className="text-teal-300 text-sm">Thank you — we’ll confirm allocation shortly.</span>}
                  {state.error && <span className="text-red-300 text-sm">{state.error}</span>}
                </div>
              </form>
            </div>
            <div className="mt-4 text-sm text-neutral-400">This request is non‑binding and for indication of interest only. Any investment will be made solely pursuant to official fund documents.</div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
