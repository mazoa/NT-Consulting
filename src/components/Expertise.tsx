import Image from "next/image";
import { Container } from "@/components/Container";

const ITEMS = [
  {
    title: "Regulatory Mastery",
    body: "Comprehensive command of SEC, FINRA, and state-level rules, applied practically to your firm's specific structure and strategy.",
  },
  {
    title: "Strategic Program Design",
    body: "Custom-built compliance frameworks tailored to your business model — not generic templates that leave gaps for regulators to find.",
  },
  {
    title: "Proactive Risk Mitigation",
    body: "Anticipating examiner expectations before they arrive, so your firm is always examination-ready, not scrambling to catch up.",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="section-anchor bg-band py-20 md:py-28"
      aria-labelledby="expertise-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border border-line bg-white">
            <Image
              src="/img6.png"
              alt="Metallic shield on a pale studio background, a visual metaphor for institutional protection."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Expertise
            </p>
            <h2 id="expertise-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
              Expertise That Protects
            </h2>
            <p className="mt-5 max-w-xl text-ink">
              Effective compliance isn&apos;t reactive — it&apos;s strategic. Anatoly
              Mazo brings deep practitioner-led knowledge of federal and state
              regulatory regimes to design programs that don&apos;t just satisfy
              examiners, but genuinely fortify your firm.
            </p>
          </div>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {ITEMS.map((item) => (
            <li key={item.title} className="card p-6">
              <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
