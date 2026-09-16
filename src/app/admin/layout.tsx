// Deliberately minimal — the admin portal never renders the public site's
// Nav, Footer, chatbot widget or grain overlay (those live in
// src/app/(marketing)/layout.tsx instead). Auth is enforced by
// src/middleware.ts, not here.
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-navy-950 text-ice-100">{children}</div>;
}
