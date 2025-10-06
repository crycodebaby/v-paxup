// src/pages/Contact.tsx
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CalendarDays,
  Send,
  Loader2,
  CheckCircle2,
  Building2,
  User,
  MessageSquareText,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import UpRot from "@/assets/logo/Up_rot.png";
import UpWeiss from "@/assets/logo/Up_weiss.png";

const CAL_URL = "https://cal.com/paxup";

/* ─────────────────────────────────────────────────────────
   Schema & Types (Du-Formulierungen)
────────────────────────────────────────────────────────── */
const ContactSchema = z.object({
  name: z.string().min(2, "Mindestens 2 Zeichen, bitte."),
  email: z.string().email("Bitte eine gültige E-Mail eingeben."),
  phone: z
    .string()
    .optional()
    .transform((v) => (v ?? "").trim()),
  topic: z.enum(["beratung", "angebot", "kooperation", "support", "sonstiges"]),
  message: z.string().min(10, "Mindestens 10 Zeichen, bitte."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Bitte deine Einwilligung bestätigen." }),
  }),
  // Honeypot
  company: z.string().max(0, "Bot erkannt."),
});

type ContactForm = z.infer<typeof ContactSchema>;

function encodeMailto({ name, email, phone, topic, message }: ContactForm) {
  const subject = `Kontaktanfrage (${topic}) – ${name}`;
  const bodyLines = [
    `Name: ${name}`,
    `E-Mail: ${email}`,
    phone ? `Telefon: ${phone}` : undefined,
    `Thema: ${topic}`,
    "",
    "Nachricht:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:support@paxup.de?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(bodyLines)}`;
}

/* ─────────────────────────────────────────────────────────
   Apple-Style Field (nur EIN Fokusrahmen, Floating Label)
────────────────────────────────────────────────────────── */
function Field({
  id,
  label,
  icon,
  children,
  error,
}: {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode; // input | textarea | select
  error?: string;
}) {
  return (
    <div
      className="
        group relative rounded-2xl border border-border/60 bg-card/70
        backdrop-blur supports-[backdrop-filter]:bg-card/60
        transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]
        hover:shadow-card focus-within:shadow-elegant
        focus-within:-translate-y-[1px]
        focus-within:border-[hsl(var(--secondary))]
        dark:focus-within:border-[hsl(var(--primary))]
      "
    >
      <div className="relative flex items-start gap-3 px-4 py-3 md:px-5 md:py-4">
        {icon ? (
          <span
            className="
              mt-[2px] grid h-8 w-8 place-content-center rounded-xl
              bg-white/5 text-muted-foreground
            "
          >
            {icon}
          </span>
        ) : null}

        <div className="relative w-full">
          {/* Floating Label */}
          <span
            className="
              pointer-events-none absolute left-0 top-2
              text-sm text-muted-foreground/90
              transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
              peer-focus:-top-3 peer-focus:text-xs
              peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-xs
            "
          >
            {label}
          </span>

          {/* children = Input/Select/Textarea (peer) */}
          {children}

          {error ? (
            <p className="mt-1 text-[13px] text-red-600">{error}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Seite
────────────────────────────────────────────────────────── */
export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    mode: "onTouched",
    defaultValues: {
      topic: "beratung",
      company: "", // honeypot
    },
  });

  const topics = useMemo(
    () => [
      { value: "beratung", label: "Kostenlose Erstberatung" },
      { value: "angebot", label: "Angebot / Projektanfrage" },
      { value: "kooperation", label: "Kooperation / Partnerschaft" },
      { value: "support", label: "Support / Bestehendes Projekt" },
      { value: "sonstiges", label: "Sonstiges" },
    ],
    []
  );

  const onSubmit = async (data: ContactForm) => {
    try {
      setSubmitting(true);
      const link = encodeMailto(data);
      window.location.href = link;

      const plain = `Kontaktanfrage (${data.topic}) – ${data.name}
E-Mail: ${data.email}
${data.phone ? `Telefon: ${data.phone}\n` : ""}

Nachricht:
${data.message}
`;
      await navigator.clipboard.writeText(plain).catch(() => {});
      toast.success("E-Mail-Entwurf geöffnet. Der Text liegt im Clipboard.");
      reset();
    } catch {
      toast.error("Uups – bitte später nochmal probieren.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Auren + Watermarks */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(36rem 22rem at 18% 10%, hsl(var(--secondary)/0.10), transparent 60%), radial-gradient(32rem 22rem at 84% 0%, hsl(var(--secondary)/0.12), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 hidden dark:block opacity-95"
            style={{
              background:
                "radial-gradient(36rem 22rem at 18% 10%, hsl(var(--primary)/0.10), transparent 60%), radial-gradient(32rem 22rem at 84% 0%, hsl(var(--primary)/0.12), transparent 60%)",
            }}
          />
          <img
            aria-hidden
            src={UpRot}
            alt=""
            className="pointer-events-none absolute right-6 top-8 -z-10 hidden h-24 w-auto opacity-10 sm:block md:right-12 md:top-10 md:h-28"
          />
          <img
            aria-hidden
            src={UpWeiss}
            alt=""
            className="pointer-events-none absolute left-8 bottom-8 -z-10 hidden h-16 w-auto opacity-10 sm:block"
          />

          <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--secondary)/0.35)] bg-[hsl(var(--secondary)/0.08)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[hsl(var(--secondary))] dark:border-[hsl(var(--primary)/0.45)] dark:bg-[hsl(var(--primary)/0.12)] dark:text-[hsl(var(--primary))]">
                Wir antworten in der Regel innerhalb von 24h
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Kontakt aufnehmen
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Ob Frage, Projektidee oder schnelle Einschätzung – wir sind für
                dich da. Wähle: <strong>Formular</strong>,{" "}
                <strong>E-Mail</strong>, <strong>Telefon</strong> oder direkt{" "}
                <strong>Termin buchen</strong>.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--secondary))] text-white hover:brightness-95 dark:bg-[hsl(var(--primary))]"
                  onClick={() => window.open(CAL_URL, "_blank")}
                >
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Termin via Cal.com buchen
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    (window.location.href = "mailto:support@paxup.de")
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail schreiben
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* GRID: Kontaktwege + Formular */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
              {/* Kontaktkarten */}
              <div className="space-y-6">
                <Card className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-soft supports-[backdrop-filter]:bg-card/70 backdrop-blur transition-all">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="grid h-12 w-12 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] dark:bg-[hsl(var(--primary)/0.14)]">
                      <Phone className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Telefon</h3>
                      <p className="text-sm text-muted-foreground">
                        Mo–Fr, 09:00–17:00 Uhr
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:+4964120107130"
                    className="inline-flex items-center gap-2 text-[hsl(var(--secondary))] underline-offset-4 hover:underline dark:text-[hsl(var(--primary))]"
                  >
                    +49 641 20107130
                  </a>
                </Card>

                <Card className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-soft supports-[backdrop-filter]:bg-card/70 backdrop-blur transition-all">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="grid h-12 w-12 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] dark:bg-[hsl(var(--primary)/0.14)]">
                      <MapPin className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Adresse</h3>
                      <p className="text-sm text-muted-foreground">
                        (Postanschrift / Termin nach Vereinbarung)
                      </p>
                    </div>
                  </div>
                  <address className="not-italic text-sm leading-relaxed">
                    Till Rudolph
                    <br />
                    Grünberger Straße 143
                    <br />
                    35394 Gießen
                  </address>
                </Card>

                <Card className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-soft supports-[backdrop-filter]:bg-card/70 backdrop-blur transition-all">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="grid h-12 w-12 place-content-center rounded-xl bg-[hsl(var(--secondary)/0.14)] dark:bg-[hsl(var(--primary)/0.14)]">
                      <ShieldCheck className="h-6 w-6 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Datenschutz</h3>
                      <p className="text-sm text-muted-foreground">
                        DSGVO-konforme Verarbeitung – Details in unserer{" "}
                        <a
                          href="/datenschutz"
                          className="text-[hsl(var(--secondary))] underline-offset-4 hover:underline dark:text-[hsl(var(--primary))]"
                        >
                          Datenschutzerklärung
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Formular */}
              <Card className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 md:p-8 shadow-card supports-[backdrop-filter]:bg-card/60 backdrop-blur">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Schreib uns
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Wir melden uns in der Regel innerhalb eines Werktags.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-4"
                  noValidate
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    {...register("company")}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Dein Name"
                      icon={<User className="h-4 w-4" />}
                      error={errors.name?.message}
                    >
                      <input
                        id="name"
                        className="
                          peer w-full bg-transparent pt-6 pb-2 text-sm
                          outline-none border-0 focus:border-transparent
                          focus:ring-0 focus-visible:shadow-none focus-visible:outline-none
                          placeholder:text-transparent
                        "
                        type="text"
                        placeholder=" "
                        {...register("name")}
                      />
                    </Field>

                    <Field
                      id="email"
                      label="E-Mail"
                      icon={<Mail className="h-4 w-4" />}
                      error={errors.email?.message}
                    >
                      <input
                        id="email"
                        className="
                          peer w-full bg-transparent pt-6 pb-2 text-sm
                          outline-none border-0 focus:border-transparent
                          focus:ring-0 focus-visible:shadow-none focus-visible:outline-none
                          placeholder:text-transparent
                        "
                        type="email"
                        placeholder=" "
                        autoComplete="email"
                        {...register("email")}
                      />
                    </Field>
                  </div>

                  <Field
                    id="phone"
                    label="Telefon (optional)"
                    icon={<Phone className="h-4 w-4" />}
                    error={errors.phone?.message}
                  >
                    <input
                      id="phone"
                      className="
                        peer w-full bg-transparent pt-6 pb-2 text-sm
                        outline-none border-0 focus:border-transparent
                        focus:ring-0 focus-visible:shadow-none focus-visible:outline-none
                        placeholder:text-transparent
                      "
                      type="tel"
                      placeholder=" "
                      autoComplete="tel"
                      {...register("phone")}
                    />
                  </Field>

                  <Field
                    id="topic"
                    label="Thema"
                    icon={<Building2 className="h-4 w-4" />}
                    error={errors.topic?.message}
                  >
                    <select
                      id="topic"
                      className="
                        peer w-full bg-transparent pt-6 pb-2 text-sm
                        outline-none border-0 focus:border-transparent
                        focus:ring-0 focus-visible:shadow-none focus-visible:outline-none
                        appearance-none pr-6
                      "
                      {...register("topic")}
                    >
                      {topics.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    id="message"
                    label="Deine Nachricht"
                    icon={<MessageSquareText className="h-4 w-4" />}
                    error={errors.message?.message}
                  >
                    <textarea
                      id="message"
                      className="
                        peer w-full bg-transparent pt-6 pb-2 text-sm
                        outline-none border-0 focus:border-transparent
                        focus:ring-0 focus-visible:shadow-none focus-visible:outline-none
                        placeholder:text-transparent min-h-[140px] resize-y
                      "
                      placeholder=" "
                      {...register("message")}
                    />
                  </Field>

                  <label className="mt-1 flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      className="
                        mt-0.5 h-4 w-4 rounded border-input
                        text-[hsl(var(--secondary))] focus:ring-[hsl(var(--secondary))]
                        dark:text-[hsl(var(--primary))] dark:focus:ring-[hsl(var(--primary))]
                      "
                      {...register("consent")}
                    />
                    <span>
                      Ich stimme der Verarbeitung meiner Daten gemäß{" "}
                      <a
                        href="/datenschutz"
                        className="underline underline-offset-2"
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      zu.
                    </span>
                  </label>
                  {errors.consent?.message && (
                    <p className="text-[13px] text-red-600">
                      {errors.consent.message}
                    </p>
                  )}

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!isValid || submitting}
                      className="min-w-[220px] bg-[hsl(var(--secondary))] text-white hover:brightness-95 dark:bg-[hsl(var(--primary))]"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Wird gesendet…
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Nachricht senden
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => window.open(CAL_URL, "_blank")}
                      className="border-border"
                    >
                      <CalendarDays className="mr-2 h-5 w-5" />
                      Direkt Termin buchen
                    </Button>
                  </div>

                  <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4" />
                    DSGVO-konform, verschlüsselte Übertragung (HTTPS).
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ / Micro-Trust */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {[
                {
                  Icon: Clock,
                  title: "Antwortzeit",
                  text: "Wir melden uns i. d. R. innerhalb von 24 Stunden.",
                },
                {
                  Icon: CheckCircle2,
                  title: "Ohne Verpflichtung",
                  text: "Erstberatung ist kostenlos & unverbindlich.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Sicher & transparent",
                  text: "Daten nur zur Bearbeitung deiner Anfrage.",
                },
              ].map(({ Icon, title, text }) => (
                <Card
                  key={title}
                  className="rounded-2xl border border-border/80 bg-card/80 p-5 shadow-soft backdrop-blur"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-[hsl(var(--secondary))] dark:text-[hsl(var(--primary))]" />
                    <h3 className="text-sm font-semibold">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
