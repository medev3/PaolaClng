"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";

const inputClass =
  "mt-1 block w-full px-4 py-3 rounded-md bg-background border border-input text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent";

export function Contact() {
  const [state, handleSubmit] = useForm(site.formspreeId);

  return (
    <section
      id="contact"
      className="px-6 lg:px-8 py-20 bg-section-alt section-band-top"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow label="Contact" />
          <h2
            className="font-heading text-3xl md:text-5xl text-foreground mb-3 uppercase tracking-tight"
          >
            Request a quote
          </h2>
          <p className="text-muted-foreground font-body mb-10">
            Fill out the form for a personalized quote. Our team will respond
            promptly with details tailored to your home.
          </p>

          {state.succeeded ? (
            <div
              className="rounded-xl border border-success/40 bg-card/50 p-8 text-center"
              role="status"
            >
              <p className="font-heading text-xl text-success uppercase tracking-tight">
                Thank you for your submission!
              </p>
              <p className="text-muted-foreground font-body mt-2">
                We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6 md:p-10 space-y-6 shadow-brand-sm"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider text-muted-foreground font-body"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  maxLength={50}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-destructive text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-muted-foreground font-body"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  maxLength={250}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-destructive text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-wider text-muted-foreground font-body"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  maxLength={50}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                  className="text-destructive text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs uppercase tracking-wider text-muted-foreground font-body"
                >
                  Type of service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  {site.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ValidationError
                  prefix="Service"
                  field="service"
                  errors={state.errors}
                  className="text-destructive text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-xs uppercase tracking-wider text-muted-foreground font-body"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  required
                  maxLength={250}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Address"
                  field="address"
                  errors={state.errors}
                  className="text-destructive text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="ServiceDate"
                  className="block text-xs uppercase tracking-wider text-muted-foreground font-body"
                >
                  Preferred date
                </label>
                <input
                  id="ServiceDate"
                  type="date"
                  name="ServiceDate"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Date"
                  field="ServiceDate"
                  errors={state.errors}
                  className="text-destructive text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-muted-foreground font-body"
                >
                  Additional comments
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={250}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-destructive text-sm mt-1"
                />
              </div>

              <Button type="submit" disabled={state.submitting} className="w-full">
                {state.submitting ? "Sending…" : "Submit"}
              </Button>
              <ValidationError
                errors={state.errors}
                className="text-destructive text-sm"
              />
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
