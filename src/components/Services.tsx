"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

const SERVICES = [
  {
    n: "1",
    title: "Framework Build",
    summary:
      "Robust compliance programs constructed from the ground up or comprehensively overhauled.",
    detail:
      "Whether starting from a thin policy binder or replacing a patchwork of inherited documents, the work covers a risk inventory, a tailored policy and procedure suite, a code of ethics, supervisory structure, books-and-records map, training calendar, and board or managing-member reporting. Deliverables are written to how your firm actually makes decisions — not a generic template with the logo swapped.",
  },
  {
    n: "2",
    title: "Mock Exams & Gap Analysis",
    summary:
      "Simulated SEC examinations that surface weaknesses before regulators ever walk through your door.",
    detail:
      "A simulated document request, staff interviews, and walkthrough of core processes — trading, valuation, investor communications, marketing, and vendor oversight as applicable. Findings are delivered as a deficiency-style letter with a prioritized remediation plan, so the first time your team answers an examiner is not the first time they have practiced.",
  },
  {
    n: "3",
    title: "Ongoing Monitoring",
    summary:
      "Continuous regulatory monitoring and expert navigation of SEC filings to keep your firm perpetually current.",
    detail:
      "A living regulatory-change process, a filing calendar (ADV annual updating amendment, Form PF, 13D/G/F, state notices, and others that apply), periodic testing of high-risk procedures, and practical interpretation when a new SEC rule or staff statement lands. The point is continuity: the program stays current between formal projects, not only in the week before an exam.",
  },
] as const;

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="section-anchor bg-white py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Services
        </p>
        <h2 id="services-heading" className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
          The Value of Institutional Wisdom
        </h2>
        <p className="mt-5 max-w-2xl text-ink">
          Regulatory examiners look for the gaps your internal team may not see.
          Anatoly Mazo brings an examiner&apos;s perspective to your firm —
          identifying vulnerabilities, stress-testing your programs, and ensuring
          every filing is airtight. Open each item for how the work actually runs.
        </p>
        <div className="mt-12 divide-y divide-line overflow-hidden rounded-xl border border-line bg-white/80">
          {SERVICES.map((service, index) => {
            const expanded = open === index;
            const panelId = `service-panel-${index}`;
            return (
              <div key={service.title}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left hover:bg-band/50"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        {service.n}
                      </span>
                      <span className="mt-1 block font-heading text-xl font-semibold text-charcoal">
                        {service.title}
                      </span>
                      <span className="mt-2 block text-sm text-ink">{service.summary}</span>
                    </span>
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-sm"
                      aria-hidden="true"
                    >
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {expanded ? (
                  <div id={panelId} className="px-6 pb-6 text-sm leading-relaxed text-ink md:text-base">
                    {service.detail}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
