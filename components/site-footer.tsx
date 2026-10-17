import Link from 'next/link'
import { Heart, Music } from 'lucide-react'
import { Logo, YoutubeIcon, InstagramIcon } from '@/components/brand'
import { NewsletterForm } from '@/components/newsletter-form'
import { INSTAGRAM_URL, YOUTUBE_URL, YT_MUSIC_URL } from '@/lib/data'

const explore = [
  { href: '/', label: 'Home' },
  { href: '/listen', label: 'Listen' },
  { href: '/watch', label: 'Watch' },
  { href: '/releases', label: 'Releases' },
  { href: '/stories', label: 'Stories' },
]
const company = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms#privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <h2 className="mt-5 text-[11px] font-semibold tracking-widest text-sun uppercase">Why &amp; what we do</h2>
          <p className="mt-2 text-xs leading-relaxed text-white/75">
            NaadByte transforms real human stories, emotions, and life milestones into studio-grade, custom-crafted
            original songs. Whether it&apos;s a surprise sangeet anthem, a tearful anniversary ballad, or a signature
            brand jingle, we blend poetic songwriting with modern acoustic soundscapes.
          </p>
          <h2 className="mt-5 text-[11px] font-semibold tracking-widest text-sun uppercase">Follow &amp; stream</h2>
          <ul className="mt-3 flex flex-wrap gap-5 text-xs">
            <li>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sun">
                <YoutubeIcon className="size-4" /> YouTube
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sun">
                <InstagramIcon className="size-4 text-pink" /> Instagram
              </a>
            </li>
            <li>
              <a href={YT_MUSIC_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sun">
                <Music className="size-4 text-sun" aria-hidden="true" /> YT Music
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5 md:border-l md:border-white/10 md:pl-10">
          <h2 className="text-[11px] font-semibold tracking-widest text-sun uppercase">Stay connected</h2>
          <p className="mt-2 text-lg font-semibold">Never Miss a Musical Release</p>
          <p className="mt-1 text-xs leading-relaxed text-white/70">
            Be the first to hear fresh releases, get behind-the-scenes composing stories, and receive exclusive festive
            discounts for custom songs.
          </p>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-3">
          <FooterCol title="Explore" links={explore} />
          <FooterCol title="Company" links={company} />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-4 text-[11px] text-white/60 sm:flex-row">
          <p>&copy; 2025 NaadByte Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="size-3 fill-pink text-pink" aria-label="love" /> for stories, memories and music.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-[11px] font-semibold tracking-widest text-sun uppercase">{title}</h2>
      <ul className="mt-3 flex flex-col gap-1.5 text-xs text-white/80">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-sun">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
