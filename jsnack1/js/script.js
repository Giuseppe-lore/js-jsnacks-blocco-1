// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.


// creo due div nell'HTML, con id red e green;
// creo gli id nel css;

// creo un ARRAY di numeri:
const numbers = [1, 2, 3, 4, 5, 6];


// creo un ciclo FOR per scorrere i numeri
for(let i = 0; i < numbers.length; i++) {

    // imposto una variabile che terrà in memoria il numero che di volta in volta il ciclo FOR selezionerà dall' ARRAY:
    let = thisNumber = numbers[i];

    // con una IF divido i numeri: i dispari nel div rosso, i numeri pari nel div verde:
    if(thisNumber % 2 !== 0) {
        document.getElementById("red").innerHTML += thisNumber + ' ';
    } else {
        document.getElementById("green").innerHTML += thisNumber + ' ';
       } 
    }