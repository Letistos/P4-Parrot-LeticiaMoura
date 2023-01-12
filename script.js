//function escolherCarta(classeCarta){
//    const carta = document.querySelector(classeCarta);
//   carta.classList.add ('cursor-carta');
//}
//function Naoescolher(classeCarta){
//    const leave = document.querySelector(classeCarta .cursor-carta);
//    leave.classList.remove('cursor-carta');
//
//
alert("Olá, esse é o PARROT CARD GAME versão Bongo Cat! Para começar, escolha uma quantidade de pares de cartas, entre 2 e 7.");

function qtdeCartas(){

    input = prompt("com quantas cartas quer jogar?")
    if (input%2 != 0 && input < 2){
        alert("Essa quantidade de cartas é inválida");
    }
    if(input == 2){
        alert("4 cartas é o mínimo para jogar");
    }
    if(input == 0){
        alert("Essa quantidade de cartas é inválida");
    }
    if (input%2 != 0 && input > 2){
        alert("Essa quantidade de cartas é inválida");
    }
    if(input > 14){
        alert("Desculpe,mas o número máximo de Cartas é 14!")
    }
}







const cartas= document.querySelector('.main-box');
//está selecionando todas as cartas e adicionando na gaveta cartas

function virarCarta(){
       
    this.classList.toggle('flip');
    //está trocando a classe

}
//function contarCLiques(){
    //quando o jogador terminar, deve emitir um aviso de quantos cliques ele fez durante o jogo
//}