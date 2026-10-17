'use client'

import { useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ArtThumb } from '@/components/brand'
import { videoCategories, videos, YOUTUBE_URL } from '@/lib/data'

export function VideoGallery({ layout = 'row' }: { layout?: 'row' | 'grid' }) {
  const [active, setActive] = useState<(typeof videoCategories)[number]>('All Videos')
  const scroller = useRef<HTMLUListElement>(null)
  const list = active === 'All Videos' ? videos : videos.filter((v) => v.category === active)

  return (
    <div>
      <div role="tablist" aria-label="Video categories" className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        {videoCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={cn(
              'shrink-0 rounded-full border px-5 py-2 text-xs font-medium transition-colors',
              active === c ? 'border-navy bg-navy text-white' : 'border-border bg-card hover:border-navy',
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="relative mt-6">
        <ul
          ref={scroller}
          className={cn(
            layout === 'row'
              ? 'no-scrollbar flex snap-x gap-4 overflow-x-auto scroll-smooth pr-10'
              : 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3',
          )}
        >
          {list.map((v) => (
            <li key={v.slug} className={cn(layout === 'row' && 'w-60 shrink-0 snap-start sm:w-[calc(25%-12px)] sm:min-w-52')}>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="group block">
                <ArtThumb
                  src={v.image}
                  alt={`${v.title} thumbnail`}
                  tint={v.tint}
                  className="aspect-video"
                  play="lg"
                  sizes="(min-width: 1024px) 320px, 80vw"
                />
                <p className="mt-2 text-sm font-semibold">{v.title}</p>
                <p className="text-xs text-muted-foreground">{v.duration}</p>
              </a>
            </li>
          ))}
          {list.length === 0 && <li className="text-sm text-muted-foreground">No videos in this category yet.</li>}
        </ul>
        {layout === 'row' && list.length > 4 && (
          <button
            type="button"
            aria-label="Scroll videos right"
            onClick={() => scroller.current?.scrollBy({ left: 300 })}
            className="absolute top-[30%] -right-2 grid size-9 place-items-center rounded-full border border-border bg-card shadow-md hover:bg-sun"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
