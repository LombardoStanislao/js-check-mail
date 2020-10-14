// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)


var emailList = ['mario@gmail.com', 'pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com']

var userEmail = prompt('Ciao! Qual\'è il tuo indirizzo email?')

var emailGiusta = false;

for (var i = 0; i < emailList.length; i++) {

  console.log(emailList[i]);

  if (userEmail == emailList[i]) {
      emailGiusta = true;
  }
}

if (emailGiusta == true) {
    alert('bravo')
}
