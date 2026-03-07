import { NavLink } from "react-router";
import { HomeButton } from "../../utils/HomeButton";
import "./Auth.css";

export function ForgotPasswordPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password requested");
  };

  return (
    <>
      <HomeButton />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Forgot Password</h1>

          <p>Enter your email and we will send you a reset link.</p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <button type="submit" className="primary-btn">
              Send Reset Link
            </button>
          </form>

          <div className="auth-links">
            <NavLink to="/login">Back to Sign In</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
