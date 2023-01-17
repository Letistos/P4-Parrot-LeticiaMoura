// -- saudação -- //
teste();

function teste(){


let pergunta = false;

while(pergunta === false){

const qtde = prompt('com quantas cartas quer jogar?');
    
if(qtde < 4 || qtde > 14 || qtde % 2 !== 0  ){
        alert('quantidade de cartas inválida');
        pergunta = false;
    }
       else{
        pergunta = true;
        return pergunta;
       }
}
}
// -- fim saudação -- //

// -- dispor cartas no main -- //

//const cartasTabuleiro = document.querySelectorAll('.card-box');
//cartasJogo = [];

//function tabuleiro(qtde){   
//
  //  const displayUsuario = Array.prototype.slice.call(cartasTabuleiro);
   // for (let i = 0; i < qtde; i++) {

     //   cartasJogo.push(i);
  // }
//}
// -- fim de dispor cartas no main -- //

//  virar cartas //

const deck = document.querySelectorAll('.card-box');

let estaVirada = false;

let cartaUm;

let cartaDois;


function virarCarta(){

    this.classList.add('flip');
    contadorCliques();

    if(estaVirada == false){
    estaVirada = true;
    cartaUm = this;
    return;
    }

    cartaDois = this;
    estaVirada = false;

    encontrarPares();
}
// -- fim virar cartas -- //

// --encontrar pares --//
let finalJogo = 0;
function encontrarPares(){
   let par =  cartaUm.dataset.card == cartaDois.dataset.card;
   if (par == true){
    finalJogo++;
   }
   if(par == false){

   desvirarCarta();
   }
   

}
// --fim encontrar pares --//

// --manter pares abertos--//


function manterAberto(){

    cartaUm.addEventListener('click',flip);
}
// --fim de manter pares abertos -- //

// -- desvirar quando nao e par -- //

function desvirarCarta(){
    
    setTimeout(() => {
    cartaUm.classList.remove('flip');
    cartaDois.classList.remove('flip');
    },1000);

}


// -- fim de desvirar quando nao e par -- //

// -- embaralhar cartas -- //


(function embaralhar(){
    deck.forEach(carta => {
        let random = Math.floor (Math.random() * 14);
        carta.style.order = random;
    });
})();

// -- fim embaralhar cartas -- //


deck.forEach(carta => carta.addEventListener('click',virarCarta));



// -- contar cliques -- //
function executarAmbas(){
    virarCarta();
    contadorCliques();

}

let clique = 0;
function contadorCliques(){
   clique++;
}

// -- fim contar cliques -- //

// -- despedida -- //
function despedida(){

    if(finalJogo == 14){

    alert(`Você ganhou em ${clique} jogadas!`);

    }
}
// -- fim despedida -- //






