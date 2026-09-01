import Link from "next/link";
import { EMAIL, LINKEDIN_URL, NAV_LINKS, PAY_URL, SITE_NAME, consultMailto } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-band">
      <div className="mx-auto grid max-w-[1080px] gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-heading text-lg font-semibold text-charcoal">{SITE_NAME}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Institutional compliance consulting for private funds, wealth managers,
            family offices, and high-growth investment companies.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-ink hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-ink hover:underline">
                Contact form
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-ink hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${EMAIL}`} className="text-ink hover:underline">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href={consultMailto} className="text-ink hover:underline">
                Schedule a Consultation
              </a>
            </li>
            <li>
              <a
                href={PAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:underline"
              >
                Pay
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/80">
        <div className="mx-auto max-w-[1080px] space-y-3 px-5 py-6 text-xs leading-relaxed text-muted md:px-8">
          <p>
            © {year} {SITE_NAME}. Independent compliance consultant.
          </p>
          <p>
            This website describes professional consulting services. It is not legal
            advice, does not create an attorney-client or advisory relationship, and
            is not a substitute for counsel licensed in your jurisdiction. Anatoly
            Mazo is not affiliated with or endorsed by Wells Fargo.
          </p>
        </div>
      </div>
    </footer>
  );
}
