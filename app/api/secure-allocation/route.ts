import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest){
  const data = await req.json().catch(()=>null) as any
  if(!data || !data.email || !data.name || !data.commitment){
    return NextResponse.json({ ok:false, error: 'Missing required fields' }, { status: 400 })
  }
  const payload = { type:'secure_allocation', at: new Date().toISOString(), ...data }
  const url = process.env.FORWARD_WEBHOOK_URL
  if(url){
    try{ await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)}) }catch(e){}
  }
  return NextResponse.json({ ok:true })
}
