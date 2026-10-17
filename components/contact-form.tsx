'use client'

import { ArrowRight } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/data'

export function ContactForm() {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const subject = `Message from ${data.get('name')}`
        const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      }}
    >
      <Field label="Your Name" name="name" placeholder="Enter your name" />
      <Field label="Your Email" name="email" type="email" placeholder="Enter your email" />
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your song idea or ask a question..."
          className="rounded-lg border border-input bg-white p-3 text-sm focus:border-sun focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="flex h-11 w-fit items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white hover:bg-navy/90"
      >
        Send Message <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-11 rounded-lg border border-input bg-white px-3 text-sm focus:border-sun focus:outline-none"
      />
    </label>
  )
}
