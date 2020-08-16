var znakow_w_kodzie = 4;
var gracz="";

// -- łatwy dostęp do elementów DOM
var start_button = document.querySelector("#start-button");
var menu_button = document.querySelector("#menu-button");
var change_button = document.querySelector("#changeName-button");
var seconds_to_start = document.querySelector("#seconds-to-start");
var codeP = document.querySelector("#code");
var ans = document.querySelector('#answer');
var seconds_to_answer = document.querySelector('#seconds-to-answer');
var summarize = document.querySelector('#summarize');


// --- Ustaw zdarzenia
start_button.addEventListener("click",count);
menu_button.addEventListener("click",showGame);
ans.addEventListener("input",check);
change_button.addEventListener("click",changeName);
function changeName() {
  document.getElementsByClassName("game-wrapper")[0].style.display = "none";
  document.getElementsByClassName("menu")[0].style.display = "block";
}
function showGame() {
  document.getElementsByClassName("game-wrapper")[0].style.display = "block";
  document.getElementsByClassName("menu")[0].style.display = "none";
  gracz = document.getElementById("name-input").value;
  document.getElementById("name").innerHTML = gracz;
}

//------------ Kiedy klikniesz w przycisk 'Zacznij'
function count() {
    summarize.style.display = "none";
    start_button.style.display = "none";
    ans.value = "";
    var sec = 3;
    seconds_to_start.innerHTML = sec;
    setCode();

    // odlicza czas i pokazuje kod
    var counter = setInterval(function() {
      sec--;
      if(sec>0) {
          seconds_to_start.innerHTML = sec;
      } else {
          seconds_to_start.innerHTML = "";
          ans.style.display = "block";
          document.getElementById("game").style.display="block";
          ans.focus();
          codeP.style.display = "block";
          start = new Date().getTime();
          clearInterval(counter);
      }
    },1000)
}

//------------- Kiedy wpiszesz kod
function check() {
    if(ans.value==code || ans.value==code.toLowerCase()) {
        end = new Date().getTime();
        time = (end - start)/1000;
        placeInHighScore(time);
        seconds_to_answer.innerHTML = time;
        summarize.style.display = "block";
        start_button.style.display = "block";
        codeP.style.display = "none";
        ans.style.display = "none";
        goodAnswer.play();
        addRow('ranking');
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
      var charCode = Math.floor(Math.random()*26) + 65;
        code +=String.fromCharCode(charCode);
    }
    codeP.innerHTML = code;
}
