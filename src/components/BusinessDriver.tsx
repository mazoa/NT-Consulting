import Image from "next/image";
import { Container } from "@/components/Container";

const POINTS = [
  "Reframe compliance as a bedrock of efficiency, not a burden",
  "Free leadership to focus on growth and strategy",
  "Demonstrate the transparency institutional investors demand",
];

export function BusinessDriver() {
  return (
    <section className="bg-band py-20 md:py-28" aria-labelledby="driver-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Operational excellence
          </p>
          <h2 id="driver-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
            Compliance as a Business Driver
          </h2>
          <p className="mt-6 text-[1.05rem] text-ink">
            The most successful firms don&apos;t view compliance as an obstacle —
            they treat it as the foundation of operational excellence. By reducing
            friction in daily processes and embedding ethical standards into firm
            culture, compliance becomes a catalyst for growth rather than a
            constraint on it.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
          <Image
            src="/img5.png"
            alt="A modern institutional office with workstations and a wall of market data screens."
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
