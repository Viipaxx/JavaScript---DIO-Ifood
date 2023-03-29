

function sayMyName(name='Anônimo'){
    console.log('My name is ' + name);
}

// myName();

function verificaIdade(idade) {
    if (idade >= 18){
        console.log('Maior de idade');
    }
    else {
        console.log('Menor de idade');
    }
}

verificaIdade(19);


function geraPorcentagem(valor){
    return valor / 100;
}

function aplicaDesconto(valor, desconto){

    const valorTotal = valor - (valor * geraPorcentagem(desconto));
    return valorTotal;

}

function aplicaJuros(valor, juros){

    const valorTotal = valor + (valor * geraPorcentagem(juros));
    return valorTotal;

}

(function (){
    const valorProduto = 100;
    const formaPagamento = 2;
    
    if (formaPagamento === 1){
    
        const desconto = 10;
        console.log(aplicaDesconto(valorProduto, desconto));
    
    } 
    else if (formaPagamento === 2){
    
        const desconto = 15;
        console.log(aplicaDesconto(valorProduto, desconto));
    
    } 
    else if (formaPagamento === 3) {

        console.log(valorProduto);
    }   
    else {

        const juros = 10;
        console.log(aplicaJuros(valorProduto, juros));

    }
    

})();
