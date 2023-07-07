const buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];
var userClickedPattern = [];
let level = 0

//Starting of the game
$(document).keypress (function(){
    if (level === 0){
        nextSequence()
    }else {}
})
$(".clickMe").click (function(){
    if (level === 0){
        nextSequence()
    }else {}
})

// Automation of the game
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("#" + randomChosenColour).fadeOut(50).fadeIn(100);
    playSound(randomChosenColour)
    $("h1").text("Level " +level)
    var n = [];
    userClickedPattern = n;
}

//Recored and response according User's click
$(".btn").click (function (){
    var userChosenColour = $ (this).attr ("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1)
})

//Playing the sound according the colored button
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
//Animation when the user press any key
function animatePress(currentColour) {
    $("."+ currentColour).addClass ("pressed")
    setTimeout(() => {
        $("."+ currentColour).removeClass ("pressed")
    }, 100);
}
//Wronged animation and function
function wronged(){
    var wrong = new Audio ("sounds/wrong.mp3")
    wrong.play()
    $("body").addClass("game-over")
    setTimeout(() => {
        $("body").removeClass ("game-over")
    }, 100);
    $("h1").text("Game Over, Press Any Key to Restart")
    startOver()
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (gamePattern.length===userClickedPattern.length){
            setTimeout(() => {
                nextSequence()
            }, 800);
        }else {console.log ("correct color")}
    }else {wronged()
    console.log ("wrong")}
}
// Restart the game
function startOver (){
    level= 0 
    gamePattern = []
}
