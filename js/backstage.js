// --- Wczytaj dźwięki
var badAnswer = new Audio("sound/badAnswer.mp3");
var goodAnswer = new Audio("sound/goodAnswer.mp3");

// --- zarezerwuj potrzebne zmienne
var code,start,end,time,go=false,i=0,row=1;
var highscores = [];

function setChar() {
    var n = Math.floor(Math.random()*26);
        if(n==0) {
            code = code + 'q';
        } else if(n==1) {
            code = code + 'w';
        } else if(n==2) {
            code = code + 'e';
        } else if(n==3) {
            code = code + 'r';
        } else if(n==4) {
            code = code + 't';
        } else if(n==5) {
            code = code + 'y';
        } else if(n==6) {
            code = code + 'u';
        } else if(n==7) {
            code = code + 'i';
        } else if(n==8) {
            code = code + 'o';
        } else if(n==9) {
            code = code + 'p';
        } else if(n==10) {
            code = code + 'a';
        } else if(n==11) {
            code = code + 's';
        } else if(n==12) {
            code = code + 'd';
        } else if(n==13) {
            code = code + 'f';
        } else if(n==14) {
            code = code + 'g';
        } else if(n==15) {
            code = code + 'h';
        } else if(n==16) {
            code = code + 'j';
        } else if(n==17) {
            code = code + 'k';
        } else if(n==18) {
            code = code + 'l';
        } else if(n==19) {
            code = code + 'z';
        } else if(n==20) {
            code = code + 'x';
        } else if(n==21) {
            code = code + 'c';
        } else if(n==22) {
            code = code + 'v';
        } else if(n==23) {
            code = code + 'b';
        } else if(n==24) {
            code = code + 'n';
        } else if(n==25) {
            code = code + 'm';
        }
}
function ready() {
    if(sec<=0) {
        return true;
    } else {
        return false;
    };
}

function answerIsTrue() {
    if(ans.value==code) {
        return true;
    } else {
        return false;
    }
}
function displayWrongAnswer() {
    false_answer.style.display = 'block';
    setTimeout(function(){false_answer.style.display = 'none';},2000);
}
function calculateTime() {
    end = new Date().getTime();
    time = (end - start)/1000;
}
function placeInHighScore(time) {
    highscores[i] = time;
    i++;
}