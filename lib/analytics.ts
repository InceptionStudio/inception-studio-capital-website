// Google Analytics event tracking utilities

export function trackEvent(
  eventName: string,
  eventParams?: {
    event_category?: string
    event_label?: string
    [key: string]: any
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams)
  }
}

export function trackScheduleCall(location: 'hero' | 'footer' | 'invest_page') {
  trackEvent('schedule_call_click', {
    event_category: 'engagement',
    event_label: location,
  })
}
