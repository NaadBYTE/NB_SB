import Link from 'next/link'
import { ArrowRight, Headphones } from 'lucide-react'
import { Waveform } from '@/components/brand'

export function CtaBand() {
  return (
    <section className="bg-cream px-5 pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 rounded-2xl bg-sun px-6 py-6 shadow-sm md:flex-row md:items-center md:px-10">
        <Headphones className="size-12 shrink-0 text-navy" strokeWidth={1.5} aria-hidden="true" />
        <div className="flex-1">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">Ready to turn your story into a song?</h2>
          <p className="mt-1 text-sm text-navy/80">It&apos;s simple, personal, and crafted with love by our studio team.</p>
        </div>
        <Waveform className="hidden text-navy/40 lg:block" />
        <Link
          href="/order"
          className="flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Order Your Song Now <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
