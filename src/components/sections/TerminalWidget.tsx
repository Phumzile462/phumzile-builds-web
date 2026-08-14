import { useEffect, useRef, useState, type FormEvent } from "react";
import { competencies, education, profile } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

type Line = { kind: "in" | "out"; text: string };

const BANNER: Line[] = [
  { kind: "out", text: "phumzile-os v1.0 — recruiter shell" },
  { kind: "out", text: "Type `help` to list available commands." },
];

function run(cmd: string): string[] {
  switch (cmd) {
    case "help":
      return [
        "help       show this list",
        "skills     engineering competencies",
        "education  academic background",
        "projects   featured case studies",
        "contact    how to reach me",
        "whoami     candidate summary",
        "clear      clear the screen",
      ];
    case "skills":
      return competencies.flatMap((c) => [`${c.title}:`, `  ${c.items.join(", ")}`]);
    case "education":
      return [
        `${education.qualification} — ${education.institution}`,
        education.graduation,
        `Key modules: ${education.modules.join(", ")}`,
      ];
    case "projects":
      return [
        "1. Relational Database Management & SQL Optimizer",
        "2. Network Traffic & Routing Simulator",
        "3. Full-Stack Industrial IoT Dashboard",
      ];
    case "contact":
      return [`email: ${profile.email}`, `phone: ${profile.phone}`, `location: ${profile.location}`];
    case "whoami":
      return [
        profile.name,
        profile.role,
        `Languages: ${profile.languages.join(", ")}`,
        "Seeking: 12-Month Work-Integrated Learning placement",
      ];
    default:
      return [`command not found: ${cmd} — try \`help\``];
  }
}

export function TerminalWidget() {
  const [lines, setLines] = useState<Line[]>(BANNER);
  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function submit(e: FormEvent) {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    setValue("");
    if (!cmd) return;
    if (cmd === "clear") {
      setLines(BANNER);
      return;
    }
    setLines((prev) => [
      ...prev,
      { kind: "in", text: cmd },
      ...run(cmd).map((text): Line => ({ kind: "out", text })),
    ]);
  }

  return (
    <section id="terminal" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading
        index="03 / SHELL"
        title="Interactive system terminal"
        subtitle="Query the profile directly. Try help, skills, education, projects, contact or clear."
      />

      <div className="glass overflow-hidden rounded-xl">
        <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
          <span className="size-3 rounded-full bg-destructive/70" />
          <span className="size-3 rounded-full bg-amber-400/70" />
          <span className="size-3 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            phumzile@wil — bash
          </span>
        </div>

        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="h-80 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
        >
          {lines.map((l, i) => (
            <p key={i} className={l.kind === "in" ? "text-foreground" : "text-muted-foreground"}>
              {l.kind === "in" ? <span className="text-primary">$ </span> : null}
              {l.text}
            </p>
          ))}

          <form onSubmit={submit} className="mt-1 flex items-center gap-2">
            <label htmlFor="terminal-input" className="text-primary">
              $
            </label>
            <input
              id="terminal-input"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command input"
              placeholder="type a command…"
              className="flex-1 bg-transparent text-foreground caret-primary outline-none placeholder:text-muted-foreground/50"
            />
          </form>
        </div>
      </div>
    </section>
  );
}