
function detrmineWinner()
{
    var winlossMessage = "";
    var computerSelection = getComputerTurn(3)
    console.log(computerSelection.toString());
    var e = document.getElementById("userchoice");
    var userSelection = e.options[e.selectedIndex].value;
    console.log(userSelection);

    if (userSelection == computerSelection) 
    {winlossMessage = "It's a Tie!";}
    if(userSelection == 1 && computerSelection == 3) //rock beats scissors
    {winlossMessage = "You Win!";}
    if(userSelection == 2 && computerSelection == 1) //paper beats rock
    {winlossMessage = "You Win!";}
    if(userSelection == 3 && computerSelection == 2) //scissors beats paper
    {winlossMessage = "You Win!";}
    if(userSelection == 1 && computerSelection == 2) //rock loses to paper
    {winlossMessage = "You Lost!";}
    if(userSelection == 2 && computerSelection == 3) //paper loses to scissors
    {winlossMessage = "You Lost!";}
    if(userSelection == 3 && computerSelection == 1) //scissors lose to rock
    {winlossMessage = "You Lost!";}

    winnerMessage(winlossMessage);
}

function getComputerTurn(max) 
{
    return Math.floor(Math.random() * Math.floor(max))+1;
}

function winnerMessage(message) 
{
    confirm(message);
    addResult(message);
}

var roundNum = 1;
function addResult(message) {
    var table = document.getElementById("resultsTable");
    var row = table.insertRow(1);
    var numcell = row.insertCell(0);
    var textcell = row.insertCell(1);
    textcell.innerHTML = message;
    numcell.innerHTML = roundNum;
    roundNum++;
}
