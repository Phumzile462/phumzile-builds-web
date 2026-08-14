import { motion } from "motion/react";
import { Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02 / PROJECTS"
          title="Featured showcase projects"
          subtitle="Three case studies spanning database engineering, network infrastructure and full-stack process control."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass flex flex-col rounded-xl p-6 transition-colors hover:border-primary/40"
            >
              <span className="font-mono text-[11px] tracking-widest text-primary uppercase">
                {p.category}
              </span>
              <h3 className="mt-3 text-lg font-medium text-balance">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="mt-6 justify-start px-0 text-primary">
                    <Layers className="size-4" aria-hidden />
                    Architecture overview
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-balance">{p.title}</DialogTitle>
                    <DialogDescription>{p.description}</DialogDescription>
                  </DialogHeader>
                  <ul className="space-y-3 font-mono text-sm">
                    {p.architecture.map((a) => (
                      <li key={a} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary">›</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}