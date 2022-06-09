// - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


// Creo un array vuoto:
const oddContainer = [];

// Creo un'iterazione FOR da 1 a 6:
for(i = 1; i <= 6; i++) {
    
    // Collego un prompt che chiederà all'utente di inserire un numero e si ripeterà per 6 volte: 
    let userNumber = parseInt(prompt('Inserisci un numero'));
    
    // con una IF inserisco i numeri dispari nell'ARRAY:
    if(userNumber % 2 !== 0) {
        oddContainer.push(userNumber);
    }
}
