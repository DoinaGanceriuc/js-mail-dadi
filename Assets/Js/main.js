/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.*/

/* Strumenti
-prompt
-array
-input/button
-querySelector/getElementById
*/

const emailUsers = ["paolo.rossi@gmail.com", "mario.bianchi@libero.it", "sara.bertozzi@gmail.com", "luca.bianchi@virgilio.it", "lucia@gmail.com", "marco94@live.it", "francesca85@gmail.com", "mario.gialli@outlook.com", "anna.verdi@gmail.com"];
/* console.log(emailUsers.length);
console.log(emailUsers[0]); */

const emailElement = document.getElementById("email");
/* console.log(emailElement); */
const buttonElement = document.getElementById("invia");
/* console.log(buttonElement); */
buttonElement.addEventListener("click", function() {
/* console.log("ho cliccato"); */
const emailInserita = emailElement.value;
/* console.log(emailInserita); */

for (let i = 0; i < emailUsers.length; i++) {
    const emailLista = emailUsers[i];
    console.log(emailLista);


    if (emailInserita == emailLista) {
        console.log("accesso consentito");
        document.getElementById("esito").innerHTML = "accesso consentito"

    } else {
        console.log("accesso negato");
        document.getElementById("esito").innerHTML = "accesso negato"
    }


  
}



})

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */