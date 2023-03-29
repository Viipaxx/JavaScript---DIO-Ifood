# Arrays e Estruturas de Repetição

### Arrays -> listas
#### Criando listas(
    const list = [];

    ex.:

    const notas = [];
)

#### Adicionando valores na lista(

    O push adiciona o valor na última posição

    const list = [];
    list.push(inf);

    ex.:

    const notas = [];
    notas.push(5);
)

#### Removendo valores da lista(
    os valores podem ser removidos tanto com o 'pop' quanto com o 'shift'. A diferença é que o 'pop' irá remover o último elemento da lista e o 'shift' irá remover o primeiro elemento.

    const list = [1, 2, 3, 4];
    
    list.pop();
        console.log(list);
            [1, 2, 3]

<hr>

    const list = [1, 2, 3, 4];
    
    list.shift();
        console.log(list);
            [2, 3, 4]

)
<hr>

### Estrutura de Repetição for -> é uma estrutura de repetição que irá ocorrer enquanto a condição definida for verdadeira.

#### estrutura de repetição for(
    o for funciona enquanto a condição for verdadeira

    enquanto ((início); (condição); (faça));

    ex.: 

    for (let i = 0; i < 10; i++){
        console.log(i);
            [0]
            [1]
            [2]
            ...
    }

)
<hr>

# Desafios

#### 1 - Crie um programa que dado um número imprima a sua tabuada

    Resolução do desafio:

    const num = 3;

    for (let x = 1; x <= 10; x++) {
        console.log(`${num} x ${x} = ${num * x}`)
    }

#### 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
    
    Resolução do desafio:

    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for (let i = 0; i < lista.length; i++){
        if (lista[i] % 2 == 0) {
            console.log(lista[i]);
        }
    }