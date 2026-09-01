"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";

const SECTORS = [
  {
    id: "sectors-3c1",
    title: "3c1 Private Funds",
    summary:
      "Tailored compliance programs for private funds operating under the Investment Company Act exemption, with precise attention to investor count limits and regulatory triggers.",
    detail:
      "Exemption eligibility is binary: a fund either fits 3(c)(1) or it does not. Work typically covers investor-count methodology (including look-through and beneficial ownership), hard gates before a 100-beneficial-owner breach, and alignment of offering materials, side letters, and subscription processes so marketing does not create a registration trigger. Deliverables often include a written 3(c)(1) playbook, onboarding controls, and a calendar for ongoing eligibility testing.",
  },
  {
    id: "sectors-wealth",
    title: "Wealth Management & Family Offices",
    summary:
      "Navigating fiduciary duties, disclosure obligations, and adviser registration requirements for high-net-worth and ultra-high-net-worth client structures.",
    detail:
      "Family offices and wealth platforms sit at the intersection of adviser registration, the family-office exclusion, custody, and disclosure. Engagements map entity charts and advisory relationships, determine whether SEC or state registration (or a bona fide exclusion) applies, and then build Form ADV, CRS, and private-fund disclosure that match how the firm actually operates — including related-person arrangements and cross-border family members that examiners routinely probe.",
  },
  {
    id: "sectors-growth",
    title: "High-Growth Investment Companies",
    summary:
      "Scalable compliance infrastructure designed to grow alongside your AUM — without becoming a bottleneck to your firm's ambitions.",
    detail:
      "Rapid AUM growth breaks programs designed for a ten-person firm. The work designs policy suites, personal-trading and MNPI controls, vendor oversight, and CCO reporting that expand with headcount and product lines — so new strategies, offices, or investor channels do not outrun the control environment. The objective is examination-ready infrastructure that does not stall fundraising or operations.",
  },
] as const;

export function Sectors() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTORS.some((sector) => sector.id === hash)) {
        setOpenId(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  function toggle(id: string) {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next) {
      history.replaceState(null, "", `#${next}`);
    } else {
      history.replaceState(null, "", "#sectors");
    }
  }

  return (
    <section id="sectors" className="section-anchor bg-white py-20 md:py-28" aria-labelledby="sectors-heading">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Who this is for
        </p>
        <h2 id="sectors-heading" className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
          Specialized Support for Critical Sectors
        </h2>
        <p className="mt-5 max-w-2xl text-ink">
          Anatoly Mazo&apos;s consulting practice is purpose-built for the
          organizations where compliance complexity is highest and the consequences
          of failure are greatest. Select a sector for practical detail.
        </p>
        <ul className="mt-12 grid gap-5">
          {SECTORS.map((sector) => {
            const expanded = openId === sector.id;
            return (
              <li key={sector.id} id={sector.id} className="section-anchor">
                <button
                  type="button"
                  className="card w-full p-6 text-left transition hover:bg-white"
                  aria-expanded={expanded}
                  aria-controls={`${sector.id}-panel`}
                  onClick={() => toggle(sector.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold md:text-2xl">
                      {sector.title}
                    </h3>
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-sm text-charcoal"
                      aria-hidden="true"
                    >
                      {expanded ? "−" : "+"}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink md:text-base">
                    {sector.summary}
                  </p>
                  {expanded ? (
                    <p
                      id={`${sector.id}-panel`}
                      className="mt-4 max-w-3xl border-t border-line pt-4 text-sm leading-relaxed text-ink md:text-base"
                    >
                      {sector.detail}
                    </p>
                  ) : (
                    <span className="mt-4 inline-block text-sm text-muted">
                      Expand for practical detail
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
