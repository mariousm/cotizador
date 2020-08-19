import React from "react";
import styled from "@emotion/styled";
import { primerMayuscula } from '../helper';

// Definimos los estilos de este componente
const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

// Definimos la interfaz para los props
interface IResumenProps {
  datos: any;
}
const Resumen = ({ datos }: IResumenProps) => {
  // Extraemos los datos
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
  <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
