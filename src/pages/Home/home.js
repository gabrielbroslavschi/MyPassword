import React from "react";
import style from "./home.module.css";

import WbSunnyIcon from '@mui/icons-material/WbSunny';

import { useNavigate, useParams } from 'react-router-dom';

function Home() {

    const { username, password } = useParams();

    const navigate = useNavigate();

  return (
    <div className="main">
        <div className={style.navbar}>
            <div className={style.name}>
                Olá, {username}
            </div>
            <div className={style.options}>
                <div>Minhas Senhas</div>
                <div>Meu Perfil</div>
                <WbSunnyIcon></WbSunnyIcon>
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
