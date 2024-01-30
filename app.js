
let numeroSecreto =0 ;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos== 1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','EL número secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;

        limpiarCaja();
    }

    return;

}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenrado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenrado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
} else {

    // si el numero generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenrado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenrado);
        return numeroGenrado;
    }
}

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();//Generar numero aleatorio
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();        //limpiar caja
    condicionesIniciales(); // Indicar mensaje de intervalo de numeros
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
