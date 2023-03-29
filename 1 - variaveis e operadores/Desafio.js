
const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;

const litrosViagem = distanciaKm / kmPorLitro;

const valorGasto = litrosViagem * precoCombustivel;

console.log(valorGasto.toFixed(2));