// Porcentagem

const porcentagem = document.querySelector("#porcentagem")
const valor = document.querySelector("#valor")
const calcular = document.querySelector("#buttonCalcular")
var resultado = document.querySelector("#resultado")

calcular.addEventListener("click", function(){

    if(porcentagem.value == "" || valor.value ==""){
        resultado.innerHTML = "Insira valores válidos!"
    }else{
        var calculo = Number(porcentagem.value) * Number(valor.value) / 100
        resultado.innerHTML = calculo
    }

})

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