import type { Metadata } from 'next'
import { Mail, MessageCircle, Share2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { InstagramIcon, YoutubeIcon } from '@/components/brand'
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_NUMBER, YOUTUBE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have a question, a special request, or want to discuss your song idea? Reach the NaadByte studio.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question, a special request, or want to discuss your song idea? We'd love to hear from you."
        image="/images/video-player.webp"
        imageAlt=""
      />
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="sr-only">Send us a message</h2>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-4">
            <InfoCard icon={<MessageCircle className="size-5 text-[#25d366]" aria-hidden="true" />} title="Chat on WhatsApp" body="Get quick answers on WhatsApp.">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex h-9 items-center rounded-full bg-navy px-5 text-xs font-semibold text-white"
              >
                Chat Now
              </a>
            </InfoCard>
            <InfoCard icon={<Mail className="size-5 text-blue-600" aria-hidden="true" />} title="Email Us" body="Support & collaborations">
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-sm font-semibold hover:text-pink">
                {CONTACT_EMAIL}
              </a>
            </InfoCard>
            <InfoCard icon={<Share2 className="size-5 text-pink" aria-hidden="true" />} title="Follow Us" body="New releases and behind the scenes">
              <div className="mt-2 flex gap-4 text-xs">
                <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-pink">
                  <YoutubeIcon className="size-4" /> YouTube
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-pink">
                  <InstagramIcon className="size-4 text-pink" /> Instagram
                </a>
              </div>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoCard({ icon, title, body, children }: { icon: React.ReactNode; title: string; body: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-muted">{icon}</span>
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{body}</p>
        {children}
      </div>
    </div>
  )
}
