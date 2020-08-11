import React from "react";
import styled from "@emotion/styled";

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

const Formulario = () => {
  return (
    <form>
      <Div>
        <Label>Marca</Label>
        <Select>
          <option value="">-- Seleccione --</option>
          <option value="europeo">Europeo</option>
          <option value="americano">Americano</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Div>
      <Div>
        <Label>Año</Label>
        <Select>
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
        <InputRadio type="radio" name="plan" value="basico" /> Básico
        <InputRadio type="radio" name="plan" value="completo" /> Completo
      </Div>
      <Button type="button">Cotizar</Button>
    </form>
  );
};

export default Formulario;
