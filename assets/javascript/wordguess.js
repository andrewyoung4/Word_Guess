// words list
var words = ["SONIC", "MARIO", "SAMUS", "SPYRO", "ZELDA", "SNAKE", "CLOUD", "CRASH"];

var maxNumGuesses = 8; 
var guessedLetters = []; 
var ansWordArr = []; 
var numGuessesRemaining = 0; 
var numWins = 0; 
var numLosses = 0; 
var isFinished = false; 
var ansWord; 

// function runs at the start of page and used to restart after game isFinished
function setup() {
    
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

    
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

    
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    
    document.getElementById("giphy-embed").src = "";
    
    document.getElementById("numGuesses").style.color = "";

    
    updateScreen();
};


function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//function to check the key that's pressed
function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            //if numGuessesRemaining is 3 or less then change the color
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
            //if letter is in answer then replace the positioned "_" with the letter
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 


function isWinner() {
    
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
        //if the answer is guessed then play assigned gif
        if(ansWord === "SONIC") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xT9IgyBqlKUabiK4la";
        } else if (ansWord === "MARIO") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/SPB2DnJt1oB8c";
        } else if (ansWord === "SAMUS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/5fTRRRSJedcwU";
        } else if (ansWord === "CRASH") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/NJVv7Qkpq3aH6";
        } else if (ansWord === "ZELDA") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/IeGJBrVZTxblS";
        } else if (ansWord === "SNAKE") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/OrFmkOFx7PVK";
        } else if (ansWord === "CLOUD") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/ehgkBUuLhJsWY";
        } else if (ansWord === "SPYRO") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/GE3FV0HIFe4ve";
        }
            
    }
};

function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
    }

};



document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup 
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();
updateScreen();

console.log(ansWord);