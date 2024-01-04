import React from "react";
import style from "./signin.module.css";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function Signup() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [handleChangeStyle, setHandleChangeStyle] = React.useState({
    display: "none",
  });

  const navigate = useNavigate();

  // if(username === "teste" && password === "1234"){
  //   e.preventDefault();
  //   navigate(`/home/${username}/${password}`);
  // }

  const handleChangeEmail = (value) => {
    setEmail(value.target.value);
  };

  const handleChangePassword = (value) => {
    setPassword(value.target.value);
  };

  const notUser = () => {
    let style = {
      display: "block",
      color: "red",
      marginTop: "0.6rem",
    };
    setHandleChangeStyle(style);
  };

  const notifyError = (text) => toast.error(text);

  const handleLogin = async (e) => {
    const login = {
      email: email,
      senha: password,
    };

    axios
      .post(`http://localhost:3001/registro`, login)
      .then(({ data }) => {
        if (data.cadastrado) {
          const { nome, email, senha } = data.usuario;
          const token = data.token

          const user = { nome, email, senha };
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          e.preventDefault();
          navigate(`/home/perfil/${nome}`);
        } else {
          notifyError("User not found");
          notUser();
        }
      })
      .catch((err) => {
        notifyError("Unable to register");
      });
  };

  return (
    <div className={style["main-container"]}>
      <main className={style.container}>
        <h2>Sign In</h2>
        <form>
          <div className={style["input-field"]}>
            <p>
              E-mail <e className={style["required"]}>*</e>
            </p>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChangeEmail}
            ></input>
            <div className={style.underline}></div>
          </div>

          <p style={handleChangeStyle}>Required Field.</p>

          <div className={style["input-field"]}>
            <p>
              Senha <e className={style["required"]}>*</e>
            </p>
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

          <p style={handleChangeStyle}>Required Field.</p>

          <input
            className={style["button"]}
            type="button"
            value="Continue"
            onClick={handleLogin}
          ></input>
        </form>

        <div className={style.footer}>
          <span>
            Do not have an account? <a href="/signup">Sign up.</a>
          </span>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default Signup;
