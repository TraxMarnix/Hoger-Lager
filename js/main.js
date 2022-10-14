let userName= 'Marnix';
document.querySelector(".userName").innerHTML = userName

let computer= 'Computer';
document.querySelector(".computer").innerHTML = computer;

let playerName= 'Player Name:';
document.querySelector(".playerName").innerHTML = playerName

// functie om een random nummer te genereren 

function generateNumber() {
    let generatedNumber = Math.ceil(Math.random() *10);
    return generatedNumber;
}
function generateResult() {
}

let oldNumber;
let userChoice;
let newNumber;
let playerPoints = 10;
const p = document.querySelector(".points")
p.textContent = playerPoints;

// knop om een number te genereren om voorvolgens hoger of lager aan te geven met de andere knoppen

const genNumber = document.querySelector('.generate-number');
genNumber.addEventListener('click', function() {
    userChoice = 'generate-number';
    genNumber.disabled = true;
    btnHiger.disabled = false;
    btnLower.disabled = false;
    btnreset.disabled = true;
        generateResult();

        document.querySelector(".number-left").innerHTML = oldNumber;

        oldNumber = generateNumber();
        document.querySelector(".number-left").innerHTML = oldNumber;
    }
);

//knap lager om lager aan te geven en om te winnen of niet 

const btnLower = document.querySelector('.btn-lower');
    btnLower.addEventListener('click', function() {
        if(playerPoints > 0){
    userChoice = 'lower';
    btnLower.disabled = true;
    btnHiger.disabled = true;
    btnreset.disabled = false;
        generateResult();

        document.querySelector(".number-left").innerHTML = oldNumber;

        newNumber = generateNumber();
        document.querySelector(".number-right").innerHTML = newNumber;

        if (oldNumber > newNumber) {
            document.querySelector(".winner").innerHTML = "you win!";
            playerPoints = playerPoints + 10;
            p.textContent = playerPoints;
        } else {
            playerPoints = playerPoints - 10;

            if (playerPoints <= 0){
                document.querySelector(".winner").innerHTML = "Game Over!";
            } else {
                document.querySelector(".winner").innerHTML = "You Lose";
            }

            p.textContent = playerPoints;
        }
    }
});

//knop hoger om hoger aan te geven en om te winnen of niet 

const btnHiger = document.querySelector('.btn-higher');
btnHiger.addEventListener('click', function() {
    if (playerPoints > 0){
        userChoice = 'higher';
        btnHiger.disabled = true;
        btnLower.disabled = true;
        btnreset.disabled = false;
        generateResult();

        document.querySelector(".number-left").innerHTML = oldNumber;

        newNumber = generateNumber();
        document.querySelector(".number-right").innerHTML = newNumber;

        if (oldNumber < newNumber) {
            document.querySelector(".winner").innerHTML = "you win!";
            playerPoints = playerPoints + 10;
            p.textContent = playerPoints;
        } else {
            playerPoints = playerPoints - 10;

            if (playerPoints <= 0){
                document.querySelector(".winner").innerHTML = "Game Over!";
            } else {
                document.querySelector(".winner").innerHTML = "You Lose";
            }

            p.textContent = playerPoints;
        }
    }
});

// knop om opnieuw te spellen

const btnreset = document.querySelector('.btn-reset');
btnreset.addEventListener('click', function() {
    userChoice = 'btn-reset';
        btnHiger.disabled = true;
        btnLower.disabled = true;
        genNumber.disabled = false;
    }
);

