import Link from 'next/link'
import { ArrowRight, Music2 } from 'lucide-react'
import { ArtThumb } from '@/components/brand'
import { releases } from '@/lib/data'

export function LatestReleases() {
  return (
    <section aria-labelledby="releases-title" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Music2 className="mt-1 size-9 text-sun" aria-hidden="true" />
            <div>
              <h2 id="releases-title" className="text-2xl font-bold tracking-tight md:text-3xl">
                Explore Our Latest Releases
              </h2>
              <p className="mt-1 text-sm text-white/75">Fresh compositions. Real stories. Original music.</p>
            </div>
          </div>
          <Link
            href="/releases"
            className="flex h-10 items-center gap-2 rounded-full border border-white/60 px-5 text-xs font-semibold transition-colors hover:bg-white hover:text-navy"
          >
            View All Releases <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="no-scrollbar mt-6 flex snap-x gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-6 lg:overflow-visible">
          {releases.slice(0, 6).map((r) => (
            <li key={r.slug} className="w-40 shrink-0 snap-start lg:w-auto">
              <Link href="/listen" className="group block">
                <ArtThumb src={r.image} alt={`${r.title} cover art`} tint={r.tint} className="aspect-[4/3]" />
                <p className="mt-2 truncate text-sm font-medium">{r.title}</p>
                <p className="text-xs text-white/70">{r.duration}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
