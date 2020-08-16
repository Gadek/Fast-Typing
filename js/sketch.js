<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var sec = 3; 
var znakow_w_kodzie = 4;

// -- łatwy dostęp do elementów DOM
var counting = document.querySelector('#counting').style;
var start_button = document.querySelector('#start-button');
var seconds_to_start = document.querySelector("#seconds-to-start");
var codeP = document.querySelector("#code");
var ans = document.querySelector('#answer');
var false_answer = document.querySelector('#false-answer');
var seconds_to_answer = document.querySelector('#seconds-to-answer');
var summarize = document.querySelector('#summarize');


// --- Ustaw zdarzenia
start_button.addEventListener("click",count);
ans.addEventListener("change",check)




// ---------------  ALGORYTMY ----------------------//


//------------ Kiedy klikniesz w przycisk 'Zacznij'
function count() {
    counting.display = "block";
    summarize.style.display = "none";
    start_button.style.display = "none"; 
    ans.style.display = "block";
    
    ans.value = "";
    
    setCode();
    sec = 3;
    seconds_to_start.innerHTML = sec;
    go = true;
    
    
    // odlicza czas i pokazuje kod
    var counter = setInterval(function() {
        if(go) {
            sec--;
            if(!ready()) {
                seconds_to_start.innerHTML = sec;  
            } else {
                counting.display = "none";
                codeP.style.display = "block";
                start = new Date().getTime();
                go = false;
                clearInterval(counter);
            }
        }
    },1000)
}

//------------- Kiedy wpiszesz kod
function check() {
 
    if(answerIsTrue()) {
        calculateTime();
        placeInHighScore(time);
        seconds_to_answer.innerHTML = time;
        summarize.style.display = "block";
        start_button.style.display = "block";
        codeP.style.display = "none";
        ans.style.display = "none";
        goodAnswer.play();
        addRow('ranking');
    } else {
        displayWrongAnswer();
        badAnswer.play();
    }
}

function addRow(tableID) {
    var tableRef = document.getElementById(tableID);
    // Insert a row in the table at row index 'row'
    var newRow = tableRef.insertRow(row);

    //----- Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
    // Append a text node to the cell
    var newText = document.createTextNode(row+'.');
    newCell.appendChild(newText);
    
    //----- Insert a cell in the row at index 1
    var newCell = newRow.insertCell(1);
    // Append a text node to the cell
    var newText = document.createTextNode(time);
    newCell.appendChild(newText);
    
    
    row++;
}

function setCode() {
    code = "";
    
    for(var i = 0 ; i<znakow_w_kodzie ; i++) {
        setChar();
    }
    codeP.innerHTML = code;
}



=======
var sec = 3; 
var znakow_w_kodzie = 4;

// -- łatwy dostęp do elementów DOM
var counting = document.querySelector('#counting').style;
var start_button = document.querySelector('#start-button');
var seconds_to_start = document.querySelector("#seconds-to-start");
var codeP = document.querySelector("#code");
var ans = document.querySelector('#answer');
var false_answer = document.querySelector('#false-answer');
var seconds_to_answer = document.querySelector('#seconds-to-answer');
var summarize = document.querySelector('#summarize');


// --- Ustaw zdarzenia
start_button.addEventListener("click",count);
ans.addEventListener("change",check)




// ---------------  ALGORYTMY ----------------------//


//------------ Kiedy klikniesz w przycisk 'Zacznij'
function count() {
    counting.display = "block";
    summarize.style.display = "none";
    start_button.style.display = "none"; 
    ans.style.display = "block";
    
    ans.value = "";
    
    setCode();
    sec = 3;
    seconds_to_start.innerHTML = sec;
    go = true;
    
    
    // odlicza czas i pokazuje kod
    var counter = setInterval(function() {
        if(go) {
            sec--;
            if(!ready()) {
                seconds_to_start.innerHTML = sec;  
            } else {
                counting.display = "none";
                codeP.style.display = "block";
                start = new Date().getTime();
                go = false;
                clearInterval(counter);
            }
        }
    },1000)
}

//------------- Kiedy wpiszesz kod
function check() {
 
    if(answerIsTrue()) {
        calculateTime();
        placeInHighScore(time);
        seconds_to_answer.innerHTML = time;
        summarize.style.display = "block";
        start_button.style.display = "block";
        codeP.style.display = "none";
        ans.style.display = "none";
        goodAnswer.play();
        addRow('ranking');
    } else {
        displayWrongAnswer();
        badAnswer.play();
    }
}

