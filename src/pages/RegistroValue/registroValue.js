import React from "react";
import style from "./registroValue.module.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function RegistroValue({ theme }) {
  const [tema, setTema] = React.useState(theme.valor);
  const [edit, setEdit] = React.useState(false);
  const [typePassword, setTypePssword] = React.useState("password");
  const [viewPass, setViewPass] = React.useState(false);

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

  const handleViewPass = () => {
    setViewPass(!viewPass);
    !viewPass ? setTypePssword("text") : setTypePssword("password");
  };

  return (
    <div
      className={style["registro-information"]}
      style={
        tema
          ? {
              borderLeft: "1px solid #00000044",
              color: "#000",
              transition: "0.6s"
            }
          : {
              borderLeft: "1px solid #fff",
              color: "#fff",
              transition: "0.6s"
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

      <div>
        <p>Senha</p>
        <input
          type={typePassword}
          className={style["register-input"]}
          id={style["password-input"]}
          style={tema ? lightInput : darkInput}
          placeholder="Senha"
          disabled={!edit}
          value="qaqweqweqwe"
        ></input>

        <button
          onClick={handleViewPass}
          className={style["password-button"]}
          style={tema ? lightInput : darkInput}
        >
          {viewPass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
        </button>
      </div>

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
