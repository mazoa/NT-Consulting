"use client";

import { FormEvent, useState } from "react";
import {
  EMAIL,
  SECTOR_OPTIONS,
  buildConsultMailto,
  consultMailto,
  type SectorOption,
} from "@/lib/site";

type FormState = {
  name: string;
  firm: string;
  email: string;
  phone: string;
  sector: "" | SectorOption;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  firm: "",
  email: "",
  phone: "",
  sector: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState(consultMailto);

  function validate(next: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!next.name.trim()) nextErrors.name = "Enter your full name.";
    if (!next.firm.trim()) nextErrors.firm = "Enter your firm.";
    if (!next.email.trim()) nextErrors.email = "Enter your email address.";
    else if (!EMAIL_PATTERN.test(next.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!next.sector) nextErrors.sector = "Select a sector.";
    if (!next.message.trim()) nextErrors.message = "Enter a short message.";
    else if (next.message.trim().length < 10) {
      nextErrors.message = "Please add a bit more detail (at least 10 characters).";
    }
    return nextErrors;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const href = buildConsultMailto({
      name: values.name.trim(),
      firm: values.firm.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      sector: values.sector,
      message: values.message.trim(),
    });
    setMailtoHref(href);
    setSubmitted(true);
    window.location.href = href;
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-ink shadow-none outline-none transition focus:border-charcoal";

  return (
    <div>
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="full-name" className="text-sm font-medium text-charcoal">
            Full name <span className="text-muted">(required)</span>
          </label>
          <input
            id="full-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "full-name-error" : undefined}
          />
          {errors.name ? (
            <p id="full-name-error" className="mt-1 text-sm text-charcoal" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="firm" className="text-sm font-medium text-charcoal">
            Firm <span className="text-muted">(required)</span>
          </label>
          <input
            id="firm"
            name="organization"
            autoComplete="organization"
            value={values.firm}
            onChange={(e) => setValues((v) => ({ ...v, firm: e.target.value }))}
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.firm)}
            aria-describedby={errors.firm ? "firm-error" : undefined}
          />
          {errors.firm ? (
            <p id="firm-error" className="mt-1 text-sm text-charcoal" role="alert">
              {errors.firm}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            Email <span className="text-muted">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-charcoal" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="tel"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="sector" className="text-sm font-medium text-charcoal">
            Sector <span className="text-muted">(required)</span>
          </label>
          <select
            id="sector"
            name="sector"
            value={values.sector}
            onChange={(e) =>
              setValues((v) => ({ ...v, sector: e.target.value as FormState["sector"] }))
            }
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.sector)}
            aria-describedby={errors.sector ? "sector-error" : undefined}
          >
            <option value="">Select a sector</option>
            {SECTOR_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.sector ? (
            <p id="sector-error" className="mt-1 text-sm text-charcoal" role="alert">
              {errors.sector}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-charcoal">
            Message <span className="text-muted">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            className={fieldClass}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-sm text-charcoal" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-charcoal px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Email Anatoly
        </button>
      </form>

      {submitted ? (
        <div
          className="card mt-6 p-4 text-sm leading-relaxed"
          role="status"
          aria-live="polite"
        >
          <p>
            Your email app should open addressed to Anatoly. If it doesn&apos;t, write
            him at{" "}
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
          <p className="mt-2">
            Fallback:{" "}
            <a className="underline" href={mailtoHref}>
              Open a pre-filled message to {EMAIL}
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
}
