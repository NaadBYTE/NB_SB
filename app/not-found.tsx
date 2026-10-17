import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-16 text-center">
        <div className="relative aspect-[3/2] w-full max-w-sm">
          <Image src="/images/vinyl.webp" alt="Vinyl record" fill priority sizes="380px" className="object-contain mix-blend-multiply" />
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">OOPS!</h1>
        <p className="mt-2 font-medium">This page seems to be offbeat.</p>
        <p className="mt-1 text-sm text-muted-foreground">But don&apos;t worry, the music always finds a way.</p>
        <Link href="/" className="mt-6 flex h-11 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white">
          Go to Home <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
