import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clapperboard, Undo2 } from 'lucide-react'
import { Badge, Handwritten, YoutubeIcon } from '@/components/brand'
import { VideoGallery } from '@/components/video-gallery'
import { YOUTUBE_URL } from '@/lib/data'

export function MusicVideos() {
  return (
    <section aria-labelledby="videos-title" className="border-b border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Badge icon={<Clapperboard className="size-3.5 text-pink" aria-hidden="true" />}>
              Official music videos &middot; Shorts &middot; Reels
            </Badge>
            <h2 id="videos-title" className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Music Videos &amp; Visuals
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Watch official music videos, cinematic anthems, and custom musical stories crafted with soul and precision
              by NaadByte Studio.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/watch"
                className="flex h-11 items-center gap-2 rounded-full bg-sun px-6 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Watch Now <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 items-center gap-2 rounded-full border-2 border-navy px-6 text-sm font-semibold transition-colors hover:bg-navy hover:text-white"
              >
                <YoutubeIcon className="size-5" /> Subscribe on YouTube
              </a>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-md items-center">
            <div className="relative aspect-square w-3/4">
              <Image
                src="/images/video-player.webp"
                alt="Hand-drawn video player with a play button"
                fill
                sizes="320px"
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="-ml-2 -rotate-6">
              <Handwritten>
                Visuals
                <br />
                <span className="pl-3">That</span>
                <br />
                <span className="pl-6">Sing</span>
              </Handwritten>
              <Undo2 className="mt-1 size-7 -rotate-12" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <VideoGallery />
        </div>
      </div>
    </section>
  )
}
