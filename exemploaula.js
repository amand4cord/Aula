//estrutura de repetição while
let contador = 1
while(contador <= 10){
    let multiplicando = 1
    while(multiplicando >=10){
        let resultado = multiplicador * multiplicando
        alert("Resultado: " + resultado)
        multiplicando++
    }
}
multiplicador++

 // QUESTÃO 6 da lista de exercicios while
 // gerar contagem ate 100
 //somar os numeros
 //parar se deu ruim
 //mostrar o resultado

 function somar(){
    let soma = 0

    let cont = 1     //inicializaçao da variavel de controle
    while(cont <= 100 && soma <= 400){    // setar a condiçao de repetiçao
        soma =  soma + cont
        console.log("Cont: " + cont);
        console.log("Soma: " + soma);
        console.log("==================");

        cont++   // modificaçao da contagem
    }
  console.log(" Soma: " + soma);

}
