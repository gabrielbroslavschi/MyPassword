import React from "react";
import style from "./signup.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [styleInputError, setStyleInputError] = React.useState(Object);

  const [handleChangeStyleEmailError, setHandleChangeStyleEmailError] = React.useState({
    display: "none",
  });
  const [handleChangeStyleEmail, setHandleChangeStyleEmail] = React.useState({
    display: "none",
  });
  const [handleChangeStyleName, setHandleChangeStyleName] = React.useState({
    display: "none",
  });
  const [handleChangeStylePass, setHandleChangeStylePass] = React.useState({
    display: "none",
  });
  const [handleChangeStyleConfirm, setHandleChangeStyleConfirm] =
    React.useState({ display: "none" });

  const handleChangeEmail = (value) => {
    setHandleChangeStyleEmail({ display: "none" });
    if(!validaEmail(value.target.value)){
      setHandleChangeStyleEmailError({ display: "block", color: "red", marginTop: "0.6rem" });
    }else{
      setHandleChangeStyleEmailError({ display: "none" });
    };
    setEmail(value.target.value);
  };

  const handleChangeName = (value) => {
    setHandleChangeStyleName({ display: "none" });
    setName(value.target.value);
  };

  const handleChangePassword = (value) => {
    setHandleChangeStylePass({ display: "none" });
    setPassword(value.target.value);
  };

  const handleChangeConfirmPassword = (value) => {
    setHandleChangeStyleConfirm({ display: "none" });
    setConfirmPassword(value.target.value);
  };

  const handleChangeConfirmRegister = () => {
    if (
      email === "" ||
      name === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      notifyError();
    }

    if (email === "") {
      setHandleChangeStyleEmail({ display: "block", color: "red", marginTop: "0.6rem" });
    }

    if (name === "") {
      setHandleChangeStyleName({ display: "block", color: "red", marginTop: "0.6rem" });
    }

    if (password === "") {
      setHandleChangeStylePass({ display: "block", color: "red", marginTop: "0.6rem" });
    }

    if (confirmPassword === "") {
      setHandleChangeStyleConfirm({ display: "block", color: "red", marginTop: "0.6rem" });
    }
  };

  const notifyError = () =>
    toast.error(
      "Your registration was not possible. Check that all fields are filled out correctly!"
    );
  const notifySucess = () => toast("Registered successfully!");
  const notify = () => toast("Wow so easy !");

  function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regexEmail.test(email);
  }

  React.useEffect(() => {
    let style;
    if (password !== "" || confirmPassword !== "") {
      if (password !== confirmPassword) {
        style = {
          color: "#E64780 ",
        };
        setStyleInputError(style);
      } else {
        style = {
          color: "#000",
        };
        setStyleInputError(style);
      }
    } else {
      style = {
        color: "#000",
      };
      setStyleInputError(style);
    }
  }, [password, confirmPassword]);

  return (
    <div className={style["main-container"]}>
      <div className={style.container}>
        <form className={style["container-form"]}>
          <h2>Sign Up</h2>
          <div className={style["input-field"]}>
            <p>
              Name <e className={style["required"]}>*</e>
            </p>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter your Name"
              value={name}
              onChange={handleChangeName}
            ></input>
            <div className={style.underline}></div>
          </div>
          <p style={handleChangeStyleName}>Required Field.</p>

          <div className={style["input-field"]}>
            <p>
              E-mail <e className={style["required"]}>*</e>
            </p>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your e-mail"
              value={email}
              onChange={handleChangeEmail}
            ></input>
            <div className={style.underline}></div>
          </div>
          <p style={handleChangeStyleEmail}>Required Field.</p>
          <p style={handleChangeStyleEmailError}>Incorrect email</p>

          <div className={style["input-field"]}>
            <p style={styleInputError}>
              Password <e className={style["required"]}>*</e>
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
          <p style={handleChangeStylePass}>Required Field.</p>

          <div className={style["input-field"]}>
            <p style={styleInputError}>
              Confirm your Password <e className={style["required"]}>*</e>
            </p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
            ></input>
            <div className={style.underline}></div>
          </div>
          <p style={handleChangeStyleConfirm}>Required Field.</p>

          <input
            className={style["button"]}
            // type="submit"
            value="Confirm"
            onClick={handleChangeConfirmRegister}
          ></input>

          <span>
            Already have an account? <a href={`/`}>Sign in.</a>
          </span>
        </form>
      </div>

      <div className={style.container}>
        <div className={style["container-text"]}>
          <form>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              impedit, exercitationem quidem cum quasi reprehenderit asperiores
              earum quae architecto delectus eius quos odio, excepturi unde
              veniam repudiandae, recusandae perferendis voluptatibus voluptatum
              ea sapiente. Laborum est praesentium necessitatibus sequi dicta
              eligendi amet asperiores? Tenetur, labore sapiente? Cumque ad sint
              magni voluptate.
            </h2>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
