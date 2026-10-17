import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { TermsNav } from '@/components/terms-nav'
import { CONTACT_EMAIL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Please read these terms carefully before using NaadByte custom music services.',
}

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: 'Welcome to NaadByte. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. NaadByte provides custom music and sound production services for personal, commercial, and creative use.',
  },
  {
    id: 'services',
    title: 'Our Services',
    body: 'We compose, record, mix and master original songs based on the story and preferences you share. Each song is created from scratch by our team of songwriters, vocalists and sound engineers.',
  },
  {
    id: 'orders',
    title: 'Orders & Payments',
    body: 'Orders are confirmed once 50% of the quoted amount is received via UPI or bank transfer. The remaining balance is due only after you approve the final track. Prices shown are starting prices and may vary with length and complexity.',
  },
  {
    id: 'revisions',
    title: 'Revisions',
    body: 'Every order includes one round of revisions to lyrics, melody or mix. Additional revisions may be charged separately and will always be quoted before work begins.',
  },
  {
    id: 'delivery',
    title: 'Delivery',
    body: 'Standard delivery is 2–3 working days for personal songs and 5–7 days for wedding productions, delivered as a high-quality MP3. Lossless WAV files are available on request.',
  },
  {
    id: 'cancellations',
    title: 'Cancellations & Refunds',
    body: 'You may cancel before songwriting begins for a full refund. Once composition has started, the advance is non-refundable as it covers studio and artist time already committed.',
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    body: 'Personal orders grant you a perpetual licence for private and social media use. Business jingles include commercial usage rights. NaadByte retains authorship credit and may showcase work with your permission.',
  },
  {
    id: 'privacy',
    title: 'Privacy',
    body: 'Your stories are personal. We only use the information you share to create your song and never sell or share it with third parties. Order details sent via WhatsApp stay within that conversation.',
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: 'NaadByte is not liable for indirect or consequential damages arising from use of our services. Our total liability is limited to the amount paid for the specific order.',
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    body: `We may update these terms from time to time. Continued use of our services after changes means you accept the revised terms. Questions? Write to ${CONTACT_EMAIL}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" description="Please read these terms carefully before using NaadByte." />
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-14 md:grid-cols-[240px_1fr]">
          <TermsNav sections={sections.map(({ id, title }) => ({ id, title }))} />
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-8 lg:pr-48">
              {sections.map((s, i) => (
                <article key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-lg font-semibold">
                    {i + 1}. {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              ))}
            </div>
            <div className="pointer-events-none absolute top-8 right-6 hidden aspect-square w-44 lg:block">
              <Image src="/images/muse.webp" alt="" fill sizes="176px" className="object-contain mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
