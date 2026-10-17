import type { Metadata } from 'next'
import { Heart } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { StoriesGrid } from '@/components/stories-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Stories & Smiles',
  description: 'Real reactions from couples, families and businesses who celebrated their milestones with a NaadByte custom song.',
}

export default function StoriesPage() {
  return (
    <>
      <PageHero
        badge="Real reactions & love"
        badgeIcon={<Heart className="size-3.5 fill-pink text-pink" aria-hidden="true" />}
        title="Stories & Smiles"
        description="A glimpse of how couples, families, and businesses celebrated their milestones with a custom song."
        image="/images/family-hug.webp"
        imageAlt="Hand-drawn family hugging"
        handwritten={
          <>
            Real People
            <br />
            <span className="pl-2">Real Stories</span>
          </>
        }
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 pb-12">
          <h2 className="sr-only">Customer stories</h2>
          <StoriesGrid />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
