// Porcentagem

const porcentagem = document.querySelector("#porcentagem")
const valor1 = document.querySelector("#valorPorcentagem")
const calcular1 = document.querySelector("#buttonCalcular1")
var resultado1 = document.querySelector("#resultado1")
const clear = 

calcular1.addEventListener("click", function(){

    if(porcentagem.value == "" || valor1.value ==""){
        resultado1.innerHTML = "Insira valores válidos!"
    }else{
        var calculo1 = Number(porcentagem.value) * Number(valor1.value) / 100
        resultado1.innerHTML = calculo1
    }

})

function limpar1() {
    const camposParaLimpar = [
        porcentagem,
        valor1
        
    ];

    camposParaLimpar.forEach(function(campo) {
        campo.value = '';
    });
    
    resultado1.innerHTML = '';
}




//Adição 

const adicao = document.querySelector("#adicao")
const valor2 = document.querySelector("#valorAdicao")
const calcular2 = document.querySelector("#buttonCalcular2")
var resultado2 = document.querySelector("#resultado2")

calcular2.addEventListener("click", function(){

    if(adicao.value == "" || valor2.value ==""){
        resultado2.innerHTML = "Insira valores válidos!"
    }else{
        var calculo2 = Number(adicao.value) + Number(valor2.value) 
        resultado2.innerHTML = calculo2
    }

})


function limpar2() {
    const camposParaLimpar = [
        adicao,
        valor2
    ];

    camposParaLimpar.forEach(function(campo) {
        campo.value = '';
    });
    
    resultado2.innerHTML = '';
}

//Subtração 

const subtracao = document.querySelector("#subtracao")
const valor3 = document.querySelector("#valorSub")
const calcular3 = document.querySelector("#buttonCalcular3")
var resultado3 = document.querySelector("#resultado3")

calcular3.addEventListener("click", function(){

    if(subtracao.value == "" || valor3.value ==""){
        resultado3.innerHTML = "Insira valores válidos!"
    }else{
        var calculo3 = Number(subtracao.value) - Number(valor3.value) 
        resultado3.innerHTML = calculo3
    }

})

function limpar3() {
    const camposParaLimpar = [
        subtracao,
        valor3
    ];

    camposParaLimpar.forEach(function(campo) {
        campo.value = '';
    });
    
    resultado3.innerHTML = '';
}

//Divisão 

const divisao = document.querySelector("#divisao")
const valor4 = document.querySelector("#valorDivisao")
const calcular4 = document.querySelector("#buttonCalcular4")
var resultado4 = document.querySelector("#resultado4")

calcular4.addEventListener("click", function(){

    if(divisao.value == "" || valor4.value ==""){
        resultado4.innerHTML = "Insira valores válidos!"
    }else{
        var calculo4 = Number(divisao.value) / Number(valor4.value) 
        resultado4.innerHTML = calculo4
    }

})


function limpar4() {
    const camposParaLimpar = [
        divisao,
        valor4
    ];

    camposParaLimpar.forEach(function(campo) {
        campo.value = '';
    });
    
    resultado4.innerHTML = '';
}


//Multiplicação 

const multiplicacao = document.querySelector("#multiplicacao")
const valor5 = document.querySelector("#valorMulti")
const calcular5 = document.querySelector("#buttonCalcular5")
var resultado5 = document.querySelector("#resultado5")

calcular5.addEventListener("click", function(){

    if(multiplicacao.value == "" || valor5.value ==""){
        resultado5.innerHTML = "Insira valores válidos!"
    }else{
        var calculo5 = Number(multiplicacao.value) * Number(valor5.value) 
        resultado5.innerHTML = calculo5
    }

})

function limpar5() {
    const camposParaLimpar = [
        multiplicacao,
        valor5
    ];

    camposParaLimpar.forEach(function(campo) {
        campo.value = '';
    });
    
    resultado5.innerHTML = '';
}


// Limpar TUDO

function clearText() {
    const camposParaLimpar = [
        porcentagem,
        valor1,
        adicao,
        valor2,
        subtracao,
        valor3,
        divisao,
        valor4,
        multiplicacao,
        valor5
    ];

    camposParaLimpar.forEach(function(campo) {
        campo.value = '';
    });
    
    resultado1.innerHTML = '';
    resultado2.innerHTML = '';
    resultado3.innerHTML = '';
    resultado4.innerHTML = '';
    resultado5.innerHTML = '';
}
