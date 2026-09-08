import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company: string;
  country?: string;
  requirement: string;
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

  const { name, email, company, requirement } = payload;

  if (!name?.trim() || !email?.trim() || !company?.trim() || !requirement?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // NOTE: wire this up to the team's CRM / email provider (e.g. via an env-configured
  // webhook or transactional email API) before going live. Logged server-side for now.
  console.log("[contact] New demo request:", {
    name,
    email,
    company,
    country: payload.country,
    phone: payload.phone,
    requirement,
  });

  return NextResponse.json({ ok: true });
}
