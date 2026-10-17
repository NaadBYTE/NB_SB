import type { Metadata } from 'next'
import { Headphones, Music } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { TrackLibrary } from '@/components/listen/track-library'
import { YoutubeIcon } from '@/components/brand'

export const metadata: Metadata = {
  title: 'Listen & Download Tracks',
  description: 'Explore NaadByte original studio compositions. Stream instantly or download high-quality MP3 masters.',
}

const platforms = [
  { label: 'All Platforms (HyperFollow)', href: '#' },
  { label: 'Spotify', href: 'https://open.spotify.com' },
  { label: 'Apple Music', href: 'https://music.apple.com' },
  { label: 'YouTube Music', href: 'https://music.youtube.com' },
  { label: 'Amazon Music', href: 'https://music.amazon.in' },
]

export default function ListenPage() {
  return (
    <>
      <div className="bg-navy">
        <PageHero
          tone="navy"
          badge="Studio audio library & samples"
          badgeIcon={<Headphones className="size-3.5" aria-hidden="true" />}
          title="Listen & Download Tracks"
          description="Explore our curated collection of original studio compositions. Stream any track instantly or download high-quality MP3 masters."
          image="/images/headphones-dark.webp"
          imageAlt="Line drawing of headphones"
          handwritten={
            <>
              Feel
              <br />
              <span className="pl-3">The</span>
              <br />
              Music
            </>
          }
        />
        <div className="mx-auto max-w-6xl px-5 pb-12">
          <TrackLibrary />
        </div>
      </div>

      <section aria-labelledby="stream-title" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 id="stream-title" className="font-semibold">
              Stream NaadByte on Your Favorite App
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {platforms.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium hover:border-navy"
                  >
                    {p.label.startsWith('YouTube') ? <YoutubeIcon className="size-4" /> : <Music className="size-3.5 text-pink" aria-hidden="true" />}
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
