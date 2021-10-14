/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.*/

/* Strumenti
-array
-input/button
-querySelector/getElementById
-addEventListener
-for
-if/else
*/

// Array di email
const emailUsers = ["paolo.rossi@gmail.com", "mario.bianchi@libero.it", "sara.bertozzi@gmail.com", "luca.bianchi@virgilio.it", "lucia@gmail.com", "marco94@live.it", "francesca85@gmail.com", "mario.gialli@outlook.com", "anna.verdi@gmail.com"];
/* console.log(emailUsers.length);
console.log(emailUsers[0]); */

// selezionare elementi DOM
const emailElement = document.getElementById("email");
/* console.log(emailElement); */
const buttonElement = document.getElementById("invia");
/* console.log(buttonElement); */

// Evento click
buttonElement.addEventListener("click", function() {
/* console.log("ho cliccato"); */
const emailInserita = emailElement.value.toLowerCase();
/* console.log(emailInserita); */

//Definizione variabili
let mailTrovata = false;
let message;
message = `La mail "${emailInserita}" NON risulta registrata. Accesso negato!`
document.querySelector(".esito").innerHTML = message;

// iterare tutte le mail dell'array
for (let i = 0; i < emailUsers.length; i++) {
    const emailLista = emailUsers[i];
    /* console.log(emailLista); */

// condizione di verifica mail
    if (emailInserita == emailLista) {
        mailTrovata = true;
        /* console.log("accesso consentito"); */
        message = `La mail "${emailInserita}" risulta registrata. Puoi proseguire!`
        document.querySelector(".esito").innerHTML = message;
    }
}
/*  console.log(mailTrovata); */
})

/* Gioco dei dadi*/

/* Strumenti
-Math
-querySelector/getElementById
-if/else
*/


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// Inizializzazione variabili
const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("il numero random del Giocatore è: " + numeroGiocatore);
const numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("il numero random del Computer è: " + numeroComputer);




// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Condizione di vittoria
if (numeroGiocatore > numeroComputer) {
    console.log("il Giocatore ha vinto");
} else if (numeroGiocatore == numeroComputer) {
    console.log("Siete pari! Non ha vinto nessuno.");
} else {
    console.log("il Computer ha vinto");
}