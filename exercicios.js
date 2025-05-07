// Exercício 2 - Calculadora de Soma
// Peça ao usuário para inserir dois números (você pode usar prompt para
// pegar os valores como strings e depois convertê-los para números com
// Number ).
// Mostre o resultado da soma desses dois números usando alert .


function exercicio2(){
    let numero1 = Number (prompt("Digite um número: "))
    let numero2 = Number (prompt("Digite outro número: "))
    let soma = numero1 + numero2

    alert(" O resultado é: " + soma)
}


// Exercício 3 - Conversão de Temperatura (Celsius para Fahrenheit)
// Solicite ao usuário que insira uma temperatura em Celsius.
// Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
// Exiba o resultado em uma mensagem de alert .

function exercicio3(){
    let Celsius = (prompt("Digite a temperatura em Celsius"))
    let Fahrenheit = (Celsius * 9/5) + 32

    alert("A temperatura convertida de Celsius para Fahrenheit: " + Fahrenheit)
}


//Exercício 5 - Calcular a média de três notas
// Peça ao usuário para inserir três notas de um aluno.
// Calcule a média das notas e exiba o resultado em um alert .

function exercicio5(){
    let nota1 = Number (prompt("Digite a primeira nota: "))
    let nota2 = Number (prompt("Digite a segunda nota: "))
    let nota3 = Number (prompt("Digite a terceira nota: "))

    let media = (nota1 + nota2 + nota3) /3
    
    alert("Sua média é: " + media)

    if (media >= 7){
        alert("Aprovado")
    }else{
        alert("Reprovado")
    }
    
}
// Exercício 6 - Calculadora de IMC
// Solicite ao usuário que insira seu peso e altura.
// Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso
// / (altura²).
// Exiba o resultado em um alert e classifique o IMC de acordo com os
// valores:
// Menos de 18,5: Abaixo do peso
// Entre 18,5 e 24,9: Peso normal
// Entre 25 e 29,9: Sobrepeso
// 30 ou mais: Obesidade

function exercicio6() {
    let peso = prompt("Digite seu peso (kg): ")
    let altura = prompt("Digite sua altura (m): ")
    let imc = peso / (altura * altura)

    alert("Seu IMC é: " + imc)

    if (imc < 18.5) {
        console.log("Abaixo do peso - IMC: " + imc)
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal - IMC: " + imc)
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso - IMC: " + imc)
    } else {
        console.log("Obesidade - IMC: " + imc)
    }
}


    

 


