/*
*Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.
#Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
#Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.
#Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
?BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.
?BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
?BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.
*/

//# funzioni
//dato un array di oggetti (con titolo, testo e immagine), crea un set di cards
const createCards = (array) => {
    let cardsArray = '';

    for (let item of array){
        cardsArray += `
        <div class="card text-bg-dark d-none">
            <img src="${item.image}" class="card-img" alt="${item.title}">
            <div class="card-img-overlay">
                <h1 class="card-title">${item.title}</h1>
                <p class="card-text fs-5">${item.text}</p>
            </div>
        </div> 
        `
    }

    return cardsArray;
}

//# fase preliminare
//recupero elementi dal DOM
const gallery = document.getElementById('gallery');

//butto in pagina il set di cards con la funzione creata
gallery.innerHTML = createCards(data);

//metto in variabile l'array di cards create
const cards = document.querySelectorAll('#gallery .card')
// // console.log(cards);

//imposto l'index predefinito dell'array e in base a questo ne renderizzo una
let currentIndex = 0;
cards[currentIndex].classList.remove('d-none')