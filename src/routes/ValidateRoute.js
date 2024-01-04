import React from 'react';
import { useNavigate,  } from "react-router-dom";

function ValiteRoute(localStorageParams) {

  const navigate = useNavigate();

  React.useEffect(() => {

    if (!localStorageParams) {
      // Se não estiver autenticado, redireciona para a página de login
      navigate('/');
    }
  }, [navigate]);
}

export default ValiteRoute;