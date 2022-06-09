// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero


// Chiedo un numero di 4 cifre all’utente nel prompt:
const userNumber = prompt('Inserisci un numero di 4 cifre');

// Definisco la somma in una variabile = 0:
let sumNumbers = 0;

// Creo un'iterazione che processerà il numero di 4 cifre in 4 singole stringhe:
for(let i = 0; i < userNumber; i++) {

    // Definisco la variazione per le singole stringhe processate e le trasformo in valori numerici:
    let singleNumber = parseInt(userNumber);

    // Sommo i singoli numeri:
    sumNumbers += singleNumber;
}

console.log(sumNumbers)
