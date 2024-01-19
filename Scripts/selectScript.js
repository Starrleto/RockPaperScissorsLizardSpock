
let gamePick = false;
let winPick = false;

let winTypeButtons = [];

let playBtn = document.getElementById("playBtn");
let playBtnVisual = document.getElementById("playBtnVisual");

let singlep = document.getElementById("single");
let multip = document.getElementById("multi");

winTypeButtons.push(document.getElementById("one"));
winTypeButtons.push(document.getElementById("two"));
winTypeButtons.push(document.getElementById("three"));

if(singlep != null){
    singlep.addEventListener('click', function(e){
        playBtn.href = "../Pages/playsingle.html";
        changePlay(singlep);
    });
    multip.addEventListener('click', function(e){
        playBtn.href = "../Pages/playmulti.html";
        changePlay(multip);
    });

    winTypeButtons[0].addEventListener('click', function(e){
        localStorage.setItem("winType", 1);
        change(winTypeButtons[0]);
    });
    winTypeButtons[1].addEventListener('click', function(e){
        localStorage.setItem("winType", 3);
        change(winTypeButtons[1]);
    });
    winTypeButtons[2].addEventListener('click', function(e){
        localStorage.setItem("winType", 4);
        change(winTypeButtons[2]);
    });
}

function change(changeThing){
    winTypeButtons.forEach(element => {
        element.className = "normal-button";
    });
    changeThing.className = "selected-button";
    gamePick = true;
    checkIfDone();
}

function changePlay(changeThing){
    singlep.className = "normal-button";
    multip.className = "normal-button";
    changeThing.className = "selected-button";
    winPick = true;
    checkIfDone();
}

function checkIfDone(){
    if(gamePick && winPick){
        playBtn.className = "";
        playBtnVisual.className = "begin-button";
    }
}