import React from "react";
import style from "./registroValue.module.css";

function RegistroValue({ theme }) {
  const [tema, setTema] = React.useState(theme.valor);
  const [edit, setEdit] = React.useState(false);

  let lightInput = {
    borderBottom: "1px solid #00000055",
    color: "#000",
  };

  let darkInput = {
    borderBottom: "1px solid #fff",
    color: "#fff",
  };

  React.useEffect(() => {
    setTema(theme.valor);
  });

  const handleChangeEdit = () => {
    setEdit(!edit);
  };

  const handleChangeCancel = () => {
    handleChangeEdit();
  };
  return (
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
        disabled={!edit}
      ></input>

      <p>Login</p>
      <input
        type="text"
        className={style["register-input"]}
        style={tema ? lightInput : darkInput}
        placeholder="Login"
        disabled={!edit}
      ></input>

      <p>Senha</p>
      <input
        type="password"
        className={style["register-input"]}
        style={tema ? lightInput : darkInput}
        placeholder="Senha"
        disabled={!edit}
      ></input>

      <p>Telefone</p>
      <input
        type="text"
        className={style["register-input"]}
        style={tema ? lightInput : darkInput}
        placeholder="Telefone"
        disabled={!edit}
      ></input>

      <p>Validade</p>
      <input
        type="date"
        className={style["register-input"]}
        style={tema ? lightInput : darkInput}
        placeholder="Validade"
        disabled={!edit}
      ></input>

      <p>Observação</p>
      <input
        type="textarea"
        className={style["register-input"]}
        style={tema ? lightInput : darkInput}
        placeholder="Observação"
        disabled={!edit}
      ></input>

      <label for="descricao">Descrição</label>
      <textarea
        name="descricao"
        className={style["register-input"]}
        style={tema ? lightInput : darkInput}
        placeholder="Descrição"
        rows="5"
        cols="50"
        disabled={!edit}
      ></textarea>
      {!edit ? (
        <div className={style["buttons"]}>
          <button
            className={style["edit-input-button"]}
            type="submit"
            onClick={handleChangeEdit}
          >
            Editar
          </button>
        </div>
      ) : (
        <div className={style["buttons"]}>
          <button
            className={style["cancel-input-button"]}
            type="submit"
            onClick={handleChangeCancel}
          >
            Cancelar
          </button>

          <button className={style["save-input-button"]} type="submit">
            Salvar
          </button>
        </div>
      )}
    </div>
  );
}

export default RegistroValue;
