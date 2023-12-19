import React from "react";
import style from "./home.module.css";

import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const { username, password } = useParams();

  let [backgroundColor, setBackgroundColor] = React.useState();

  const navigate = useNavigate();

  const handleChangeBackground = () => {
    let estilo = "";

    setBackgroundColor(!backgroundColor);

    !backgroundColor
      ? (estilo = "linear-gradient(160deg, #730075, #006268)")
      : (estilo = "linear-gradient(160deg, #EDBAEE, #88D4D9)");

    document.body.style.background = estilo;
  };

  return (
    <div className="main">
      <div
        className={style.navbar}
        style={
          backgroundColor
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.63)",
                color: "#fff",
              }
            : {
                backgroundColor: "#fff",
                color: "black",
              }
        }
      >
        <div className={style.name}>Olá, {username}</div>
        <div className={style.options}>
          <div>Minhas Senhas</div>
          <div>Meu Perfil</div>
          <WbSunnyIcon onClick={handleChangeBackground}></WbSunnyIcon>
          <div>Linguagem</div>
        </div>
      </div>

      <div className={style.body}>
        <p>.</p>
      </div>
    </div>
  );
}

export default Home;
