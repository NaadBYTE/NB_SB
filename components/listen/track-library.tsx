'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { Pause, Play, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { releases, tintClass } from '@/lib/data'

const filters = ['All', 'Chill', 'Devotional', 'Romantic', 'Energetic', 'Cinematic', 'Punjabi', 'Instrumental']
const PAGE_SIZE = 5

export function TrackLibrary() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [playing, setPlaying] = useState<string | null>(null)
  const audio = useRef<HTMLAudioElement>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return releases.filter(
      (r) =>
        (filter === 'All' || r.mood === filter || r.language === filter) &&
        (!q || `${r.title} ${r.mood} ${r.language}`.toLowerCase().includes(q)),
    )
  }, [filter, query])

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const current = Math.min(page, pages)
  const rows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  const toggle = (slug: string) => {
    const el = audio.current
    if (!el) return
    if (playing === slug) {
      el.pause()
      setPlaying(null)
      return
    }
    el.src = `/audio/${slug}.mp3`
    el.play().catch(() => {})
    setPlaying(slug)
  }

  return (
    <div>
      <div role="tablist" aria-label="Filter by mood" className="no-scrollbar flex gap-2 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => {
              setFilter(f)
              setPage(1)
            }}
            className={cn(
              'shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
              filter === f ? 'bg-sun text-navy' : 'bg-white/10 text-white hover:bg-white/20',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-4 text-navy shadow-sm md:p-6">
        <label className="relative block">
          <span className="sr-only">Search tracks</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            placeholder="Search tracks by title, genre..."
            className="h-11 w-full rounded-lg border border-input bg-white pr-3 pl-9 text-sm focus:border-sun focus:outline-none"
          />
        </label>

        <div className="mt-5 flex justify-between border-b border-border pb-2 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
          <span>Available studio tracks</span>
          <span>Duration / actions</span>
        </div>

        <ul className="divide-y divide-border">
          {rows.map((r) => {
            const isPlaying = playing === r.slug
            return (
              <li key={r.slug} className="flex items-center gap-3 py-3">
                <button
                  type="button"
                  onClick={() => toggle(r.slug)}
                  aria-label={`${isPlaying ? 'Pause' : 'Play'} ${r.title}`}
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-sun text-navy hover:bg-sun/80"
                >
                  {isPlaying ? <Pause className="size-3.5 fill-current" /> : <Play className="size-3.5 translate-x-px fill-current" />}
                </button>
                <span className={cn('relative size-10 shrink-0 overflow-hidden rounded-md', tintClass[r.tint])}>
                  <Image src={r.image} alt="" fill sizes="40px" className="object-cover mix-blend-multiply" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{r.title}</span>
                  <span className="block text-xs text-muted-foreground">
                    {r.mood} &middot; {r.language}
                  </span>
                </span>
                <span className="hidden h-6 items-center gap-0.5 md:flex" aria-hidden="true">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <span
                      key={i}
                      className={cn('w-0.5 rounded-full', isPlaying ? 'animate-eq bg-sun' : 'bg-navy/25')}
                      style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${(i % 5) * 0.12}s` }}
                    />
                  ))}
                </span>
                <span className="w-10 text-right text-xs text-muted-foreground tabular-nums">{r.duration}</span>
                <a
                  href={`/audio/${r.slug}.mp3`}
                  download
                  className="rounded-md bg-sun px-3 py-1.5 text-xs font-semibold text-navy hover:bg-sun/80"
                >
                  Download
                </a>
              </li>
            )
          })}
          {rows.length === 0 && <li className="py-8 text-center text-sm text-muted-foreground">No tracks match your search.</li>}
        </ul>

        {pages > 1 && (
          <nav aria-label="Pagination" className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                aria-current={current === i + 1 ? 'page' : undefined}
                className={cn(
                  'grid size-8 place-items-center rounded-md text-xs font-medium',
                  current === i + 1 ? 'border border-navy' : 'hover:bg-muted',
                )}
              >
                {i + 1}
              </button>
            ))}
          </nav>
        )}
        <audio ref={audio} onEnded={() => setPlaying(null)} className="hidden" />
      </div>
    </div>
  )
}
