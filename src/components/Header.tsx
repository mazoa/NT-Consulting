"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { NAV_LINKS, SITE_NAME, consultMailto } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/#top"
          className="font-heading text-[1.05rem] font-semibold tracking-tight text-charcoal"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={pathname === "/" ? link.hash : link.href}
              className="text-[0.92rem] text-ink/85 transition-colors hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={consultMailto}
            className="inline-flex items-center rounded-lg bg-charcoal px-4 py-2 text-[0.88rem] font-medium text-white transition-opacity hover:opacity-90"
          >
            Schedule a Consultation
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-px w-5 bg-charcoal transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-charcoal transition ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-charcoal transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1080px] flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={pathname === "/" ? link.hash : link.href}
                className="rounded-lg px-2 py-3 text-base text-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={consultMailto}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-charcoal px-4 py-3 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Schedule a Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
