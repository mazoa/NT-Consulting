import Image from "next/image";
import { Container } from "@/components/Container";

const CARDS = [
  {
    title: "Rising Regulatory Pressure",
    body: "SEC examinations are more frequent, more technical, and more consequential than ever before.",
  },
  {
    title: "Reputational Stakes",
    body: "One missed requirement can trigger enforcement actions that erode investor trust overnight.",
  },
  {
    title: "Compliance as Advantage",
    body: "Firms that invest in robust programs outperform — attracting institutional capital and resisting disruption.",
  },
];

export function RegulatoryStorm() {
  return (
    <section className="bg-band py-20 md:py-28" aria-labelledby="storm-heading">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              The environment
            </p>
            <h2 id="storm-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
              The Regulatory Storm is Growing
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] text-ink">
              Financial institutions face unprecedented scrutiny from the SEC and
              global regulators. A single compliance oversight can dismantle years of
              hard-earned reputation and growth. In today&apos;s environment, true
              compliance is no longer a checklist — it is your greatest competitive
              advantage.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line lg:aspect-[5/4]">
            <Image
              src="/img2.png"
              alt="Storm clouds gathering over a dense urban skyline of office towers."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
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
