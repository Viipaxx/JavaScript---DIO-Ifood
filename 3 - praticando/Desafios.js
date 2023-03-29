
console.log('Média do Aluno')
console.log('')

let n1 = 7;
let n2 = 7;
let n3 = 7.01;

const media = (n1 + n2 + n3) / 3;

console.log('Média do aluno ' + media.toFixed(2))

if (media < 5) {
    console.log('Reprovado!')
}
else if (media > 5 && media <= 7) {
    console.log('Recuperação!');
}
else {
    console.log('Aprovado!');
}

console.log('')
console.log('IMC')
console.log('')

const altura = 1.8;
const peso = 50.00;

const imc = peso / (Math.pow(altura, 2))

console.log('IMC ' + imc)

if (imc < 18.5) {
    console.log('Abaixo do peso!');
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
}
else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso!');
}
else if (imc >= 30 && imc < 40){
    console.log('Obeso(a)!')
}
else {
    console.log('Obesidade grave!')
}


console.log('');
console.log('Compra de Produto');
console.log('');

const valorProduto = 100;
const formaPagamento = 2;

if (formaPagamento == 1){

    const valorTotal = valorProduto - (valorProduto * 0.1);
    console.log(valorTotal);

} 
else if (formaPagamento == 2){

    const valorTotal = valorProduto - (valorProduto * 0.15);
    console.log(valorTotal);

} 
else{
 
    const parcelas = 3;

    if (parcelas <= 2) {

        console.log(valorProduto);

    }
    else {

        const valorTotal = valorProduto + (valorProduto * 0.1);
        console.log(valorTotal)

    }

}