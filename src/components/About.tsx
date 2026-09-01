import Image from "next/image";
import { Container } from "@/components/Container";

export function About() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="about-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            The practice
          </p>
          <h2 id="about-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
            From Global Giants to Your Firm
          </h2>
          <div className="prose-site mt-6 max-w-xl text-[1.05rem] text-ink">
            <p>
              With over 30 years navigating the most complex regulatory environments
              at Wells Fargo, Anatoly Mazo brings institutional-grade expertise
              directly to your organization. As a former senior compliance officer,
              he now delivers boutique, executive-level consulting tailored to the
              modern financial landscape — combining the rigor of a global bank with
              the agility your firm needs.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
          <Image
            src="/hero.png"
            alt="Executives in a conference room reviewing a growth chart during a professional meeting."
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
