import { NextResponse } from "next/server";

const requiredFields = ["name", "company", "phone", "email", "location", "phase", "message"] as const;

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

  const inquiry = Object.fromEntries(
    requiredFields.map((field) => [field, clean(body[field])]),
  ) as Record<(typeof requiredFields)[number], string>;

  const missing = requiredFields.some((field) => !inquiry[field]);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email);

  if (missing || !emailValid) {
    return NextResponse.json(
      { message: "Complete every required field and use a valid email address." },
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
        ...inquiry,
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

