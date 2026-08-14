import { motion } from "motion/react";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { education, profile } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading index="04 / EDUCATION" title="Education & academic background" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="glass grid gap-8 rounded-xl p-7 md:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="size-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-medium">{education.qualification}</h3>
              <p className="text-sm text-muted-foreground">{education.institution}</p>
              <p className="mt-1 font-mono text-xs text-primary">{education.graduation}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-pretty">{education.status}</p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Languages: {profile.languages.join(" · ")}
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Key modules passed
          </h4>
          <ul className="mt-4 space-y-3">
            {education.modules.map((m) => (
              <li key={m} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}