import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Competencies } from "@/components/sections/Competencies";
import { Projects } from "@/components/sections/Projects";
import { TerminalWidget } from "@/components/sections/TerminalWidget";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/lib/profile";

const title = "Phumzile Moeketsi — Computer Systems Engineer";
const description =
  "Portfolio of Phumzile Nokwazi Moeketsi: C++, SQL, Cisco networking and full-stack engineering. Seeking a 12-month Work-Integrated Learning placement in Pretoria.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: profile.email,
          telephone: profile.phone,
          address: { "@type": "PostalAddress", addressLocality: "Pretoria", addressCountry: "ZA" },
          alumniOf: "Tshwane University of Technology",
          knowsLanguage: profile.languages,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Competencies />
        <Projects />
        <TerminalWidget />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Pretoria, South Africa · Available for 12-month WIL</span>
        </div>
      </footer>
    </div>
  );
}
