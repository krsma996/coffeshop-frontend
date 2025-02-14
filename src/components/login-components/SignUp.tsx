import axios from "axios";
import "./login.css";
import { useState } from "react";

export const SignUp: React.FC<{ toggleForms: () => void }> = ({
  toggleForms,
}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Tipiziraj error kao string | null
  const [response, setResponse] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Koristimo axios za slanje POST zahtjeva
      const response = await axios.get("http://localhost:8080/car/api/test");

      setResponse(response.data); // Postavljamo odgovor sa servera
      console.log(response.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Postavljamo grešku ako je došlo do problema
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false); // Gasimo loading stanje
    }
  };
  return (
    <div className="form-wrapper sign-up">
      <form onSubmit={handleLogin}>
        <h2 className="sign-up-title">Sign Up</h2>
        <div className="input-group">
          <input
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="input-group">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="remember">
          <label>
            <input type="checkbox" />I agree to the terms & conditions
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Sign Up"}
        </button>
        {error && <p className="error">{error}</p>}
        {response && <p className="success">Login successful!</p>}
        <div className="signUp-link">
          <p>
            Already have an account ?
            <a
              href="#"
              className="signInBtn-link"
              onClick={(e) => {
                e.preventDefault();
                toggleForms();
              }}
            >
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
