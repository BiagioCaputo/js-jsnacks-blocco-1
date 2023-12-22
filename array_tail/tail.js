console.log("JS OK")

// recupero gli elementi dall'html
numbersofElements = document.getElementById('number-elements');
button = document.getElementById("button");

//metto il pulsante in ascolto
button.addEventListener('click', function (){

    //salvo nelle variabili i dati forniti dall'utente
    const elementsNumber = numbersofElements.value
    console.log(elementsNumber);
    
    //se ho meno di 5 elementi non avvio il software
    if(elementsNumber < 5){
        alert("L'array deve essere almeno di 5 elementi!");
    }

    else{
        const numbers = [];
        const shownNumbers = [];
        
        //inserisco i numeri casuali all'interno del mio array vuoto
        for(i=0; i < elementsNumber; i++){
           numbers.push(Math.floor(Math.random() * 100)+1);
        
        }
        
        console.log(numbers);
        
        //inverto gli elementi dell'array per facilitarmi nel for
        numbers.reverse();
        
        //salvo i 5 elementi che mi interessano in un altro array da mostrare in console
        for(i = 0 ; i <= 4 ; i++){
            shownNumbers[i] = numbers[i];
        }

        console.log(shownNumbers);


    
    }

})