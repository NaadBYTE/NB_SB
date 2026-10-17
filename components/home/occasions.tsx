import Image from 'next/image'
import Link from 'next/link'
import { Music2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { occasions } from '@/lib/data'

export function Occasions() {
  const firstRow = occasions.slice(0, 5)
  const secondRow = occasions.slice(5)
  return (
    <section aria-labelledby="occasions-title" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-start gap-3">
          <Music2 className="mt-1 size-9 text-pink" aria-hidden="true" />
          <div>
            <h2 id="occasions-title" className="text-2xl font-bold tracking-tight md:text-3xl">
              Life&apos;s Moments, Our Music
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Every occasion has a story. We turn it into a song.</p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {firstRow.map((o) => (
            <OccasionCard key={o.slug} {...o} highlight={o.slug === 'weddings'} />
          ))}
        </ul>
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mx-auto lg:max-w-[88%] lg:grid-cols-4">
          {secondRow.map((o) => (
            <OccasionCard key={o.slug} {...o} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function OccasionCard({
  title,
  subtitle,
  image,
  highlight,
}: {
  title: string
  subtitle: string
  image: string
  highlight?: boolean
}) {
  return (
    <li>
      <Link
        href="/order"
        className={cn(
          'group flex h-full flex-col items-center rounded-2xl border p-3 pb-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md',
          highlight ? 'border-sun bg-sun-soft' : 'border-border bg-card',
        )}
      >
        <span className="relative block aspect-[4/3] w-full">
          <Image src={image} alt="" fill sizes="(min-width: 1024px) 200px, 45vw" className="object-contain mix-blend-multiply" />
        </span>
        <span className="mt-2 text-sm font-semibold">{title}</span>
        <span className="mt-0.5 max-w-[16ch] text-xs leading-snug text-muted-foreground">{subtitle}</span>
      </Link>
    </li>
  )
}
