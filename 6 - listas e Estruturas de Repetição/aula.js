


// const alunos = ['Vitor', 'Igor', 'Mariane'];

// alunos.push('Iara');

// alunos[4] = 'Bia';

// alunos[alunos.length] = 'Fulano';
// alunos[alunos.length] = 'Ciclano';
// alunos[alunos.length] = 'Beltrano';
// alunos[alunos.length] = 'Armano';
// alunos[alunos.length] = 'Chegano';

// alunos.pop();
// alunos.shift();

// alunos.splice(3)

// console.log(alunos);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(7);
notas.push(8);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

const media = soma / notas.length;
console.log(media.toFixed(2))

