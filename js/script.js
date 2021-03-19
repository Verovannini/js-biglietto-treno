// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.

// Chiedere numero di chilometri e l'età
var chilometri = prompt('Quanti chilometri devi percorrere?');
var etaUtente = prompt('Inserisci la tua età');
console.log(chilometri);
console.log(etaUtente);

// Trasformare dati in numeri
var chilometriNumber = parseInt(chilometri);
var etaUtenteNumber = parseInt(etaUtente);
console.log(chilometriNumber);
console.log(etaUtenteNumber);

// Calcolare prezzo senza sconti
var prezzoAlChilometro = 0.21;
var prezzoBiglietto = chilometriNumber * prezzoAlChilometro;
console.log(prezzoBiglietto);

// Calcolare prezzo con sconti
if ( etaUtente < 18 ) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
    console.log(prezzoBiglietto);
} else if ( etaUtente > 65 ) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
    console.log(prezzoBiglietto);
}

// Stampare prezzo con massimo due decimali
var prezzoBigliettoFinale = prezzoBiglietto.toFixed(2);
console.log(prezzoBigliettoFinale);

var messaggio = 'Il prezzo del tuo biglietto è: ' + prezzoBigliettoFinale + '€';

document.getElementById('prezzo-biglietto').innerHTML = messaggio;