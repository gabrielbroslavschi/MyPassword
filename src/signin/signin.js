import React from "react";
import style from "./signin.module.css";

function Signup() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeUsername = (value) => {
    setUsername(value.target.value);
  };

  const handleChangePassword = (value) => {
    setPassword(value.target.value);
  };

  return (
    <div className={style['main-container']}>
      <main className={style.container}>
        <h2>Sign In</h2>
        <form>
          <div className={style["input-field"]}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleChangeUsername}
            ></input>
            <div className={style.underline}></div>
          </div>

          <div className={style["input-field"]}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            ></input>
            <div className={style.underline}></div>
          </div>

          <input type="submit" value="Continue"></input>
        </form>

        <div className={style.footer}>
          <span>
            Do not have an account? <a href="google.com">Sign up.</a>
          </span>
        </div>
      </main>
    </div>
  );
}

export default Signup;