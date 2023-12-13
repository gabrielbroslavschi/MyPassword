import React from "react";
import style from "./signup.module.css";

function Signup() {
  return (
    <div className={style["main-container"]}>
      <div className={style.container}>
        <form className={style["container-form"]}>
          <h2>Sign Up</h2>
          <div className={style["input-field"]}>
            <p>Username</p>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              // value={username}
              // onChange={handleChangeUsername}
            ></input>
            <div className={style.underline}></div>
          </div>

          <div className={style["input-field"]}>
            <p>E-mail</p>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              // value={username}
              // onChange={handleChangeUsername}
            ></input>
            <div className={style.underline}></div>
          </div>

          <div className={style["input-field"]}>
            <p>Password</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              // value={password}
              // onChange={handleChangePassword}
            ></input>
            <div className={style.underline}></div>
          </div>

          <div className={style["input-field"]}>
            <p>Confirm your Password</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              // value={password}
              // onChange={handleChangePassword}
            ></input>
            <div className={style.underline}></div>
          </div>

          <input type="submit" value="Continue"></input>
        </form>
      </div>

      <div className={style.container}>
        <div className={style["container-text"]}>
          <form>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              reiciendis provident saepe quisquam fugit aut fuga sit voluptas!
              Asperiores soluta qui sint laboriosam, expedita tenetur a nisi
              eaque saepe iusto dolore molestias quos exercitationem, eos iure,
              accusamus facilis repellat quaerat impedit corrupti magnam aliquam
              et? Qui libero deserunt vitae totam.
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
