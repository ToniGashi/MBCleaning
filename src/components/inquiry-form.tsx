"use client";

import { FormEvent, useState } from "react";

type Status = { state: "idle" | "sending" | "success" | "error"; message: string };

export function InquiryForm() {
  const [status, setStatus] = useState<Status>({
    state: "idle",
    message: "Fields marked * are required.",
  });

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "sending", message: "Sending…" });

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send the inquiry.");
      }

      form.reset();
      setStatus({
        state: "success",
        message: "Thanks! We got your message and will be in touch soon.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send the inquiry. Please try again.",
      });
    }
  }

  return (
    <form className="inquiry-form" id="inquiry" onSubmit={submitInquiry}>
      <div className="field">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company *</label>
        <input id="company" name="company" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone *</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="location">Where is the job? *</label>
        <input id="location" name="location" autoComplete="address-level2" required />
      </div>
      <div className="field">
        <label htmlFor="phase">Which clean do you need? *</label>
        <select id="phase" name="phase" defaultValue="" required>
          <option value="" disabled>Choose one</option>
          <option>Rough clean</option>
          <option>Final clean</option>
          <option>Touch-up clean</option>
          <option>More than one</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Tell us about the homes *</label>
        <textarea
          id="message"
          name="message"
          placeholder="How many homes, what stage they’re in, and when they’ll be ready"
          required
        />
      </div>
      <div className="field honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-footer">
        <p className="form-status" data-state={status.state} aria-live="polite">
          {status.message}
        </p>
        <button className="button button-primary" type="submit" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

