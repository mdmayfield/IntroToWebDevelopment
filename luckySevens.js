function resetGame() {
  var resultTable = document.getElementById("resultTable");
  while (resultTable.lastChild) {
    resultTable.removeChild(resultTable.lastChild);
  }
}

function rollDice() {
  /* Two 6-sided dice is different from one 12-sided die! */
  return (Math.floor(Math.random() * 6) + 1) +
         (Math.floor(Math.random() * 6) + 1);
}

function currency(amount) {
  return "$" + amount.toLocaleString(undefined, { style: 'decimal',
         maximumFractionDigits : 2, minimumFractionDigits : 2 });
}

function buildTable(startingBet, currentRoll, maxMoney, maxMoneyRoll) {

  var tableCell = document.getElementsByClassName("rtcell");

  /*Starting Bet*/
  tableCell[0].innerText = currency(startingBet);

  /*Total Rolls Before Going Broke*/
  tableCell[1].innerText = currentRoll;

  /*Highest Amount Won*/
  tableCell[2].innerText = currency(maxMoney);

  /*Roll Count at Highest Amount Won*/
  tableCell[3].innerText = maxMoneyRoll

  document.getElementById("results").style.display="block";
}

function playLuckySevens() {
  var startingBet = document.forms["playfield"]["startingBet"].value;
  /* Strip commas, then convert to a number type */
  startingBet = startingBet.replace(/,/g , '');
  startingBet = Number(startingBet.substring(1,startingBet.length));

  if (startingBet <= 0) {
    alert("Starting Bet must be greater than 0.");
/*    startingBetInput = document.getElementById("startingBet");
    startingBetInput.setCustomValidity("Starting Bet must be greater than 0.");
    startingBetInput.focus();
    startingBetInput.select();*/
    return false;
  }

  var money = startingBet;
  var maxMoney = money;
  var maxMoneyRoll = 0;
  var currentRoll = 0;

  while (money > 0) {
    currentRoll++;

    if (rollDice() == 7) {
      money += 4;
    } else {
      money--;
    }

    if (money > maxMoney) {
      maxMoney = money;
      maxMoneyRoll = currentRoll;
    }
  }

  buildTable(startingBet, currentRoll, maxMoney, maxMoneyRoll);

  /* Change "Play" to "Play Again" */
  var playButton = document.getElementById("playButton");
  playButton.innerText = "Play Again";

  return false;
}

