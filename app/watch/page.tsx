import type { Metadata } from 'next'
import { ArrowRight, Clapperboard } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { VideoGallery } from '@/components/video-gallery'
import { YoutubeIcon } from '@/components/brand'
import { YOUTUBE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Music Videos & Visuals',
  description: 'Official music videos, cinematic anthems, shorts and reels crafted by NaadByte Studio.',
}

export default function WatchPage() {
  return (
    <>
      <PageHero
        tone="navy"
        badge="Official music videos · Shorts · Reels"
        badgeIcon={<Clapperboard className="size-3.5" aria-hidden="true" />}
        title="Music Videos & Visuals"
        description="Watch official music videos, cinematic anthems, and custom musical stories crafted with soul and precision by NaadByte Studio."
        image="/images/video-dark.webp"
        imageAlt="Line drawing of a video player"
        handwritten={
          <>
            Visuals
            <br />
            <span className="pl-3">That</span>
            <br />
            <span className="pl-6">Sing</span>
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center gap-2 rounded-full bg-sun px-6 text-sm font-semibold text-navy"
          >
            Watch Now <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center gap-2 rounded-full border-2 border-white px-6 text-sm font-semibold hover:bg-white hover:text-navy"
          >
            <YoutubeIcon className="size-5" /> Subscribe on YouTube
          </a>
        </div>
      </PageHero>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="sr-only">All videos</h2>
          <VideoGallery layout="grid" />
        </div>
      </section>
    </>
  )
}
