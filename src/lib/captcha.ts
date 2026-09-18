import { SignJWT, jwtVerify } from "jose";

// Self-hosted image CAPTCHA (distorted text the visitor retypes) — no
// external service, no API keys to register, works the same in every
// environment. Reuses SESSION_SECRET (same HS256 signing already used for
// admin sessions in src/lib/session.ts) rather than requiring a second
// secret; the payload shape ({ code }) keeps it distinct from a session
// token, and a 10-minute expiry limits how long a generated image stays
// answerable.

// Excludes visually ambiguous characters (0/O, 1/I/L, etc.).
const CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 5;
const EXPIRY = "10m";

function getSecretKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET is not set. Add it to your environment before using the CAPTCHA.");
  }
  return new TextEncoder().encode(secret);
}

export function generateCaptchaCode(): string {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return code;
}

export async function signCaptchaToken(code: string): Promise<string> {
  return new SignJWT({ code })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(EXPIRY)
    .sign(getSecretKey());
}

export async function verifyCaptchaAnswer(token: string | undefined, answer: string | undefined): Promise<boolean> {
  if (!token || !answer?.trim()) return false;
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    const code = payload.code;
    return typeof code === "string" && code.toUpperCase() === answer.trim().toUpperCase();
  } catch {
    return false; // invalid signature or expired
  }
}

const PALETTE = ["#0f766e", "#7c2d12", "#1e3a5f", "#7c1d6f", "#3f6212", "#9a3412"];

// Rendered as SVG (not a rasterized <canvas> image) so it needs no native
// image library — plain string templating, works identically on any
// deploy target including serverless. Per-character rotation/offset/color
// plus scattered noise dots and stray lines approximate the classic
// distorted-text CAPTCHA look.
export function renderCaptchaSvg(code: string): string {
  const width = 160;
  const height = 60;
  const charWidth = width / code.length;

  const letters = code
    .split("")
    .map((ch, i) => {
      const x = charWidth * i + charWidth / 2 + (Math.random() * 8 - 4);
      const y = height / 2 + (Math.random() * 14 - 7);
      const rotation = Math.random() * 34 - 17;
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      const fontSize = 26 + Math.random() * 8;
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${fontSize.toFixed(1)}" font-family="Georgia, 'Times New Roman', serif" font-weight="700" fill="${color}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${rotation.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})">${ch}</text>`;
    })
    .join("");

  const noiseLines = Array.from({ length: 4 }, () => {
    const x1 = Math.random() * width;
    const y1 = Math.random() * height;
    const x2 = Math.random() * width;
    const y2 = Math.random() * height;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#94a3b8" stroke-width="1" opacity="0.4" />`;
  }).join("");

  const noiseDots = Array.from({ length: 60 }, () => {
    const cx = Math.random() * width;
    const cy = Math.random() * height;
    const r = Math.random() * 1.2;
    return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="#64748b" opacity="0.35" />`;
  }).join("");

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#f1ede4" />
    ${noiseDots}
    ${noiseLines}
    ${letters}
  </svg>`;
}
