import { useState } from "react";

export function VerifyEmailPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/verify", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        code,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Verify Your Email</h1>

        <form onSubmit={handleVerify}>
          <label>Email</label>

          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Verification Code</label>

          <input value={code} onChange={(e) => setCode(e.target.value)} />

          <button className="primary-btn">Verify Email</button>
        </form>
      </div>
    </div>
  );
}
