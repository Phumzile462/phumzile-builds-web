import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted-foreground"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Status: Available for 12-Month WIL
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-7 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
        >
          Phumzile Nokwazi{" "}
          <span className="glow-text text-primary">Moeketsi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg"
        >
          Computer Systems Engineering student specializing in C++, SQL, Networking, and
          Full-Stack Development. Seeking a 12-Month Work-Integrated Learning (WIL) placement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#projects">
              View Technical Projects
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#contact">
              <Mail className="size-4" aria-hidden />
              Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          {profile.role}
        </motion.p>
      </div>
    </section>
  );
}