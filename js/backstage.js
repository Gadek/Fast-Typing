
// --- Wczytaj dźwięki

var goodAnswer = new Audio("sound/goodAnswer.mp3");

// --- zarezerwuj potrzebne zmienne
var code,start,end,time,i=0,row=1;
var highscores = [];


function placeInHighScore(time) {
    highscores[i] = time;
    i++;
}
