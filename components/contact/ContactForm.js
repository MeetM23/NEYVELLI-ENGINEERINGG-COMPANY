"use client";

import { useState } from "react";

const fields = [
  { name: "name", placeholder: "Your Name", type: "text" },
  { name: "email", placeholder: "Your Email", type: "email" },
  { name: "phone", placeholder: "Phone Number", type: "tel" },
  { name: "subject", placeholder: "Subject", type: "text" },
];

const inputClass =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2.5 text-xs outline-none placeholder:text-neutral-400 focus:border-brand";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // TODO: wire to an API route / email service
    setSent(true);
    e.target.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-lg bg-white p-5 text-neutral-800 shadow-xl"
    >
      <h2 className="text-[11px] font-bold uppercase">Send Us a Message</h2>
      {fields.map((f) => (
        <input key={f.name} className={inputClass} required aria-label={f.placeholder} {...f} />
      ))}
      <textarea
        name="message"
        rows={5}
        required
        placeholder="Your Message"
        aria-label="Your Message"
        className={inputClass}
      />
      <button className="rounded bg-brand px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-dark">
        Send Message
      </button>
      {sent && (
        <p role="status" className="text-xs font-medium text-green-700">
          Thank you! We will get back to you shortly.
        </p>
      )}
    </form>
  );
}
