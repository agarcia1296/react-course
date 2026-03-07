import { NavLink } from "react-router";
import { HomeButton } from "../../utils/HomeButton";
import "./Auth.css";

export function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <>
      <HomeButton />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Create Account</h1>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Create a password" required />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" required />

            <button type="submit" className="primary-btn">
              Create Account
            </button>
          </form>

          <div className="auth-links">
            <NavLink to="/login">Already have an account? Sign In</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
