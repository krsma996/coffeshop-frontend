import "./login.css";

export const Login: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="form-wrapper sign-in">
        <form action="">
          <h2>Login</h2>
          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember me ?
            </label>
          </div>
          <button type="submit">Login</button>
          <div className="signUp-link">
            <p>
              Don't have an account ?
              <a href="#" className="signUpBtn-link">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
