import React from "react";
import style from "./home.module.css";
import Registros from "../Registros/registros.js";

import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { useNavigate, useParams } from "react-router-dom";
import ValiteRoute from "../../routes/ValidateRoute.js";

function Home() {
  const { username } = useParams();

  let [backgroundColor, setBackgroundColor] = React.useState();

  // const  token  = localStorage.getItem("token");
  

    ValiteRoute(localStorage.getItem("token"))

  

  const handleChangeBackground = () => {

    setBackgroundColor(!backgroundColor);

    !backgroundColor
      ? (document.body.style.background = "linear-gradient(160deg, #730075, #006268)")
      : (document.body.style.background = "linear-gradient(160deg, #EDBAEE, #88D4D9)");

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
        <div className={style.name}>Olá, {username.split(' ')[0]}</div>
        <div className={style.options}>
          <div>Minhas Senhas</div>
          <div>Meu Perfil</div>
          <WbSunnyIcon onClick={handleChangeBackground}></WbSunnyIcon>
          <div>Linguagem</div>
        </div>
      </div>

      <div className={style.body}>
        <Registros theme={{valor: backgroundColor? false : true}}/>
      </div>
    </div>
  );
}

export default Home;
