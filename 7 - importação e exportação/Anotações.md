# Importação e Exportação

#### Importação
    Importando:

    const { print, gets } = require('./funcoes-auxiliares');


#### Exportação
    Exportando: 

    module.exports = { gets, print };

# Desafio

#### Uma sala contém 5 alunos e cada aluno foi sorteado com um número de 1 - 100. Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado. 

    Dados de entrada: 
    5
    50
    10
    98
    23

    saída:
    98
<hr>

    Resolução do desafio:

    const { gets, print } = require('./funcoes-auxiliares-desafios');

    let maiorValor = 0;

    for (let i = 0; i < 5; i++){
        let numeroSorteado = gets();
        if (numeroSorteado > maiorValor){
            maiorValor = numeroSorteado;
        }
    }

    print(maiorValor);