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
      const r = await fetch('/api/interest', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
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
            <SectionTitle eyebrow="Stay in the loop" title="Register interest" subtitle="Share your details and we’ll reach out with allocation updates and materials."/>
            <div className="card">
              <form className="p-6 grid md:grid-cols-2 gap-6" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm text-neutral-300">Full name</label>
                  <input required name="name" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2"/>
                </div>
                <div>
                  <label className="block text-sm text-neutral-300">Email</label>
                  <input required type="email" name="email" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2"/>
                </div>
                <div className="md:col-span-2">
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
                <div className="md:col-span-2">
                  <label className="block text-sm text-neutral-300">How did you hear about us?</label>
                  <input name="source" className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2"/>
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-3">
                  <button disabled={state.loading} className="btn btn-primary disabled:opacity-60">{state.loading? 'Submitting…' : 'Submit'}</button>
                  {state.ok && <span className="text-teal-300 text-sm">Thanks — we’ll be in touch.</span>}
                  {state.error && <span className="text-red-300 text-sm">{state.error}</span>}
                </div>
              </form>
            </div>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  )
}
