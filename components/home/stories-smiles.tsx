import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'
import { Badge, Handwritten } from '@/components/brand'
import { TestimonialCard } from '@/components/testimonial-card'
import { testimonials } from '@/lib/data'

export function StoriesSmiles() {
  return (
    <section aria-labelledby="stories-title" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Badge icon={<Heart className="size-3.5 fill-pink text-pink" aria-hidden="true" />}>Real reactions &amp; love</Badge>
            <h2 id="stories-title" className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Stories &amp; Smiles
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              A glimpse of how couples, families, and businesses celebrated their milestones with a custom song.
            </p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="relative aspect-[3/2] w-1/2 min-w-40">
              <Image
                src="/images/family.webp"
                alt="Hand-drawn family embracing surrounded by music notes"
                fill
                sizes="300px"
                className="object-contain mix-blend-multiply"
              />
            </div>
            <Handwritten className="-rotate-6 text-2xl md:text-3xl">
              Real People
              <br />
              <span className="pl-2">Real Stories</span>
            </Handwritten>
            <Link
              href="/stories"
              className="hidden h-10 shrink-0 items-center gap-2 self-start rounded-full bg-navy px-5 text-xs font-semibold text-white hover:bg-navy/90 sm:flex"
            >
              View All Stories <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {testimonials.slice(0, 2).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <Link href="/stories" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold sm:hidden">
          View All Stories <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
