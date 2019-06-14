
// Decleration of global variables//
var wins = 0;
var losses = 0;
var Guesses_Left;
var words = ["dog", "cat", "fish", "octupus", "tiger", "shark", "wolf", "frog", "alligator", "deer", "snake", "ladybug" ];


// Decleration and definition of the hangman game function//

function hangman() {
    

//Generate a random number which will be used to pick a word from the words array to be guessed by the player// 
//Decleration of underScore which will be used to display the letters which haven't been guessed.//

    var randomNum = Math.floor(Math.random() * words.length);
    var choosenWord = words[randomNum];
    var underScore = [];
    var LettersUsed = [];
console.log(choosenWord);
//For loop appends the number of underscores with respect to the length of the choosen word//

    for(i=0; i<choosenWord.length;i++){
        underScore.push("_");
    }
console.log(underScore.length);
// decleration of the local variable which will be used to display the number of guesses the player has remaining//    
// Player is limited to 4 additional guesses than the length of the choosen word.// 
// Displays the number of underscores to the HTML document.//

    Guesses_Left = underScore.length + 3;
    document.getElementById("underscores").textContent = underScore;
console.log(Guesses_Left);
//While loop so you can put in input till the Guesses remaining variable is equal to 0//

    while(Guesses_Left>0){

//Promps player to enter a letter that is stored in the local variable guess and then guess replaces the underscore at the index of the letter in the word.
        document.onkeyup = function(event){
            var guess = event.key;
    //  var guess = prompt("Enter a letter you think is in the word..."); //
        console.log(guess)
//checks if the letter has already been used. If so you try again other wise it is appended to the letters used array.//
        
        if(LettersUsed.includes(guess)){
            alert("You already tryed this letter dude");
        }
        else{
            LettersUsed.push(guess);
            for(i=0; i<choosenWord.length;i++){
                if(guess==choosenWord[i]){
                    underScore[i] = guess;
                }
                else{
                    continue;
                }
            }
    
//The division with ID used is updated with the letter guess you inputed//
//Guesses left is reduced by 1//
//the text content for the division with ID GR is appended the number of guesses remaining//    
            document.getElementById("used").textContent = document.getElementById("used").textContent + " " + guess;
            Guesses_Left --;
            document.getElementById("GR").textContent = "Number of guesses remaining: " + Guesses_Left;
            document.getElementById("underscores").textContent =  underScore.join(" ");
    
// checks to see if there is underscores remaing and you win if not//

            if((underScore.includes("_") == false) && (Guesses_Left>0)){
                alert("You won!");
                wins ++;
                document.getElementById("rightGuess").textContent ="Player Wins: " + (wins);
                break;
            }
        }
        }
    }
// Once you've run out of guesses the while loop is exited and the game checks to see if you guessed the word on the last attemp.//    

    if((underScore.includes("_")==false) && (Guesses_Left === 0)){
        alert("You just barely won!");
        wins ++;
        document.getElementById("rightGuess").textContent = "Player Wins: " + (wins);
    }

// if any underscores remain you lose the game and are given an alert.//

    else{
        alert("You lost and were eaten by the animals of the jungle.");
        losses ++;
        document.getElementById("wrongGuess").textContent = "Player Losses: " + (losses);
    }
}



