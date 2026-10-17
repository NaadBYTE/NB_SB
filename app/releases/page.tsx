import type { Metadata } from 'next'
import { Disc3 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ReleasesGrid } from '@/components/releases-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Releases & Albums',
  description: 'Discover the official releases of NaadByte — cinematic anthems, acoustic singles, devotional albums and more.',
}

export default function ReleasesPage() {
  return (
    <>
      <PageHero
        badge="New drops · Featured · All"
        badgeIcon={<Disc3 className="size-3.5 text-pink" aria-hidden="true" />}
        title="Releases & Albums"
        description="Discover the official releases of NaadByte — cinematic anthems, alternative rock, progressive electronic, lo-fi soundscapes, and more."
        image="/images/vinyl.webp"
        imageAlt="Vinyl record with tonearm"
        handwritten={
          <>
            New Music
            <br />
            <span className="pl-4">Always</span>
          </>
        }
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 pb-12">
          <h2 className="sr-only">All releases</h2>
          <ReleasesGrid />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