function addRow(tableID) {
    var tableRef = document.getElementById(tableID);
    // Insert a row in the table at row index 'row'
    var newRow = tableRef.insertRow(row);

    //----- Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
    // Append a text node to the cell
    var newText = document.createTextNode(row+'.');
    newCell.appendChild(newText);
    
    //----- Insert a cell in the row at index 1
    var newCell = newRow.insertCell(1);
    // Append a text node to the cell
    var newText = document.createTextNode(time);
    newCell.appendChild(newText);
    
    
    row++;
}

function setCode() {
    code = "";
    
    for(var i = 0 ; i<znakow_w_kodzie ; i++) {
        setChar();
    }
    codeP.innerHTML = code;
}



>>>>>>> parent of 7fc9647... Zmodyfikowana wersja
=======
var sec = 3; 
var znakow_w_kodzie = 4;

// -- łatwy dostęp do elementów DOM
var counting = document.querySelector('#counting').style;
var start_button = document.querySelector('#start-button');
var seconds_to_start = document.querySelector("#seconds-to-start");
var codeP = document.querySelector("#code");
var ans = document.querySelector('#answer');
var false_answer = document.querySelector('#false-answer');
var seconds_to_answer = document.querySelector('#seconds-to-answer');
var summarize = document.querySelector('#summarize');


// --- Ustaw zdarzenia
start_button.addEventListener("click",count);
ans.addEventListener("change",check)




// ---------------  ALGORYTMY ----------------------//


//------------ Kiedy klikniesz w przycisk 'Zacznij'
function count() {
    counting.display = "block";
    summarize.style.display = "none";
    start_button.style.display = "none"; 
    ans.style.display = "block";
    
    ans.value = "";
    
    setCode();
    sec = 3;
    seconds_to_start.innerHTML = sec;
    go = true;
    
    
    // odlicza czas i pokazuje kod
    var counter = setInterval(function() {
        if(go) {
            sec--;
            if(!ready()) {
                seconds_to_start.innerHTML = sec;  
            } else {
                counting.display = "none";
                codeP.style.display = "block";
                start = new Date().getTime();
                go = false;
                clearInterval(counter);
            }
        }
    },1000)
}

//------------- Kiedy wpiszesz kod
function check() {
 
    if(answerIsTrue()) {
        calculateTime();
        placeInHighScore(time);
        seconds_to_answer.innerHTML = time;
        summarize.style.display = "block";
        start_button.style.display = "block";
        codeP.style.display = "none";
        ans.style.display = "none";
        goodAnswer.play();
        addRow('ranking');
    } else {
        displayWrongAnswer();
        badAnswer.play();
    }
}

function addRow(tableID) {
    var tableRef = document.getElementById(tableID);
    // Insert a row in the table at row index 'row'
    var newRow = tableRef.insertRow(row);

    //----- Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
    // Append a text node to the cell
    var newText = document.createTextNode(row+'.');
    newCell.appendChild(newText);
    
    //----- Insert a cell in the row at index 1
    var newCell = newRow.insertCell(1);
    // Append a text node to the cell
    var newText = document.createTextNode(time);
    newCell.appendChild(newText);
    
    
    row++;
}

function setCode() {
    code = "";
    
    for(var i = 0 ; i<znakow_w_kodzie ; i++) {
        setChar();
    }
    codeP.innerHTML = code;
}



>>>>>>> parent of 7fc9647... Zmodyfikowana wersja
=======
var sec = 3; 
var znakow_w_kodzie = 4;

// -- łatwy dostęp do elementów DOM
var counting = document.querySelector('#counting').style;
var start_button = document.querySelector('#start-button');
var seconds_to_start = document.querySelector("#seconds-to-start");
var codeP = document.querySelector("#code");
var ans = document.querySelector('#answer');
var false_answer = document.querySelector('#false-answer');
var seconds_to_answer = document.querySelector('#seconds-to-answer');
var summarize = document.querySelector('#summarize');


// --- Ustaw zdarzenia
start_button.addEventListener("click",count);
ans.addEventListener("change",check)




// ---------------  ALGORYTMY ----------------------//


