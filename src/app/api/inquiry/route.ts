import { NextResponse } from "next/server";
import { inquiryPhases } from "@/lib/site";

const requiredFields = ["name", "company", "phone", "location", "phase"] as const;
const optionalFields = ["email", "homes", "timing", "message"] as const;
const allowedPhases = new Set<string>(inquiryPhases.map((phase) => phase.label));

function clean(value: unknown, maxLength = 2_000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Please submit a valid inquiry." }, { status: 400 });
  }

  if (clean(body.website)) {
    return NextResponse.json({ message: "Thanks. Your inquiry was received." });
  }

  const inquiry = {
    ...Object.fromEntries(requiredFields.map((field) => [field, clean(body[field])])),
    ...Object.fromEntries(optionalFields.map((field) => [field, clean(body[field])])),
  } as Record<(typeof requiredFields)[number] | (typeof optionalFields)[number], string>;

  const missing = requiredFields.some((field) => !inquiry[field]);
  const phaseAllowed = allowedPhases.has(inquiry.phase);
  const emailValid = inquiry.email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email);

  if (missing || !phaseAllowed) {
    return NextResponse.json(
      { message: "Complete every required field and choose a clean from the list." },
      { status: 400 },
    );
  }

  if (!emailValid) {
    return NextResponse.json(
      { message: "Use a valid email address, or leave email blank." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        message:
          "Online inquiry delivery is being configured. Please use the published call or text number.",
      },
      { status: 503 },
    );
  }

  try {
    const url = new URL(webhookUrl);
    if (url.protocol !== "https:") throw new Error("Webhook must use HTTPS");

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "mb-cleaning-website",
        submittedAt: new Date().toISOString(),
        ...Object.fromEntries(Object.entries(inquiry).filter(([, value]) => value !== "")),
      }),
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Webhook rejected the inquiry");
  } catch {
    return NextResponse.json(
      { message: "We could not send the inquiry. Please call or text MB Cleaning." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Your inquiry was sent." });
}
