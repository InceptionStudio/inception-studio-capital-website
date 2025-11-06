'use client'

import { SecondaryCTA } from './Blocks'
import { trackScheduleCall } from '@/lib/analytics'

type ScheduleCallCTAProps = {
  children: React.ReactNode
  location: 'hero' | 'footer' | 'invest_page'
}

export default function ScheduleCallCTA({ children, location }: ScheduleCallCTAProps) {
  const handleClick = () => {
    trackScheduleCall(location)
  }

  return (
    <SecondaryCTA
      href="https://meetings-na2.hubspot.com/inception/fund1-info"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </SecondaryCTA>
  )
}
