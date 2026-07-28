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

    try {
      // Simulated 1s network request for verification
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2 text-center">
            <Badge label="contact" variant="default" />
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Get in Touch
            </h2>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              Let's build something together. Drop a message below to get in touch.
            </p>
          </div>
        </Reveal>

        {/* Contact Card Container */}
        <Reveal delay={150}>
          <div className="relative group max-w-xl mx-auto">
            <Card glowColor="rose" className="p-8 relative z-10 rounded-[45px]">
              {status === "SUCCESS" ? (
                <div className="text-center py-8 space-y-4">
                  <Badge label="Message Sent" variant="active" />
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Thank You
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
                    Thank you for reaching out. I will respond to your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setStatus("IDLE")}
                    className="mt-4 px-4 py-2 rounded-full text-xs font-mono bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300 pl-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === "SUBMITTING"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 text-neutral-900 dark:text-neutral-100 text-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white/60 dark:focus:bg-black/40 focus:border-neutral-400 dark:focus:border-white/30 disabled:opacity-50 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300 pl-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      disabled={status === "SUBMITTING"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 text-neutral-900 dark:text-neutral-100 text-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white/60 dark:focus:bg-black/40 focus:border-neutral-400 dark:focus:border-white/30 disabled:opacity-50 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300 pl-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={status === "SUBMITTING"}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe project scope, technical requirements, or opportunity..."
                      className="w-full px-6 py-4 rounded-[24px] bg-black/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 text-neutral-900 dark:text-neutral-100 text-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white/60 dark:focus:bg-black/40 focus:border-neutral-400 dark:focus:border-white/30 disabled:opacity-50 transition-all resize-none"
                    />
                  </div>

                  {/* Error Banner */}
                  {status === "ERROR" && (
                    <p className="text-xs font-mono text-rose-500">
                      Unable to send message. Please try again.
                    </p>
                  )}

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={status === "SUBMITTING"}
                    className="w-full py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {status === "SUBMITTING" ? (
                      <span>Sending...</span>
                    ) : (
                      <span>Send Message →</span>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </div>
        </Reveal>

        {/* Minimal Footer */}
        <footer className="mt-24 pt-8 border-t border-neutral-200/50 dark:border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 dark:text-neutral-500">
          <p>© 2026 Jairzon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sora960"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [GITHUB]
            </a>
            <span>/</span>
            <a
              href="https://linkedin.com/in/jairzon-gimeno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [LINKEDIN]
            </a>
            <span>/</span>
            <a
              href="https://jobstreet.com.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [JOBSTREET]
            </a>
            <span>/</span>
            <a
              href="https://indeed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [INDEED]
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
