'use client'

import { useEffect } from 'react'

const HUBSPOT_SCRIPT_SRC = '//js-na2.hsforms.net/forms/embed/v2.js'
const PORTAL_ID = '23586544'
const FORM_ID = '6535888b-e243-4eec-9b7d-d464650ad08c'

export default function HubspotForm() {
  useEffect(() => {
    const createForm = () => {
      const win = window as typeof window & { hbspt?: any }
      if (!win.hbspt) return
      const container = document.getElementById('hubspot-form')
      if (container) {
        container.innerHTML = ''
      }
      win.hbspt.forms.create({
        portalId: PORTAL_ID,
        formId: FORM_ID,
        region: 'na2',
        target: '#hubspot-form',
        onFormSubmit: function() {
          // Track form submission in Google Analytics
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'form_submit', {
              event_category: 'engagement',
              event_label: 'investor_application',
              form_id: FORM_ID,
            })
          }
        },
      })
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${HUBSPOT_SCRIPT_SRC}"]`)
    if (existingScript) {
      if (typeof window !== 'undefined') {
        const win = window as typeof window & { hbspt?: any }
        if (win.hbspt) {
          createForm()
        } else {
          existingScript.addEventListener('load', createForm)
          return () => {
            existingScript.removeEventListener('load', createForm)
          }
        }
      }
      return
    }

    const script = document.createElement('script')
    script.src = HUBSPOT_SCRIPT_SRC
    script.async = true
    script.addEventListener('load', createForm)
    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', createForm)
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="card p-8">
      <div id="hubspot-form"></div>
    </div>
  )
}

