/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In JavaScript esistono due tipologie di dato, dati primitivi e structural types. 
I dati primitivi sono i Number, String, Boolean, undefined e null (ci sarebbero anche BigInt e Symbol ma non li utilizzeremo). 
Il dato number può essere sia di tipo Int che di tipo Float, il primo conterrà i  numeri interi, il secondo i decimali.
Il dato string è una sequenza di caratteri, quindi utilizzati per poter scrivere qualcosa.
Il dato boolean è un'entità logica che può essere vera o falsa.
Il dato undefined è quel dato che non viene definito nel momento in cui si dichiara una variabile; al contrario del dato null che viene assegnato di proposito
ad una variabile e sta a significare che quella variabile non contiene nulla.
Gli structural types invece sono gli Oggetti, Funzioni e Array.
Gli oggetti sono raccolte di coppie chiave-valore, cioè un'insieme di dati contenuti in un'unica variabile.
Le funzioni rappresentano una parte di codice che può essere eseguito.
L'array è una lista di dati. */


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* L'oggetto in JavaScript è un insieme di dati contenuti in un'unica variabile, rappresentato da coppie chiave-valore che possono contenere diverse tipolodie di dato. */


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* console.log (12 + 20); */


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x;
   x=12; */


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name;
   name = "Jacqueline"; */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* console.log (x - 4); */


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* let name1;
   let name2;
   name1 = "john";
   name2 = "John";
   console.log (name1 === name2); */


/* ESERCIZIO 8
Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby).
*/

/* let subjective {
    name: "Jacqueline",
    surname: "Luce",
    hobby: "Sport collettivo"
} */