import React from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

// Definimos los estilos para este componente
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
