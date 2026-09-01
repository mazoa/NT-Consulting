import Image from "next/image";
import { Container } from "@/components/Container";

const POINTS = [
  {
    n: "1",
    title: "Audit-Proven Judgment",
    body: "Strategies refined through real SEC examinations, not simulations or case studies.",
  },
  {
    n: "2",
    title: "Institutional Rigor",
    body: "The standards of a global bank, applied with the flexibility a boutique firm requires.",
  },
  {
    n: "3",
    title: "Direct Engagement",
    body: "Work directly with Anatoly — no junior associates, no delegation of your most critical work.",
  },
];

export function WhyExperience() {
  return (
    <section
      id="approach"
      className="section-anchor bg-white py-20 md:py-28"
      aria-labelledby="approach-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Approach
            </p>
            <h2 id="approach-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
              Why Experience Matters
            </h2>
            <p className="mt-6 text-[1.05rem] text-ink">
              Theoretical compliance frameworks often collapse under the pressure of
              a real-world audit. Textbook knowledge cannot substitute for the
              instincts earned over three decades inside one of the world&apos;s
              largest financial institutions.
            </p>
            <p className="mt-4 text-[1.05rem] text-ink">
              Anatoly Mazo delivers pressure-tested, institutional-grade insights —
              direct, hands-on guidance from a veteran who has led risk programs at
              the very highest level.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
            <Image
              src="/img3.png"
              alt="Professionals gathered around a glass conference table in a high-rise boardroom."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 500px, 100vw"
            />
          </div>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {POINTS.map((point) => (
            <li key={point.n} className="card p-6">
              <p className="font-heading text-sm font-medium text-muted">{point.n}</p>
              <h3 className="mt-2 font-heading text-xl font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink">{point.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
