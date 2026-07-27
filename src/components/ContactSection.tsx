"use client";

import React, { useState } from "react";
import { Card } from "./Card";
import { Badge } from "./Badge";

type FormState = "IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR";

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormState>("IDLE");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    try {
      // Endpoint integration point (Web3Forms/Formspree API endpoint)
      // Simulated 1s network request for local verification
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-center">
          <Badge label="#contact" variant="default" />
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Initiate Contact
          </h2>
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
            Direct communication pipeline with client-side state machine
          </p>
        </div>

        {/* Contact Card Container */}
        <div className="relative group">
          {/* Backstage Refraction Shape - Orange Rose gradient sphere */}
          <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-tr from-amber-500 to-rose-500 rounded-full select-none pointer-events-none group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          
          <Card className="p-8 relative z-10">
            {status === "SUCCESS" ? (
              <div className="text-center py-8 space-y-4">
                <Badge label="TRANSMISSION_RECEIVED" variant="active" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  Message Received
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "SUBMITTING"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 text-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white/60 dark:focus:bg-black/40 focus:border-neutral-400 dark:focus:border-white/30 focus:ring-1 focus:ring-neutral-400/30 dark:focus:ring-white/20 disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    disabled={status === "SUBMITTING"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 text-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white/60 dark:focus:bg-black/40 focus:border-neutral-400 dark:focus:border-white/30 focus:ring-1 focus:ring-neutral-400/30 dark:focus:ring-white/20 disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    disabled={status === "SUBMITTING"}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe project scope, technical requirements, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 text-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white/60 dark:focus:bg-black/40 focus:border-neutral-400 dark:focus:border-white/30 focus:ring-1 focus:ring-neutral-400/30 dark:focus:ring-white/20 disabled:opacity-50 transition-all resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === "ERROR" && (
                  <p className="text-xs font-mono text-rose-500">
                    [ERROR] Failed to send message. Please try again.
                  </p>
                )}

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={status === "SUBMITTING"}
                  className="w-full py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {status === "SUBMITTING" ? (
                    <span>[TRANSMITTING...]</span>
                  ) : (
                    <span>Send Message →</span>
                  )}
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
