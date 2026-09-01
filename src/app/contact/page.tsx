import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { EMAIL, LINKEDIN_URL, PAY_URL, consultMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email Anatoly Mazo at anatolymazo@gmail.com to request a confidential compliance consultation.",
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-white">
      <section className="bg-band py-16 md:py-20">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold">Contact Anatoly Mazo</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink">
            There is no calendar widget. Write directly and a confidential
            conversation can follow by email.
          </p>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-semibold">How to reach him</h2>
            <ul className="mt-6 space-y-4 text-ink">
              <li>
                Email:{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  className="underline"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/anatoly-mazo-9949a85
                </a>
              </li>
            </ul>
            <a
              href={consultMailto}
              className="mt-8 inline-flex items-center rounded-lg bg-charcoal px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Schedule a Consultation
            </a>
            <a
              href={PAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 ml-3 inline-flex items-center rounded-lg border border-charcoal px-5 py-3 text-sm font-medium text-charcoal hover:bg-white"
            >
              Pay securely
            </a>
            <p className="mt-8 max-w-sm text-sm text-muted">
              Independent consultant. Not legal advice. Not affiliated with or
              endorsed by Wells Fargo.
            </p>
          </div>
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Request a consultation</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              Required fields: full name, firm, email, sector, and message. Phone is
              optional. Submit opens your email app addressed to {EMAIL}.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
