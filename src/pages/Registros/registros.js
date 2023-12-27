import React from "react";
import style from "./registros.module.css";

import RegistroValue from "../RegistroValue/registroValue";

function Registros({ theme }) {

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

        <RegistroValue theme={theme}/>
      </div>
    </div>
  );
}

export default Registros;
