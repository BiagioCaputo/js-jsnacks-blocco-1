console.log("JS OK")

//creo il mio array
const fruits = ["banana", "mela", "pera", "ciliegia", "arancia", "mandarino", "cocomero" , "limone", "fragola"];

console.log(fruits);

//aggiungo la pesca al mio array

fruits.push("pesca");

console.log(fruits);

//controllo se ho il cocomero nell'array dando per scontato di no

let message = "Oh no, devo uscire a comprare il cocomero!";

for (i=0; i<fruits.length; i++){

    if(fruits[i] === "cocomero"){
        message = "Trovato! Devo solo preparare il cocktail.";
    }

}

console.log(message);