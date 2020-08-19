// Obtiene la diferencia de años
export function obtenerDiferenciaYear(year: number): number {
  return new Date().getFullYear() - year;
}

// Calcula el total a pagar según la marca
export function calcularMarca(marca: string): number {
  let incremento: number = 0;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

// Calcular el tipo de seguro
export function obtenerPlan(plan: string): number {
  return plan === "basico" ? 1.2 : 1.5;
}

// Muestra la primera letra en mayúscula
export function primerMayuscula(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
