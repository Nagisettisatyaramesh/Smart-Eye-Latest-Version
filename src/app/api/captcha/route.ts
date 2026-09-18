import { NextResponse } from "next/server";
import { generateCaptchaCode, renderCaptchaSvg, signCaptchaToken } from "@/lib/captcha";

// Public — anyone loading a form needs a fresh challenge, including anyone
// not yet authenticated. The signed token (not the plain code) is what
// proves the image and the eventual answer belong together.
export async function GET() {
  const code = generateCaptchaCode();
  const [svg, token] = await Promise.all([Promise.resolve(renderCaptchaSvg(code)), signCaptchaToken(code)]);
  return NextResponse.json({ svg, token });
}
