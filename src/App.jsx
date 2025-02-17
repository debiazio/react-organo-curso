import { useState } from "react";
import Banner from "./componentes/Banner/index.jsx";
import Formulario from "./componentes/Formulario/index.jsx"; 

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }
  
  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)  }/>
    </>
  );
}

export default App;
