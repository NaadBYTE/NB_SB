'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/data'
import { Logo } from '@/components/brand'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const tone =
    pathname === '/'
      ? 'yellow'
      : ['/order', '/listen', '/watch'].some((p) => pathname.startsWith(p))
        ? 'navy'
        : 'cream'

  const surface = {
    yellow: 'bg-sun text-navy',
    navy: 'bg-navy text-white',
    cream: 'bg-cream text-navy border-b border-border',
  }[tone]

  return (
    <header className={cn('sticky top-0 z-50', surface)}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Logo tone={tone === 'navy' ? 'light' : 'dark'} />

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => {
            const active = pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-[13px] font-medium transition-opacity hover:opacity-100',
                  active ? 'underline decoration-pink decoration-2 underline-offset-8' : 'opacity-85',
                )}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/listen"
            aria-label="Search tracks"
            className={cn(
              'grid size-9 place-items-center rounded-full border-2 transition-colors',
              tone === 'navy' ? 'border-sun text-sun hover:bg-sun hover:text-navy' : 'border-navy hover:bg-navy hover:text-sun',
            )}
          >
            <Search className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-9 place-items-center rounded-full md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-current/10 px-5 pb-4 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
