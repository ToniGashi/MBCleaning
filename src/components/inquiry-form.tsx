"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { inquiryPhases } from "@/lib/site";

type Status = { state: "idle" | "sending" | "error"; message: string };

type Confirmation = {
  phase: string;
  location: string;
  phone: string;
};

export function InquiryForm({ initialPhase = "" }: { initialPhase?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });
  const [phaseState, setPhaseState] = useState({ source: initialPhase, value: initialPhase });
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const confirmationRef = useRef<HTMLHeadingElement>(null);

  if (phaseState.source !== initialPhase) {
    setPhaseState({ source: initialPhase, value: initialPhase });
  }

  const phase = phaseState.source === initialPhase ? phaseState.value : initialPhase;

  useEffect(() => {
    if (confirmation) confirmationRef.current?.focus();
  }, [confirmation]);

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

      setConfirmation({
        phase: String(data.phase ?? ""),
        location: String(data.location ?? ""),
        phone: String(data.phone ?? ""),
      });
      setStatus({ state: "idle", message: "" });
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

  function sendAnother() {
    setConfirmation(null);
    setPhaseState({ source: initialPhase, value: initialPhase });
    setStatus({ state: "idle", message: "" });
  }

  if (confirmation) {
    return (
      <div className="inquiry-confirmation" id="inquiry">
        <h3 ref={confirmationRef} tabIndex={-1}>
          We got your message.
        </h3>
        <p>
          We’ll call or text {confirmation.phone}. You asked about {confirmation.phase} in {confirmation.location}.
        </p>
        <button className="button button-primary" type="button" onClick={sendAnother}>
          Send another message
        </button>
      </div>
    );
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
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="location">Where is the job? *</label>
        <input id="location" name="location" autoComplete="address-level2" required />
      </div>
      <div className="field">
        <label htmlFor="phase">Which clean do you need? *</label>
        <select
          id="phase"
          name="phase"
          value={phase}
          onChange={(event) => setPhaseState({ source: initialPhase, value: event.target.value })}
          required
        >
          <option value="" disabled>
            Choose one
          </option>
          {inquiryPhases.map((item) => (
            <option key={item.slug} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="homes">How many homes?</label>
        <input id="homes" name="homes" autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="timing">When will they be ready?</label>
        <input id="timing" name="timing" autoComplete="off" />
      </div>
      <div className="field full">
        <label htmlFor="message">Anything else?</label>
        <textarea id="message" name="message" />
      </div>
      <div className="field honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-footer">
        <p className="form-help">
          Phone is enough for us to reply. Email, home count, and timing help if you have them.
        </p>
        <p className="form-status" data-state={status.state} aria-live="polite">
          {status.state === "sending" || status.state === "error" ? status.message : ""}
        </p>
        <button className="button button-primary" type="submit" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
