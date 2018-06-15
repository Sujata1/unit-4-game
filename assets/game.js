var crystals = $("#crystals");
const crystal_id = "crystal-";
var crystalid = "#crystal-";

var numberGuessed = 0;
var totalScore = 0;
var totalWin = 0;
var totalLost = 0;
var lostText = "You Have Lost";
var winText = "You Have Won!!";
var gameFinished = true;

var imgarray = ["purple-gem.png", "blue-gem.png", "green-gem.png", "pink-gem.png"];

function containRandoms(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min;
};

for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/" + imgarray[i]);
    imageCrystal.attr("data-crystalvalue", "");
    imageCrystal.attr("id", crystal_id + (i + 1));
    crystals.append(imageCrystal);
}


function getNumberToWin() {
    numberGuessed = containRandoms(19, 121);
    console.log("numberGuessed" + numberGuessed);
    $("#numberToWin").text(numberGuessed);
}


function getNumberToCrystals() {
    for (var i = 1; i < 5; i++) {
        $(crystalid + i).attr("data-crystalvalue", containRandoms(1, 13));
    }
}

//STARTUP
getNumberToWin();
getNumberToCrystals();

function resetGame() {
    totalScore = 0;
  
    $("#numberScore").text(totalScore);
    getNumberToWin();
    getNumberToCrystals();
    gameFinished = false;
}

function gameWin() {
    totalWin++;
    $("#finalResult").text(winText);
    $("#totalWin").text(totalWin);
    resetGame();
  
}

function gameLost() {
    totalLost++;
    $("#finalResult").text(lostText);
    $("#totaLoss").text(totalLost);
    resetGame();
}

$(".crystal-image").on("click", function () {
    if (!gameFinished){
        $("#finalResult").text("");
       gameFinished = true;
    }
    var crystalvalue = $(this).attr("data-crystalvalue");
    totalScore += parseInt(crystalvalue);
    $("#numberScore").text(totalScore);
    console.log($(this).attr("data-crystalvalue"));
    
    if (totalScore === numberGuessed) {
        gameWin();
    }

    if (totalScore > numberGuessed) {
        gameLost();
    }
});
