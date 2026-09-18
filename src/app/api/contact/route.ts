import { NextResponse } from "next/server";
import { verifyCaptchaAnswer } from "@/lib/captcha";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  requirement?: string; // Get a Demo form
  message?: string; // Contact Us form
  formType?: "contact" | "demo";
  captchaToken?: string;
  captchaAnswer?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, formType, captchaToken, captchaAnswer } = payload;
  const isDemo = formType !== "contact";
  const body = (isDemo ? payload.requirement : payload.message) ?? "";

  if (!name?.trim() || !email?.trim() || !body.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (isDemo && !payload.company?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const captchaOk = await verifyCaptchaAnswer(captchaToken, captchaAnswer);
  if (!captchaOk) {
    return NextResponse.json({ error: "CAPTCHA_MISMATCH" }, { status: 400 });
  }

  // NOTE: wire this up to the team's CRM / email provider (e.g. via an env-configured
  // webhook or transactional email API) before going live. Logged server-side for now.
  console.log(`[contact] New ${isDemo ? "demo request" : "contact message"}:`, {
    name,
    email,
    company: payload.company,
    country: payload.country,
    phone: payload.phone,
    body,
  });

  return NextResponse.json({ ok: true });
}
