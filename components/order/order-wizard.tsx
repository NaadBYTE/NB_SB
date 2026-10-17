'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatINR, orderOccasions, WHATSAPP_NUMBER } from '@/lib/data'

const steps = ['Occasion', 'Story Details', 'Music Style', 'Review', 'Submit']
const styles = ['Romantic ballad', 'Bollywood dance', 'Acoustic / unplugged', 'Devotional / bhajan', 'Punjabi beat', 'Lo-fi chill']
const languages = ['Hindi', 'English', 'Hinglish', 'Punjabi', 'Tamil', 'Marathi']

type Form = {
  occasion: string
  forName: string
  fromName: string
  story: string
  style: string
  language: string
  phone: string
}

const empty: Form = { occasion: '', forName: '', fromName: '', story: '', style: '', language: 'Hindi', phone: '' }

export function OrderWizard() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Form>(empty)
  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }))
  const occ = orderOccasions.find((o) => o.id === form.occasion)

  const canNext = [
    !!form.occasion,
    form.forName.trim() && form.fromName.trim() && form.story.trim().length >= 20,
    !!form.style,
    true,
    form.phone.replace(/\D/g, '').length >= 10,
  ][step]

  const message = [
    'Hi NaadByte! I would like to order a custom song.',
    `Occasion: ${occ?.title ?? ''}`,
    `For: ${form.forName}`,
    `From: ${form.fromName}`,
    `Style: ${form.style} (${form.language})`,
    `Story: ${form.story}`,
    `My number: ${form.phone}`,
  ].join('\n')

  return (
    <div>
      <ol className="flex items-start justify-between gap-1" aria-label="Order progress">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 flex-col items-center gap-1.5 text-center">
            <span
              aria-current={i === step ? 'step' : undefined}
              className={cn(
                'grid size-8 place-items-center rounded-full text-xs font-bold transition-colors',
                i < step && 'bg-sun text-navy',
                i === step && 'bg-sun text-navy ring-4 ring-sun/30',
                i > step && 'bg-white/10 text-white/80',
              )}
            >
              {i < step ? <Check className="size-4" aria-hidden="true" /> : i + 1}
            </span>
            <span className={cn('text-[11px]', i === step ? 'text-sun' : 'text-white/70')}>{s}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-xs text-white/60">
          Step {step + 1} of {steps.length}
        </p>

        {step === 0 && (
          <fieldset className="mt-1">
            <legend className="text-lg font-semibold">What is the song for?</legend>
            <div className="mt-4 flex flex-col gap-3">
              {orderOccasions.map((o) => {
                const checked = form.occasion === o.id
                return (
                  <label
                    key={o.id}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors',
                      checked ? 'border-sun bg-sun/10' : 'border-white/15 hover:border-white/40',
                    )}
                  >
                    <input type="radio" name="occasion" value={o.id} checked={checked} onChange={() => set('occasion', o.id)} className="sr-only" />
                    <span className={cn('grid size-5 place-items-center rounded-full border-2', checked ? 'border-sun' : 'border-white/50')}>
                      {checked && <span className="size-2.5 rounded-full bg-sun" />}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{o.title}</span>
                      <span className="block text-xs text-white/60">{o.subtitle}</span>
                    </span>
                    <span className="text-sm font-semibold text-sun">from {formatINR(o.price)}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <div className="mt-1 flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Tell us the story</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Who is the song for?" value={form.forName} onChange={(v) => set('forName', v)} placeholder="e.g. Papa, Sneha" />
              <Field label="Who is it from?" value={form.fromName} onChange={(v) => set('fromName', v)} placeholder="Your name" />
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-white/80">Memories, inside jokes, special moments</span>
              <textarea
                value={form.story}
                onChange={(e) => set('story', e.target.value)}
                rows={5}
                placeholder="How you met, their nicknames, favourite places, what makes them special... (min 20 characters)"
                className="rounded-lg border border-white/15 bg-white/5 p-3 text-sm placeholder:text-white/40 focus:border-sun focus:outline-none"
              />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="mt-1">
            <h2 className="text-lg font-semibold">Pick a music style</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {styles.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={form.style === s}
                  onClick={() => set('style', s)}
                  className={cn(
                    'rounded-xl border px-3 py-3 text-sm font-medium transition-colors',
                    form.style === s ? 'border-sun bg-sun text-navy' : 'border-white/15 hover:border-white/40',
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            <label className="mt-5 flex flex-col gap-1.5">
              <span className="text-xs font-medium text-white/80">Language</span>
              <select
                value={form.language}
                onChange={(e) => set('language', e.target.value)}
                className="h-11 rounded-lg border border-white/15 bg-navy px-3 text-sm focus:border-sun focus:outline-none"
              >
                {languages.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="mt-1">
            <h2 className="text-lg font-semibold">Review your order</h2>
            <dl className="mt-4 divide-y divide-white/10 text-sm">
              {[
                ['Occasion', occ ? `${occ.title} — from ${formatINR(occ.price)}` : ''],
                ['For', form.forName],
                ['From', form.fromName],
                ['Style', `${form.style} · ${form.language}`],
                ['Story', form.story],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[90px_1fr] gap-3 py-2.5">
                  <dt className="text-white/60">{k}</dt>
                  <dd className="break-words">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {step === 4 && (
          <div className="mt-1 flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Send to our studio</h2>
            <Field label="Your WhatsApp number" type="tel" value={form.phone} onChange={(v) => set('phone', v)} placeholder="+91 98765 43210" />
            <p className="text-xs leading-relaxed text-white/60">
              Your answers open in WhatsApp, ready to send. Nothing is saved or shared on our server. Pay 50% to start, the
              balance only after you approve the track.
            </p>
            <a
              href={canNext ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!canNext}
              className={cn(
                'flex h-12 items-center justify-center gap-2 rounded-full bg-[#25d366] text-sm font-semibold text-white',
                !canNext && 'pointer-events-none opacity-40',
              )}
            >
              <MessageCircle className="size-4" aria-hidden="true" /> Send on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className="flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-white/80 hover:text-white disabled:invisible"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back
        </button>
        {step < steps.length - 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext}
            className="flex h-11 items-center gap-2 rounded-full bg-sun px-8 text-sm font-semibold text-navy transition-opacity disabled:opacity-40"
          >
            Next <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-white/80">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-white/15 bg-white/5 px-3 text-sm placeholder:text-white/40 focus:border-sun focus:outline-none"
      />
    </label>
  )
}
