'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArtThumb } from '@/components/brand'
import { releases } from '@/lib/data'

const tabs = ['All Releases', 'Singles', 'Albums', 'Latest'] as const

export function ReleasesGrid() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('All Releases')
  const list =
    tab === 'Singles'
      ? releases.filter((r) => r.type === 'Single')
      : tab === 'Albums'
        ? releases.filter((r) => r.type === 'Album')
        : tab === 'Latest'
          ? releases.filter((r) => r.year === 2025)
          : releases

  return (
    <div>
      <div role="tablist" aria-label="Release type" className="no-scrollbar flex gap-3 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={cn(
              'shrink-0 rounded-full border px-5 py-2 text-xs font-medium',
              tab === t ? 'border-navy bg-navy text-white' : 'border-border bg-card hover:border-navy',
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((r) => (
          <li key={r.slug}>
            <Link href="/listen" className="group block">
              <ArtThumb src={r.image} alt={`${r.title} cover art`} tint={r.tint} className="aspect-square" play="lg" />
              <p className="mt-2 text-sm font-semibold">{r.title}</p>
              <p className="text-xs text-muted-foreground">
                {r.type} &middot; {r.year}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
