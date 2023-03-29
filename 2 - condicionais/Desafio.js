

let valorCombustivel;

const tipoCombustivelCarro = 'E';
const kmPorLitro = 10;
const distaciaKm = 100;

const isEtanol = tipoCombustivelCarro === 'E';

const litrosViagem = distaciaKm / kmPorLitro;

if (isEtanol) {
    valorCombustivel = 4.79;
}
else {
    valorCombustivel = 5.75;
}

const valorGasto = litrosViagem * valorCombustivel;

console.log('Valor da viagem: R$ ' + valorGasto.toFixed(2))