export default function AdminAccountPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ice-100">Admin Account</h1>
      <p className="mt-2 text-sm text-ice-400">
        The admin password is configured via the <code className="text-ice-200">ADMIN_PASSWORD</code> (or{" "}
        <code className="text-ice-200">ADMIN_PASSWORD_HASH</code>) environment variable. To change it, update the
        environment variable and redeploy — it is never stored or editable from the browser.
      </p>
    </div>
  );
}
