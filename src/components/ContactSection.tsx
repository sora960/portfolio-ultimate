"use client";

import React, { useState } from "react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

type FormState = "IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR";

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormState>("IDLE");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.warn("NEXT_PUBLIC_WEB3FORMS_KEY is not defined. Falling back to local simulation.");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* ── Split Invitation: left identity + right form ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT: Identity + availability — no card, raw text on background */}
          <Reveal className="lg:w-80 shrink-0 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-2">
              <h2 className="text-display font-sans text-neutral-900 dark:text-neutral-50">
                Contact
              </h2>
            </div>

            <p className="text-descriptor max-w-[240px]">
               Currently open for new projects, collaborations, and full-time opportunities.
            </p>

            {/* Social links — balanced 3-column glass buttons on mobile, column on desktop */}
            <div className="grid grid-cols-3 lg:flex lg:flex-col gap-2 sm:gap-2.5 pt-2 w-full">
              {[
                { label: "GitHub", href: "https://github.com/sora960", tag: "@sora960" },
                { label: "LinkedIn", href: "https://linkedin.com/in/jairzon-gimeno", tag: "Jairzon" },
                { label: "Indeed", href: "https://indeed.com", tag: "Profile" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-thickness-thin bg-black/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 px-2.5 sm:px-4 py-2.5 rounded-2xl flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left text-xs font-sans font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-black/10 dark:hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-sm min-h-[44px] gap-0.5 sm:gap-0"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-medium text-neutral-500 dark:text-neutral-400">{link.tag} ↗</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* RIGHT: Glass squircle form card */}
          <Reveal delay={150} className="flex-1 w-full">
            <Card className="rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 w-full">
              {status === "SUCCESS" ? (
                <div className="text-center py-10 space-y-4">
                  <Badge label="Message Sent" variant="active" />
                  <h3 className="text-headline font-sans text-neutral-900 dark:text-neutral-100">Thank You</h3>
                  <p className="text-sm font-sans text-neutral-500 dark:text-neutral-400">
                     Respond to the message shortly.
                  </p>
                  <button
                    onClick={() => setStatus("IDLE")}
                    className="mt-2 px-5 py-2.5 rounded-full text-sm font-sans font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity min-h-[44px]"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                  {/* Name */}
                  <div className="space-y-1.5" suppressHydrationWarning>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 pl-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === "SUBMITTING"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      suppressHydrationWarning
                      className="w-full px-4 sm:px-5 py-3 rounded-full text-sm font-sans bg-black/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-white/30 focus:bg-white/60 dark:focus:bg-black/40 disabled:opacity-50 transition-all min-h-[44px]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5" suppressHydrationWarning>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 pl-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      disabled={status === "SUBMITTING"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      suppressHydrationWarning
                      className="w-full px-4 sm:px-5 py-3 rounded-full text-sm font-sans bg-black/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-white/30 focus:bg-white/60 dark:focus:bg-black/40 disabled:opacity-50 transition-all min-h-[44px]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5" suppressHydrationWarning>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 pl-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={status === "SUBMITTING"}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, opportunity, or question..."
                      suppressHydrationWarning
                      className="w-full px-4 sm:px-5 py-4 rounded-[20px] text-sm font-sans bg-black/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-white/30 focus:bg-white/60 dark:focus:bg-black/40 disabled:opacity-50 transition-all resize-none min-h-[100px]"
                    />
                  </div>

                  {status === "ERROR" && (
                    <p className="text-xs font-mono text-rose-500">Unable to send message. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "SUBMITTING"}
                    className={`w-full py-3.5 rounded-full text-sm font-sans font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 transition-all duration-500 cursor-pointer shadow-md flex items-center justify-center gap-2 min-h-[44px] ${
                      status === "SUBMITTING"
                        ? "opacity-90 scale-95"
                        : status === "ERROR"
                        ? "bg-rose-600 dark:bg-rose-500 animate-bounce"
                        : "hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                  >
                    {status === "SUBMITTING" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Message...</span>
                      </span>
                    ) : status === "ERROR" ? (
                      <span>Failed — Try Again</span>
                    ) : (
                      <span>Send Message →</span>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neutral-200/40 dark:border-white/5 flex items-center justify-between gap-4 text-xs font-mono text-neutral-400 dark:text-neutral-500">
          <p>© 2026 Jairzon. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};
