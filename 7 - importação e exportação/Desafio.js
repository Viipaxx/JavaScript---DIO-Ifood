

const { gets, print } = require('./funcoes-auxiliares-desafios');

const quantidadeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeAlunos; i++){
    let numeroSorteado = gets();
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);