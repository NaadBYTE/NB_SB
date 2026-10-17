import type { Metadata } from 'next'
import { Disc3, Heart, Music2, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About NaadByte',
  description: 'We turn real human stories, emotions, and life milestones into original songs with soul and precision.',
}

const pillars = [
  { icon: Disc3, title: 'Original Music', body: '100% custom compositions. Never templates, never stock loops.' },
  { icon: Users, title: 'Professional Team', body: 'Songwriters, sound engineers and trained vocalists under one roof.' },
  { icon: Heart, title: 'Real Emotions', body: 'Stories, feelings, and memories woven into every lyric.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our story"
        badgeIcon={<Music2 className="size-3.5 text-pink" aria-hidden="true" />}
        title="About NaadByte"
        description="We turn real human stories, emotions, and life milestones into original songs with soul and precision."
        image="/images/occ-just-because.webp"
        imageAlt="Woman with headphones listening to music"
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold">Why We Do What We Do</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              NaadByte blends poetic songwriting with modern acoustic soundscapes to create music that feels personal,
              meaningful, and timeless. A song outlives the party, the cake and the flowers — it becomes the way a family
              remembers a moment. That is what we are here to make.
            </p>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <span className="mx-auto grid size-11 place-items-center rounded-full bg-pink/10 text-pink">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
