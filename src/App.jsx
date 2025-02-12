import { useState } from "react";
import "./reset.css";
import Banner from "./componentes/Banner/index.jsx";
import Formulario from "./componentes/Formulario/index.jsx"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner />
      <Formulario />
    </>
  );
}

export default App;
