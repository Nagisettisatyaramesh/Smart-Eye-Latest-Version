"use client";

import { useCallback, useEffect, useState } from "react";

export function useCaptcha() {
  const [svg, setSvg] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/captcha");
      const data = await res.json();
      setSvg(data.svg);
      setToken(data.token);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { svg, token, answer, setAnswer, refresh, loading };
}

export type CaptchaState = ReturnType<typeof useCaptcha>;
