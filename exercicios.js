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