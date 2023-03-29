
class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    gerarGastos(distancia, precoCombustivel) {
        const totalLitros = distancia / this.kmPorLitro

        return precoCombustivel * totalLitros;
    }

}


// const bmw = new Carro('X4', 'vermelho', 10)
// console.log(bmw.gerarGastos(100, 5.00))


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {

        const imc = this.calcularImc();

        if (imc < 18.5) {
            console.log('Abaixo do peso!');
        }
        else if (imc >= 18.5 && imc < 25) {
            console.log('Peso normal');
        }
        else if (imc >= 25 && imc < 30) {
            console.log('Acima do peso!');
        }
        else if (imc >= 30 && imc < 40) {
            console.log('Obeso(a)!')
        }
        else {
            console.log('Obesidade grave!')
        }
    }

}

const p1 = new Pessoa('Vitor', 50.0, 1.81)
p1.classificarImc()