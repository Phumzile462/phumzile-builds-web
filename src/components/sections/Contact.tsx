import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Please enter your company or organisation."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(4, "Subject must be at least 4 characters."),
  message: z.string().min(20, "Message must be at least 20 characters."),
});

type FormValues = z.infer<typeof schema>;

const chips = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: profile.location, href: undefined },
];

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    const body = `Name: ${values.name}%0ACompany: ${values.company}%0AEmail: ${values.email}%0A%0A${values.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${body}`;
    toast.success("Opening your email client with the message ready to send.");
    form.reset();
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="05 / CONTACT"
          title="Internship & placement enquiries"
          subtitle="Available immediately for a 12-month Work-Integrated Learning placement in Pretoria or remote."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-3">
            {chips.map((c) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="font-mono text-sm break-all">{c.label}</span>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-primary/40"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="glass flex items-center gap-3 rounded-xl p-4">
                  {inner}
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="glass rounded-xl p-6 sm:p-7"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Dlamini" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recruiter / Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Systems" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@company.co.za" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="12-month WIL placement" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell me about the role, team and start date…"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="size-4" aria-hidden />
                  Send enquiry
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}