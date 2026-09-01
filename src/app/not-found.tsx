import Link from "next/link";
import { Container } from "@/components/Container";
import { EMAIL } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="main" className="bg-white py-24">
      <Container className="max-w-xl">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-ink">
          That address is not on this site. Return home, or email{" "}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-charcoal px-5 py-3 text-sm font-medium text-white"
        >
          Back to home
        </Link>
      </Container>
    </main>
  );
}
