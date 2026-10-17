import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge, Handwritten } from '@/components/brand'

export function PageHero({
  tone = 'cream',
  badge,
  badgeIcon,
  title,
  description,
  image,
  imageAlt = '',
  handwritten,
  children,
  back = true,
}: {
  tone?: 'cream' | 'navy'
  badge?: string
  badgeIcon?: React.ReactNode
  title: string
  description?: string
  image?: string
  imageAlt?: string
  handwritten?: React.ReactNode
  children?: React.ReactNode
  back?: boolean
}) {
  const navy = tone === 'navy'
  return (
    <section className={cn(navy ? 'bg-navy text-white' : 'bg-cream text-navy')}>
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 pt-6 pb-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          {back && (
            <Link
              href="/"
              className={cn('inline-flex items-center gap-1.5 text-xs font-medium', navy ? 'text-white/80 hover:text-sun' : 'text-navy/70 hover:text-navy')}
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" /> Back to Home
            </Link>
          )}
          {badge && (
            <div className="mt-4">
              <Badge icon={badgeIcon} className={navy ? 'border-sun/60 bg-transparent text-sun' : undefined}>
                {badge}
              </Badge>
            </div>
          )}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h1>
          {description && (
            <p className={cn('mt-2 max-w-lg text-sm leading-relaxed', navy ? 'text-white/75' : 'text-muted-foreground')}>{description}</p>
          )}
          {children && <div className="mt-5">{children}</div>}
        </div>
        {image && (
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-3/5 max-w-64">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="260px"
                className={cn('object-contain', navy ? '' : 'mix-blend-multiply')}
              />
            </div>
            {handwritten && (
              <Handwritten className={cn('-rotate-6', navy ? 'text-sun' : 'text-navy')}>{handwritten}</Handwritten>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
