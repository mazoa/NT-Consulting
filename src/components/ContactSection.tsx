import { EMAIL, LINKEDIN_URL, PAY_URL, consultMailto } from "@/lib/site";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-anchor bg-white py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Next step
        </p>
        <h2 id="contact-heading" className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
          Secure Your Firm&apos;s Future
        </h2>
        <p className="mt-6 max-w-2xl text-[1.05rem] text-ink">
          Your compliance program is your firm&apos;s first line of defense and its
          most powerful statement of credibility. Email Anatoly at{" "}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{" "}
          for a confidential consultation.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="font-heading text-xl font-semibold">Confidential Consultation</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              A private, no-obligation discussion to assess your firm&apos;s current
              compliance posture and identify immediate opportunities.
            </p>
          </article>
          <article className="card p-6">
            <h3 className="font-heading text-xl font-semibold">Custom Engagement Plan</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              A tailored scope of work aligned to your firm&apos;s structure, size,
              and regulatory obligations — built around your timeline.
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={consultMailto}
            className="inline-flex items-center justify-center rounded-lg bg-charcoal px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Schedule Your Consultation
          </a>
          <a
            href={consultMailto}
            className="inline-flex items-center justify-center rounded-lg border border-charcoal bg-white/80 px-6 py-3 text-sm font-medium text-charcoal hover:bg-white"
          >
            Contact Anatoly Mazo
          </a>
        </div>

        <div
          id="pay"
          className="section-anchor card mt-10 p-6 md:p-8"
        >
          <h3 className="font-heading text-2xl font-semibold">Pay for an engagement</h3>
          <p className="mt-3 max-w-2xl text-ink">
            After the scope is agreed, pay the quoted amount here. You enter the
            amount on Stripe&apos;s secure page. No prices are listed on this site.
          </p>
          <a
            href={PAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-charcoal px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Pay securely
          </a>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="font-heading text-2xl font-semibold">Write directly</h3>
            <p className="mt-4 text-ink">
              There is no booking widget and no phone line. Reach Anatoly by email
              or LinkedIn.
            </p>
            <ul className="mt-5 space-y-3 text-ink">
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
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="font-heading text-2xl font-semibold">Request a consultation</h3>
            <p className="mt-2 mb-6 text-sm text-muted">
              Submitting opens your email app with a message addressed to {EMAIL}.
            </p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
