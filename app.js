var msg1 = document.getElementById("message1"); 
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3"); 
var resetButton = document.getElementById("reset_btn");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

var playing = true;


function loadGame() {
    document.location.href = "game.html";
    playing = true;
}


function goHome() {
    document.location.href = "index.html";
}


function play() {
    var user_guess = document.getElementById("guess").value;
    if (playing == true) {
        if (user_guess < 1 || user_guess > 100) {
            alert("Please Enter a number Between 1 to 100");
        } else {
            guesses_num.push(user_guess);
            no_of_guesses += 1;
            if (user_guess < answer) {
                msg1.textContent = "Your Guess is Too low"
                msg2.textContent = "No. Of Guesses: " + no_of_guesses;
                msg3.textContent = "Guessed Numbers Are: " + guesses_num;
            } else if (user_guess > answer) {
                msg1.textContent = "Your Guess is Too High"
                msg2.textContent = "No. Of Guesses: " + no_of_guesses;
                msg3.textContent = "Guessed Numbers Are: " + guesses_num;
            } else if (user_guess == answer) {
                if (no_of_guesses == 1) {
                    // msg1.textContent = "Yahoo! You won!";
                    // msg2.textContent = "The Number was " + answer + "!";
                    // msg3.textContent = " You guessed it in JUST ONE GO! WOW!";
                    // resetButton.textContent = "PLAY AGAIN";
                    playing = false;
                    document.location.href = "win.html";
                } else {
                    // msg1.textContent = "Yahoo! You won!";
                    // msg2.textContent = "The Number was " + answer + "!";
                    // msg3.textContent = " You guessed it in " + no_of_guesses + " goes!";
                    // resetButton.textContent = "PLAY AGAIN";
                    playing = false;
                    document.location.href = "win.html";
                }
            }
        }
    } else {
        msg1.textContent = "Press the";
        msg2.textContent = "Play Again";
        msg3.textContent = "Button!";
    }
}


const node = document.getElementsByClassName("guessBox")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        play()
    }
});
