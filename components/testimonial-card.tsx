import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/lib/data'

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-sun text-sun" aria-hidden="true" />
          ))}
        </div>
        <span className="rounded-full border border-sun bg-sun-soft/50 px-2.5 py-0.5 text-[10px] font-medium">{t.tag}</span>
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy/85">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className={cn('grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold', t.avatarClass)} aria-hidden="true">
          {t.name.charAt(0)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold">{t.name}</span>
          <span className="block truncate text-[11px] text-muted-foreground">{t.location} &middot; Verified Order</span>
        </span>
        <span className="shrink-0 text-[11px] text-muted-foreground">{t.time}</span>
      </figcaption>
    </figure>
  )
}
