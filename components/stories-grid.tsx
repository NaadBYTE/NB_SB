'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { TestimonialCard } from '@/components/testimonial-card'
import { storyCategories, testimonials } from '@/lib/data'

export function StoriesGrid() {
  const [active, setActive] = useState<(typeof storyCategories)[number]>('All Stories')
  const list = active === 'All Stories' ? testimonials : testimonials.filter((t) => t.category === active)

  return (
    <div>
      <div role="tablist" aria-label="Story categories" className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        {storyCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={cn(
              'shrink-0 rounded-full border px-5 py-2 text-xs font-medium',
              active === c ? 'border-navy bg-navy text-white' : 'border-border bg-card hover:border-navy',
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-5 md:grid-cols-2">
        {list.map((t) => (
          <li key={t.name}>
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>
    </div>
  )
}
