import { motion } from "motion/react";
import { Cpu, Database, Network, Code2 } from "lucide-react";
import { competencies } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

const icons = [Cpu, Database, Network, Code2];

export function Competencies() {
  return (
    <section id="competencies" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading
        index="01 / COMPETENCIES"
        title="Engineering competencies"
        subtitle="Skills grouped the way they get used on the job — from the silicon up to the browser."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {competencies.map((c, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass group rounded-xl p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-medium">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}