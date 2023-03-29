# Classes e Objetos

## Objeto -> é uma coleção de valores e funciona através de chaves e valores.
#### Criando um objeto
    const obj = {
        chave: valor
    }

    ex.:

    const pessoa = {
        nome: 'Vitor',
        idade: 19
    }
<hr>

## Classe -> é a definição do que deve ser um objeto;
#### Criando uma classe 
    class nomeClass{
        atributos;

        constructor(parametro){
            this.parametro = paramentro;
        }
    }

    ex.:

    class Pessoa{
        nome;
        idade;

        constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;
        }
    }
<hr>


#### Instanciando uma classe 
    const instancia = new Class(parametros);

    ex.:

    const pessoa1 = new Pessoa(nome, idade);
<hr>

#### Comandos para modificar Objetos
    const obj = {
        nome: 'boneca',
        tipo: 'brinquedo'
    }

#### alterando o nome
    obj.nome = 'cola branca';

#### alterando o tipo
    obj.tipo = 'material escolar';

#### adicionando uma nova chave e um novo valor
    obj.novaChave = valor;

    ex.:

    obj.estado = 'destampado';

#### removendo uma chave e um valor

    delete obj.chave;

    ex.:

    delete obj.estado;

<hr>

# Desafio

#### 1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustivél por kilômetro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustivél nos dê o valor gasto em reais para realizar este percuso;

####