import type { Metadata } from 'next'
import Image from 'next/image'
import { Handwritten } from '@/components/brand'
import { OrderWizard } from '@/components/order/order-wizard'

export const metadata: Metadata = {
  title: 'Order your song',
  description: 'Answer a few questions about your story and get an original custom song from NaadByte.',
}

const howItWorks = [
  { n: 1, title: 'Share your story', body: 'Answer the questions above with real moments, funny lines, and emotions.' },
  { n: 2, title: 'Pay 50% to start', body: 'Pay simply by UPI (GPay/PhonePe/Paytm). Balance due only when you approve the track.' },
  { n: 3, title: 'Get your song', body: 'Delivered as an MP3 audio file in 2–3 days, with one round of revisions included.' },
]

export default function OrderPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Order your song</h1>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75">
              Answer a few questions about your story. At the end, your answers open in WhatsApp, ready to send. Nothing
              is saved or shared on our server.
            </p>
            <div className="mt-8">
              <OrderWizard />
            </div>
          </div>
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="relative aspect-square w-full max-w-sm">
              <Image src="/images/writer-dark.webp" alt="Line drawing of a woman writing song lyrics" fill sizes="380px" className="object-contain" />
            </div>
            <Handwritten className="absolute right-0 bottom-10 -rotate-12 text-sun">
              Your Story
              <br />
              <span className="pl-6">Our Music</span>
            </Handwritten>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-title" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 id="how-title" className="sr-only">
            How it works
          </h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {howItWorks.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <span className="mx-auto grid size-9 place-items-center rounded-full border-2 border-sun font-bold">{s.n}</span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
