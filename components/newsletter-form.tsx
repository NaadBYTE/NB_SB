'use client'

import { useState } from 'react'
import { ArrowRight, Check, Mail } from 'lucide-react'

export function NewsletterForm() {
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <p role="status" className="mt-4 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm">
        <Check className="size-4 text-sun" aria-hidden="true" /> You&apos;re on the list. New music coming your way!
      </p>
    )
  }

  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
      }}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Email address</span>
          <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/50" aria-hidden="true" />
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="h-10 w-full rounded-lg border border-white/15 bg-white/5 pr-3 pl-9 text-xs text-white placeholder:text-white/45 focus:border-sun focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-pink px-5 text-xs font-semibold text-white transition-colors hover:bg-pink/90"
        >
          Subscribe <ArrowRight className="size-3.5" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-2 text-[10px] text-white/45">No spam ever. Unsubscribe anytime with 1 click.</p>
    </form>
  )
}
