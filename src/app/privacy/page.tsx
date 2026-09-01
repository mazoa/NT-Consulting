import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this website handles information.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="bg-white">
      <section className="bg-band py-16 md:py-20">
        <Container>
          <h1 className="text-4xl font-semibold">Privacy</h1>
          <p className="mt-4 max-w-2xl text-ink">
            This page describes how the {SITE_NAME} website treats information. It
            is intentionally short because the site does not run a hosted form
            backend or sell data.
          </p>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl space-y-8 text-ink">
          <div>
            <h2 className="text-2xl font-semibold">Who operates this site</h2>
            <p className="mt-3">
              This website is operated by {SITE_NAME}, an independent compliance
              consultant. It is not a law firm, not a registered investment
              adviser, and not affiliated with or endorsed by Wells Fargo.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3">
              Consultation requests go by email to{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              . The on-site form does not transmit your details to a third-party
              form processor; it opens your own email application with a
              pre-filled message. If you send a message, the contents of that
              email are used only to respond to your inquiry.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">What this site does not collect</h2>
            <p className="mt-3">
              This site does not use a newsletter signup, does not require an
              account, and does not ask for payment information. No office
              address or telephone number is published because none is offered
              as a public contact channel.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Hosting and logs</h2>
            <p className="mt-3">
              The host that serves this site may keep ordinary technical logs
              (such as IP address, browser type, and pages requested) for
              security and reliability. Those logs are controlled by the host,
              not used here for advertising.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Questions</h2>
            <p className="mt-3">
              Email{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>{" "}
              if you want a message removed from the inbox or have a privacy
              question.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
