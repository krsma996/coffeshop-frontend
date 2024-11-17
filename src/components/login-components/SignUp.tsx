import "./login.css";

export const SignUp: React.FC<{ toggleForms: () => void }> = ({
  toggleForms,
}) => {
  return (
    <div className="form-wrapper sign-up">
      <form action="">
        <h2 className="sign-up-title">Sign Up</h2>
        <div className="input-group">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="input-group">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="remember">
          <label>
            <input type="checkbox" />I agree to the terms & conditions
          </label>
        </div>
        <button type="submit">Sign Up</button>
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
