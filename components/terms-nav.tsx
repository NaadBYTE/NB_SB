'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function TermsNav({ sections }: { sections: { id: string; title: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id)
  return (
    <nav aria-label="Terms sections" className="md:sticky md:top-24 md:self-start">
      <ol className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-2 shadow-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              aria-current={active === s.id ? 'true' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors',
                active === s.id ? 'bg-navy text-white' : 'hover:bg-muted',
              )}
            >
              <span
                className={cn(
                  'grid size-5 shrink-0 place-items-center rounded-full text-[10px]',
                  active === s.id ? 'bg-sun text-navy' : 'bg-muted',
                )}
              >
                {i + 1}
              </span>
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