//------------ Kiedy klikniesz w przycisk 'Zacznij'
function count() {
    counting.display = "block";
    summarize.style.display = "none";
    start_button.style.display = "none"; 
    ans.style.display = "block";
    
    ans.value = "";
    
    setCode();
    sec = 3;
    seconds_to_start.innerHTML = sec;
    go = true;
    
    
    // odlicza czas i pokazuje kod
    var counter = setInterval(function() {
        if(go) {
            sec--;
            if(!ready()) {
                seconds_to_start.innerHTML = sec;  
            } else {
                counting.display = "none";
                codeP.style.display = "block";
                start = new Date().getTime();
                go = false;
                clearInterval(counter);
            }
        }
    },1000)
}

//------------- Kiedy wpiszesz kod
function check() {
 
    if(answerIsTrue()) {
        calculateTime();
        placeInHighScore(time);
        seconds_to_answer.innerHTML = time;
        summarize.style.display = "block";
        start_button.style.display = "block";
        codeP.style.display = "none";
        ans.style.display = "none";
        goodAnswer.play();
        addRow('ranking');
    } else {
        displayWrongAnswer();
        badAnswer.play();
    }
}

function addRow(tableID) {
    var tableRef = document.getElementById(tableID);
    // Insert a row in the table at row index 'row'
    var newRow = tableRef.insertRow(row);

    //----- Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
    // Append a text node to the cell
    var newText = document.createTextNode(row+'.');
    newCell.appendChild(newText);
    
    //----- Insert a cell in the row at index 1
    var newCell = newRow.insertCell(1);
    // Append a text node to the cell
    var newText = document.createTextNode(time);
    newCell.appendChild(newText);
    
    
    row++;
}

function setCode() {
    code = "";
    
    for(var i = 0 ; i<znakow_w_kodzie ; i++) {
        setChar();
    }
    codeP.innerHTML = code;
}



>>>>>>> parent of 7fc9647... Zmodyfikowana wersja
=======
var sec = 3; 
var znakow_w_kodzie = 4;

// -- łatwy dostęp do elementów DOM
var counting = document.querySelector('#counting').style;
var start_button = document.querySelector('#start-button');
var seconds_to_start = document.querySelector("#seconds-to-start");
var codeP = document.querySelector("#code");
var ans = document.querySelector('#answer');
var false_answer = document.querySelector('#false-answer');
var seconds_to_answer = document.querySelector('#seconds-to-answer');
var summarize = document.querySelector('#summarize');


// --- Ustaw zdarzenia
start_button.addEventListener("click",count);
ans.addEventListener("change",check)




// ---------------  ALGORYTMY ----------------------//


//------------ Kiedy klikniesz w przycisk 'Zacznij'
function count() {
    counting.display = "block";
    summarize.style.display = "none";
    start_button.style.display = "none"; 
    ans.style.display = "block";
    
    ans.value = "";
    
    setCode();
    sec = 3;
    seconds_to_start.innerHTML = sec;
    go = true;
    
    
    // odlicza czas i pokazuje kod
    var counter = setInterval(function() {
        if(go) {
            sec--;
            if(!ready()) {
                seconds_to_start.innerHTML = sec;  
            } else {
                counting.display = "none";
                codeP.style.display = "block";
                start = new Date().getTime();
                go = false;
                clearInterval(counter);
            }
        }
    },1000)
}

//------------- Kiedy wpiszesz kod
function check() {
 
    if(answerIsTrue()) {
        calculateTime();
        placeInHighScore(time);
        seconds_to_answer.innerHTML = time;
        summarize.style.display = "block";
        start_button.style.display = "block";
        codeP.style.display = "none";
        ans.style.display = "none";
        goodAnswer.play();
        addRow('ranking');
    } else {
        displayWrongAnswer();
        badAnswer.play();
    }
}

function addRow(tableID) {
    var tableRef = document.getElementById(tableID);
    // Insert a row in the table at row index 'row'
    var newRow = tableRef.insertRow(row);

    //----- Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
    // Append a text node to the cell
    var newText = document.createTextNode(row+'.');
    newCell.appendChild(newText);
    
    //----- Insert a cell in the row at index 1
    var newCell = newRow.insertCell(1);
    // Append a text node to the cell
    var newText = document.createTextNode(time);
    newCell.appendChild(newText);
    
    
    row++;
}

function setCode() {
    code = "";
    
    for(var i = 0 ; i<znakow_w_kodzie ; i++) {
        setChar();
    }
    codeP.innerHTML = code;
}



>>>>>>> parent of 7fc9647... Zmodyfikowana wersja
