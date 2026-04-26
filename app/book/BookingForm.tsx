"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { SERVICES } from "@/lib/services";
import { WhatsAppGlyph } from "@/components/WhatsAppButton";
import { GA } from "@/lib/analytics";
import { createClient } from "@/lib/supabase/client";

const schema = z.object({
  name: z.string().min(2, "Please tell me your name"),
  phone: z.string().min(9, "A WhatsApp number please"),
  email: z.string().email("Valid email please").or(z.literal("")).optional(),
  service: z.string().min(1, "Pick a treatment"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const formStarted = useRef(false);
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onFirstInteraction() {
    if (formStarted.current) return;
    formStarted.current = true;
    GA.bookingFormStart();
  }

  async function onSubmit(data: FormData) {
    GA.bookingFormSubmit(data.service);

    // Log enquiry to Supabase — fire and forget, never blocks the WhatsApp redirect
    supabase.from("enquiries").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service: data.service,
      preferred_date: data.preferredDate || null,
      message: data.message || null,
      source: "website",
    }).then(({ error }) => {
      if (error) console.error("Enquiry log failed:", error.message);
    });

    const url = whatsappLink({
      context: "form",
      name: data.name,
      service: data.service,
      preferredDate: data.preferredDate,
      phone: data.phone,
      email: data.email,
      message: data.message,
    });
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onFocus={onFirstInteraction} className="space-y-5">
      <Field label="Name" error={errors.name?.message} required>
        <input
          {...register("name")}
          type="text"
          autoComplete="name"
          className="bb-input"
        />
      </Field>

      <Field label="WhatsApp number" error={errors.phone?.message} required>
        <input
          {...register("phone")}
          type="tel"
          autoComplete="tel"
          placeholder="072 411 1476"
          className="bb-input"
        />
      </Field>

      <Field label="Email (optional)" error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          className="bb-input"
        />
      </Field>

      <Field label="Treatment" error={errors.service?.message} required>
        <select {...register("service")} className="bb-input">
          <option value="">Choose a treatment…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name} ({s.fromPriceLabel})
            </option>
          ))}
          <option value="Not sure">Not sure, recommend something</option>
        </select>
      </Field>

      <Field label="Preferred date">
        <input {...register("preferredDate")} type="date" className="bb-input" />
      </Field>

      <Field label="Anything Sam should know?">
        <textarea
          {...register("message")}
          rows={4}
          className="bb-input"
          placeholder="Allergies, previous PMU work, questions…"
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-md bg-bb-whatsapp text-white font-medium hover:bg-bb-whatsapp-dk transition-all hover:scale-[1.01] disabled:opacity-60 w-full sm:w-auto"
      >
        <WhatsAppGlyph className="w-5 h-5" />
        Send to WhatsApp
      </button>

      <p className="bb-meta text-bb-ink-mute">
        Submitting opens WhatsApp with your details pre-filled. You confirm by
        sending the message. Nothing is sent automatically.
      </p>

      {submitted && (
        <p className="bb-meta text-bb-success">
          WhatsApp opened in a new tab. Send the message to confirm with Sam.
        </p>
      )}

      <style jsx>{`
        .bb-input {
          width: 100%;
          padding: 12px 14px;
          background: var(--color-bb-surface);
          border: 1px solid var(--color-bb-line);
          border-radius: 6px;
          font: inherit;
          color: var(--color-bb-ink);
          transition: border-color 150ms;
        }
        .bb-input:focus {
          outline: none;
          border-color: var(--color-bb-clay);
          box-shadow: 0 0 0 3px rgba(168, 120, 98, 0.15);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-bb-ink mb-1.5 block">
        {label}
        {required && <span className="text-bb-clay ml-0.5">*</span>}
      </span>
      {children}
      {error && (
        <span className="text-bb-error text-sm mt-1 block">{error}</span>
      )}
    </label>
  );
}
