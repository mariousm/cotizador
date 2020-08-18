import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../helper";

// Definimos los estilos de este componente
const Div = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top: 2rem;

  /* Definimos la animación del botón */
  transition: background-color 0.3s ease;
  /* Definimos el hover cuando el cursor está encima del botón */
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Formulario = () => {
  // Definimos el state del componente
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, guardarError] = useState(false);

  // Extramemos los valores
  const { marca, year, plan } = datos;

  // Obtener los datos del formulario y guardarlos en el state
  const obtenerInformacion = (e: any) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario presiona submit
  const cotizarSeguro = (e: any) => {
    e.preventDefault();

    // Validamos
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    // Tenemos una base de 2000€
    let resultado: number = 2000;

    // Obtener la diferencia de años
    let nDiferenciaYears: number = obtenerDiferenciaYear(parseInt(year));

    // Por cada año hay que restar el 3%
    resultado -= (nDiferenciaYears * 3 * resultado) / 100;

    // Dependiendo de la marca: Europero 30%, Americano 15%, Asiatico 5%
    resultado = calcularMarca(marca) * resultado;

    // Dependiendo del plan: Completo aumenta 50%, Básico aumenta 20%
    let nIncremento: number = obtenerPlan(plan);
    resultado = Math.round(nIncremento * resultado * 100) / 100;
    console.log(resultado);

    // Total
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error === true ? <Error>Todos los campos son obligatorios</Error> : null}

      <Div>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="europeo">Europeo</option>
          <option value="americano">Americano</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Div>
      <Div>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Div>
      <Div>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />{" "}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />{" "}
        Completo
      </Div>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Formulario;
