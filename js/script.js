// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente



// 1) Chiedere all'utente il dato (cognome)
var cognome = prompt("Inserisci qua il tuo cognome:");
console.log(cognome + "     è il dato (cognome) inserito dall'utente");

    // array dei cognomi 
var listed = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
console.log(listed + "     è il contenuto INIZIALE dell'array");

// 2) inserire il cognome dentro ad un array 
var addCognome = listed.push(cognome);
    // vedere quanti item contiene l'array 
console.log(addCognome + "        è il numero di item contenuti nell'array LISTED con l'aggiunta di un cognome");
    // riprova di cosa contiene ORA array 
console.log(listed + "         è il contenuto dell'array dopo l'inserimento dell'ultimo cognome");

// 3) stampare lista ordinata alfabeticamente 
var listedOrdinati = listed.sort();
console.log(listed + "         è la lista in ordine alfabetico dell'array con tanto di cognome inserito (NOTA BENE: funziona solo se il cognome ha lettera maiuscola" );


// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (var i = 0; i < listedOrdinati.length; i++) {
    var posizioneCognome = "prova " + i + cognome;
    console.log("Posizione " + (i + 1) + " " + listedOrdinati[i]);
}


// Come faccio a far capire al mio sort() di mettere in ordine alfabetico rispetto alla lettera e non rispetto al carattere maiuscolo/minuscolo? Esiste un modo? Devo dargli una libreria ESEMPIO:
// A && a = 0;
// B && b = 1; etc? 

