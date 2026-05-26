import { useState } from "react";
import { NavLink } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { HomeButton } from "../../utils/HomeButton";
import "./Auth.css";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <>
      <div>
        <HomeButton />
      </div>

      <div className="auth-page">
        <div className="auth-card">
          <h1>Sign In to PressPlay</h1>

          <form onSubmit={handleSubmit}>
            <label>Email</label>

            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>

            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <label className="forgot-password-link">
              <NavLink to="/login/forgotpassword">Forgot Password?</NavLink>
            </label>

            <button type="submit" className="auth-btn">
              Sign In
            </button>
          </form>

          <div className="create-account">
            <p>Don't have an account?</p>

            <NavLink to="/login/signup">
              <button className="create-btn">Create Account</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
