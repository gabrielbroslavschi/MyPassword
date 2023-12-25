import React from "react";
import style from "./registros.module.css";

function Registros({ theme }) {
  let lightInput = {
    borderBottom: "1px solid #00000055",
    color: "#000",
  };

  let darkInput = {
    borderBottom: "1px solid #fff",
    color: "#fff",
  };

  const [tema, setTema] = React.useState(theme.valor);

  React.useEffect(() => {
    setTema(theme.valor);
  });

  return (
    <div className={style["registros-main"]}>
      <div
        className={style["registros"]}
        style={
          tema
            ? {
                backgroundColor: "#fff",
              }
            : {
                backgroundColor: "rgba(0, 0, 0, 0.63)",
                border: "1px solid #fff",
              }
        }
      >
        <div className={style["registros-value"]}></div>

        <div
          className={style["registro-information"]}
          style={
            tema
              ? {
                  borderLeft: "1px solid #00000044",
                  color: "#000",
                }
              : {
                  borderLeft: "1px solid #fff",
                  color: "#fff",
                }
          }
        >
          <p>Nome</p>
          <input
            type="text"
            className={style["register-input"]}
            style={tema ? lightInput : darkInput}
            placeholder="Nome"
          ></input>

          <p>Login</p>
          <input
            type="text"
            className={style["register-input"]}
            style={tema ? lightInput : darkInput}
            placeholder="Login"
          ></input>

          <p>Senha</p>
          <input
            type="password"
            className={style["register-input"]}
            style={tema ? lightInput : darkInput}
            placeholder="Senha"
          ></input>

          <p>Telefone</p>
          <input
            type="text"
            className={style["register-input"]}
            style={tema ? lightInput : darkInput}
            placeholder="Telefone"
          ></input>

          <p>Validade</p>
          <input
            type="date"
            className={style["register-input"]}
            style={tema ? lightInput : darkInput}
            placeholder="Validade"
          ></input>

          <p>Observação</p>
          <input
            type="textarea"
            className={style["register-input"]}
            style={tema ? lightInput : darkInput}
            placeholder="Observação"
          ></input>

          <label for='descricao'>Descrição</label>
          <textarea
            name='descricao'
            className={style["register-input"]}
            style={tema ? lightInput : darkInput}
            placeholder="Descrição"
            rows="5" 
            cols="50"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Registros;
