const files  = [ "Immagine1.png" , "Immagine2.jpg" ];//Immagini da scorrere
const intervallo = 15000;//Millisecondi di intervallo per cambio immagine

const dir = "immagini/immaginiCheScorrono/";
var actual = 0;

//Intervallo per cambio immagine
const interval = setInterval(function() {destra()}, intervallo);

function destra(){
    if(actual < files.length - 1){
        actual++ ;
    }
    else{
        actual = 0;
    }
    document.getElementById("immagine").src = dir + files[actual]
    //Funzione qui sotto è per resettare timer
    clearInterval(interval)
    const interval = setInterval(function() {destra()}, intervallo);
}

function sinistra(){
    if(actual > 0){
        actual-- ;
    }
    else{
        actual = files.length - 1;
    }
    document.getElementById("immagine").src = dir + files[actual]

    //Funzione qui sotto è per resettare timer
    clearInterval(interval)
    const interval = setInterval(function() {destra()}, intervallo);
}
 