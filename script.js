// -- saudação -- //
prompt('com quantas cartas quer jogar?');


// -- fim saudação -- //

// -- dispor cartas no main -- //



const deck = document.querySelectorAll('.card-box');

let estaVirada = false;

let cartaUm;

let cartaDois;

//  virar cartas //

function virarCarta(){

    this.classList.add('flip');

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

function encontrarPares(){
   let par =  cartaUm.dataset.card == cartaDois.dataset.card;
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
deck.forEach(carta => carta.addEventListener('click',virarCarta));



// -- embaralhar cartas -- //
// -- fim embaralhar cartas -- //

// -- contar cliques -- //
// -- fim contar cliques -- //



//let cartaUm
//let cartaDois





