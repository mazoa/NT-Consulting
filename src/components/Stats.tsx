import { Container } from "@/components/Container";

const STATS = [
  {
    value: "30+",
    label: "Years of Experience",
    detail: "At Wells Fargo and beyond",
  },
  {
    value: "100%",
    label: "Practitioner-Led",
    detail: "Real-world, not theoretical",
  },
  {
    value: "1",
    label: "Trusted Advisor",
    detail: "Executive-level access",
  },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-white" aria-label="Practice at a glance">
      <Container className="grid gap-8 py-12 md:grid-cols-3 md:gap-6 md:py-16">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-heading text-4xl font-semibold text-charcoal">{stat.value}</p>
            <p className="mt-2 font-heading text-lg text-charcoal">{stat.label}</p>
            <p className="mt-1 text-sm text-muted">{stat.detail}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
