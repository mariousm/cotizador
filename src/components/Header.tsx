import React from "react";
import styled from "@emotion/styled";

// Definición de los estilos CSS para este componente
// Se puede definir un archivos css como en Angular, pero hay veces que es mejor tenerlo en el componente
// ya que no siempre tiene que cargar todos los estilos, lo cual va a mejorar el rendimiento de la App
const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

// Definición de la interfaz pora los props en TypeScript
interface IHeaderProps {
  titulo: string;
}

const Header = ({ titulo }: IHeaderProps) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

export default Header;
