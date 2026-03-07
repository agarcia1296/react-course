import { NavLink } from "react-router";
import { HomeButton } from "../../utils/HomeButton";
import "./Auth.css";

export function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <>
      <HomeButton />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Sign In to PressPlay</h1>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <label>
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
