let pickButtons = [];
let pchoice = "";
let oppchoice = "";
let pwins = 0;
let oppwins = 0;
let options = ["rock", "paper", "scissors", "lizard", "spock"]; 
let done = false;

pickButtons.push(document.getElementById("rock"));
pickButtons.push(document.getElementById("paper"));
pickButtons.push(document.getElementById("scissors"));
pickButtons.push(document.getElementById("lizard"));
pickButtons.push(document.getElementById("spock"));
let submitButton = document.getElementById("submitBtn");
let submitBtnParent = document.getElementById("submitBtnParent");
let displayer = document.getElementById("displayer");
let displayerScore = document.getElementById("displayerScore");
let winTypeText = document.getElementById("winTypeText");
let gameoverTab = document.getElementById("gameoverTab");
let displayerMatchup = document.getElementById("displayerMatchup");
let resultHeader = document.getElementById("resultHeader");
let resultDesc = document.getElementById("resultDesc");
let resultOpen = document.getElementById("resultOpen");

let winType = parseInt(localStorage.getItem("winType"));

getWinType();

function getWinType(){
    switch(winType){
        case 1: 
            winTypeText.innerText = "One game";
        break;
        case 3: 
            winTypeText.innerText = "Best out of 5";
        break;
        case 4: 
            winTypeText.innerText = "Best out of 7";
        break;
    }
}

pickButtons[0].addEventListener('click', function(e){
    select("rock");
    change(pickButtons[0]);
});
pickButtons[1].addEventListener('click', function(e){
    select("paper");
    change(pickButtons[1]);
});
pickButtons[2].addEventListener('click', function(e){
    select("scissors");
    change(pickButtons[2]);
});
pickButtons[3].addEventListener('click', function(e){
    select("lizard");
    change(pickButtons[3]);
});
pickButtons[4].addEventListener('click', function(e){
    select("spock");
    change(pickButtons[4]);
});

function select(option){
    pchoice = option;
}

submitButton.addEventListener('click', function(e){
    oppchoice = options[Math.floor(Math.random() * options.length)];
    displayResult(checkWin());
});

resultOpen.addEventListener('click', function(e){
    if(pwins > oppwins)
    resultHeader.innerText = "Player Won the game!";
    else
    resultHeader.innerText = "CPU Won the game!";

    resultDesc.innerText = `${pwins} - ${oppwins}`;
});

function checkWin(){
    if(done) return;
    console.log(pchoice);
    console.log(oppchoice);
    if(pchoice == oppchoice){
        displayResult("draw");
        return "draw";
    }
    switch(pchoice){
        case "rock": 
            if(oppchoice == "scissors" || oppchoice == "lizard"){
                pwins++;
                displayResult("pwin");
            }
            else{
                oppwins++;
                displayResult("plose");
            }
        break;
        case "paper": 
            if(oppchoice == "rock" || oppchoice == "spock"){
                pwins++;
                displayResult("pwin");
            }
            else{
                oppwins++;
                displayResult("plose");
            }
        break;
        case "scissors": 
            if(oppchoice == "lizard" || oppchoice == "paper"){
                pwins++;
                displayResult("pwin");
            }
            else{
                oppwins++;
                displayResult("plose");
            }
        break;
        case "lizard": 
            if(oppchoice == "spock" || oppchoice == "paper"){
                pwins++;
                displayResult("pwin");
            }
            else{
                oppwins++;
                displayResult("plose");
            }
        break;
        case "spock": 
            if(oppchoice == "rock" || oppchoice == "scissors"){
                pwins++;
                displayResult("pwin");
            }
            else{
                oppwins++;
                displayResult("plose");
            }
        break;
    }
    idk();
}

function displayResult(result){
        resetButtons();
        if(done) return;
        displayerMatchup.innerText = `${pchoice} vs ${oppchoice}`;
        switch(result){
            case "draw": 
                displayer.innerText = "Draw";
                displayerScore.innerText = `${pwins} - ${oppwins}`;
            break;
            case "pwin": 
                displayer.innerText = "Player Wins!";
                displayerScore.innerText = `${pwins} - ${oppwins}`;
            break;
            case "plose": 
                displayer.innerText = "Opponent Wins!";
                displayerScore.innerText = `${pwins} - ${oppwins}`;
            break;
        }
}

function change(changeThing){
    if(done) return;
    pickButtons.forEach(element => {
        element.className = "normal-button";
    });
    changeThing.className = "selected-button";
    displayer.innerText = "";
    displayerScore.innerText = "";
    displayerMatchup.innerText = "";
    checkIfDone();
}

function resetButtons(){
    if(done) return;
    pickButtons.forEach(element => {
        element.className = "normal-button";
    }); 
    submitBtnParent.className = "not-done";
    submitButton.className = "begin-button-disable";
}

function checkIfDone(){
    if(pchoice != ""){
        submitBtnParent.className = "";
        submitButton.className = "begin-button";
    }
}

function idk(){
    if(pwins >= winType || oppwins >= winType){
        gameoverTab.className = "center-body";
        done = true;
    }
}


