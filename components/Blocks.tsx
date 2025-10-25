import { ArrowRight, BarChart3, Rocket, ShieldCheck, Sparkles, Users2 } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export function Container({ children, className='' }: {children:ReactNode, className?:string}){
  return <div className={`container-max ${className}`}>{children}</div>
}
export function PrimaryCTA({ href, children, target, rel }: {href:string, children:ReactNode, target?:string, rel?:string}){
  return <Link href={href} target={target} rel={rel} className="btn btn-primary">{children} <ArrowRight className="h-4 w-4"/></Link>
}
export function SecondaryCTA({ href, children, target, rel }: {href:string, children:ReactNode, target?:string, rel?:string}){
  return <Link href={href} target={target} rel={rel} className="btn btn-secondary">{children}</Link>
}
export function Card({ children, className='' }: {children:ReactNode, className?:string}){
  return <div className={`card ${className}`}>{children}</div>
}
export function Eyebrow({ children }:{children:ReactNode}){
  return <p className="eyebrow"><Sparkles className="h-3.5 w-3.5"/> {children}</p>
}
export function SectionTitle({ title, subtitle, eyebrow }:{title:string, subtitle?:string, eyebrow?:string}){
  return (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="section-title mt-3">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-300 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
export function StatsRow(){
  const items = [
    {icon: Users2, label:'235 founders'},
    {icon: ShieldCheck, label:'82% repeat founders'},
    {icon: Rocket, label:'42 companies raised'},
    {icon: BarChart3, label:'$164M+ raised'}
  ]
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {items.map(({icon:Icon, label})=> (
        <div key={label} className="stat"><Icon className="h-4 w-4 text-teal-300"/> {label}</div>
      ))}
    </div>
  )
}
