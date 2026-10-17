import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { tintClass, type Tint } from '@/lib/data'

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const ink = tone === 'dark' ? 'text-navy' : 'text-white'
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)} aria-label="NaadByte home">
      <svg viewBox="0 0 40 20" className={cn('h-5 w-10', ink)} aria-hidden="true">
        <path d="M1 10h7M32 10h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="20" cy="10" rx="11" ry="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="10" r="4" fill="#f7bf2e" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="10" r="1.2" fill="currentColor" />
      </svg>
      <span className={cn('text-xl font-bold tracking-tight', ink)}>
        Naad<span className="text-pink">Byte</span>
      </span>
    </Link>
  )
}

export function Handwritten({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('font-hand text-3xl leading-[0.95] font-bold md:text-4xl', className)} aria-hidden="true">
      {children}
    </p>
  )
}

export function Badge({ children, icon, className }: { children: React.ReactNode; icon?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-pink/40 bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-navy uppercase',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}

export function PlayDot({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const s = { sm: 'size-7', md: 'size-9', lg: 'size-12' }[size]
  return (
    <span className={cn('grid place-items-center rounded-full bg-white text-navy shadow-md ring-2 ring-navy', s, className)}>
      <Play className="size-[45%] translate-x-[1px] fill-current" aria-hidden="true" />
    </span>
  )
}

export function ArtThumb({
  src,
  alt,
  tint,
  className,
  sizes = '(min-width: 1024px) 220px, 45vw',
  play = 'md',
}: {
  src: string
  alt: string
  tint: Tint
  className?: string
  sizes?: string
  play?: 'sm' | 'md' | 'lg' | false
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-lg', tintClass[tint], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
      />
      {play && (
        <PlayDot
          size={play}
          className="absolute right-2 bottom-2 transition-transform group-hover:scale-110"
        />
      )}
    </div>
  )
}

export function Waveform({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 60" className={cn('h-12 w-44', className)} fill="none" aria-hidden="true">
      <path
        d="M0 30h40l6-8 5 18 6-30 6 42 6-50 6 56 6-46 6 36 6-24 6 14 5-6h120"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="1" y="4.5" width="22" height="15" rx="4" fill="#ff0033" />
      <path d="M10 9l5 3-5 3z" fill="#fff" />
    </svg>
  )
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
