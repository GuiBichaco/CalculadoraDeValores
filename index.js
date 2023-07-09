// Porcentagem

const porcentagem = document.querySelector("div.container form input:nth-of-type(1)")
const valor = document.querySelector("div.container form input:nth-of-type(2)")
const calcular = document.querySelector("div.container div button")
var resultado = document.querySelector("div.container div span")

calcular.addEventListener("click", function(){

    if(porcentagem.value == "" || valor.value ==""){
        resultado.innerHTML = "Insira valores válidos!"
    }else{
        var calculo = Number(porcentagem.value) * Number(valor.value) / 100
        resultado.innerHTML = calculo
    }

})

//Adição 

const adicao = document.querySelector("div.containerA form input:nth-of-type(1)")
const valor2 = document.querySelector("div.containerA form input:nth-of-type(2)")
const calcular2 = document.querySelector("div.containerA div button")
var resultado2 = document.querySelector("div.containerA div span")

calcuadicaolar.addEventListener("click", function(){

    if(adicao.value == "" || valor2.value ==""){
        resultado2.innerHTML = "Insira valores válidos!"
    }else{
        var calculo2 = Number(adicao.value) + Number(valor2.value) 
        resultado.innerHTML = calculo2
    }

})