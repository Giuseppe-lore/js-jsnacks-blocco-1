// - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// definisco la somma in una variabile = 0:
let sumNumbers = 0;

// Creo un'iterazione FOR da 1 a 10:
for(i = 1; i <= 10; i++) {
    
    // Collego un prompt che chiederà all'utente di inserire un numero e si ripeterà per 10 volte: 
    let userNumber = parseInt(prompt('Inserisci un numero'));
    

    // Definisco la variazione per le singole stringhe processate e le trasformo in valori numerici:
    let singleNumber = userNumber;
    
    // Sommo i singoli numeri:
    sumNumbers += singleNumber;
}

console.log('somma', sumNumbers)