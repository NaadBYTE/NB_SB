import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Music, Search, MoveDownLeft } from 'lucide-react'
import { Badge, Handwritten, PlayDot, Waveform } from '@/components/brand'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sun text-navy">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-8 pb-6 lg:grid-cols-2 lg:pt-10">
        <div>
          <Badge icon={<Music className="size-3.5 text-pink" aria-hidden="true" />} className="bg-sun-soft/60">
            Original music &amp; sound production
          </Badge>
          <h1 className="mt-5 text-5xl leading-[1.12] font-extrabold tracking-tight text-balance sm:text-6xl">
            <span className="block">आपका नाम.</span>
            <span className="block">आपकी कहानी.</span>
            <span className="block">आपका गाना.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-navy/85">
            Tell us your story and we turn it into an original custom song — for a birthday, wedding entry, anniversary,
            or business anthem. Crafted by professional sound engineers and vocalists.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/order"
              className="flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Order a song <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/listen"
              className="flex h-12 items-center rounded-full border-2 border-navy px-7 text-sm font-semibold transition-colors hover:bg-navy hover:text-sun"
            >
              Hear our music
            </Link>
          </div>

          <Link
            href="/listen"
            className="group mt-8 flex max-w-sm items-center gap-3 rounded-2xl bg-sun-soft/70 p-2 pr-4 ring-1 ring-navy/10 transition-colors hover:bg-sun-soft"
          >
            <span className="relative size-11 shrink-0 overflow-hidden rounded-xl bg-[#ffb93d]">
              <Image src="/images/headphones.webp" alt="" fill sizes="44px" className="object-cover mix-blend-multiply" />
            </span>
            <span className="relative size-11 shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-[#ff3f80] to-[#ffc76b]">
              <Image src="/images/muse.webp" alt="" fill sizes="44px" className="object-cover mix-blend-multiply" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] text-navy/70">Currently Playing</span>
              <span className="block truncate text-sm font-semibold">Dil Se (Acoustic)</span>
            </span>
            <span className="flex h-6 items-end gap-0.5" aria-hidden="true">
              {[0, 0.2, 0.4, 0.1].map((d) => (
                <span key={d} className="w-1 animate-eq rounded-full bg-navy" style={{ height: '100%', animationDelay: `${d}s` }} />
              ))}
            </span>
            <PlayDot size="sm" className="bg-navy text-white ring-0" />
          </Link>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="absolute inset-[4%] rounded-full border border-navy/15" aria-hidden="true" />
          <div className="absolute inset-[12%] rounded-full border border-dashed border-navy/20" aria-hidden="true" />
          <Image
            src="/images/vinyl.webp"
            alt="Spinning NaadByte vinyl record with a gold tonearm"
            fill
            priority
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-contain mix-blend-multiply"
          />
          <div className="absolute right-0 bottom-[14%] -rotate-12 sm:right-2">
            <Handwritten className="text-navy">
              Stories
              <br />
              <span className="pl-4">Turned</span>
              <br />
              <span className="pl-2">Into Songs</span>
            </Handwritten>
            <MoveDownLeft className="mt-1 size-7 text-navy" aria-hidden="true" />
          </div>
          <Link
            href="/listen"
            className="absolute top-[38%] -right-2 hidden items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-sun shadow-lg transition-transform hover:scale-105 lg:flex"
          >
            <Search className="size-3.5" aria-hidden="true" /> Search
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-end gap-2 px-5 pb-6">
        <Waveform className="hidden text-navy sm:block" />
        <span className="rounded-full border border-navy/40 bg-sun-soft/60 px-4 py-1.5 text-xs font-medium">
          100% Original Studio Compositions
        </span>
      </div>
    </section>
  )
}
