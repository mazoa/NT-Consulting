import Image from "next/image";
import { Container } from "@/components/Container";

const CARDS = [
  {
    title: "Independent Oversight",
    body: "Objective fiduciary risk management free from internal blind spots — the independent perspective your firm needs most.",
  },
  {
    title: "Scalable Protocols",
    body: "Internal compliance systems designed to grow seamlessly alongside your AUM without breaking under expansion pressure.",
  },
  {
    title: "Investor Disclosure",
    body: "Expert navigation of complex disclosure requirements that protect your firm and build confidence with sophisticated investors.",
  },
];

export function StrategicPartner() {
  return (
    <section className="bg-band py-20 md:py-28" aria-labelledby="partner-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[16/10] overflow-hidden rounded-xl border border-line lg:order-1">
            <Image
              src="/img4.png"
              alt="Two professionals in a one-on-one consultation at a conference table overlooking a city skyline."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 500px, 100vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Partnership
            </p>
            <h2 id="partner-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
              Your Strategic Compliance Partner
            </h2>
            <p className="mt-6 text-[1.05rem] text-ink">
              Beyond reactive problem-solving, Anatoly Mazo serves as a strategic
              partner embedded in your firm&apos;s long-term success — providing
              independent oversight, building scalable infrastructure, and ensuring
              transparency at every level.
            </p>
          </div>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <li key={card.title} className="card p-6">
              <h3 className="font-heading text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">{card.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
