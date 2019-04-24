function resetGame() {
  var resultTable = document.getElementById("resultTable");
  while (resultTable.lastChild) {
    resultTable.removeChild(resultTable.lastChild);
  }
}

function rollD6() {
  return (Math.floor(Math.random() * 6) + 1);
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
  var dieFace = ["&#x2680", "&#x2681", "&#x2682",
                 "&#x2683", "&#x2684", "&#x2685"];
  var startingBet = Number(document.forms["playfield"]["startingBet"].value);

  /* This won't ordinarily be possible thanks to HMTL5 form validation, but
     check for it here anyway */
  if (startingBet <= 0) {
    alert("Starting Bet must be greater than 0.");
    startingBetInput = document.getElementById("startingBet");
    startingBetInput.focus();
    startingBetInput.select();
    return false;
  }

  /* Change "Play" to "Play Again" */
  var playButton = document.getElementById("playButton");
  playButton.innerText = "Play Again";

  /* Disable Play button */
  playButton.disabled = true;

  /* Make sure the Results table is hidden */
  document.getElementById("results").style.display = "none";

  var money = startingBet;
  var maxMoney = money;
  var maxMoneyRoll = 0;
  var currentRoll = 0;

  var playOneRound = function () {
    currentRoll++;

    var d1 = rollD6();
    var d2 = rollD6();
    var diceValue = d1 + d2;

    if (diceValue == 7) {
      money += 4;
    } else {
      money--;
    }

    if (money > maxMoney) {
      maxMoney = money;
      maxMoneyRoll = currentRoll;
    }

    /* Update play table */
    document.getElementById("rollNo").innerHTML = String(currentRoll);
    document.getElementById("animDice").innerHTML = String(dieFace[d1 - 1]) + 
                                                    String(dieFace[d2 - 1]);
    document.getElementById("money").innerHTML = currency(money);
    document.getElementById("maxMoney").innerHTML = currency(maxMoney);

    /* If we run out of money, build the results table. If there is still
     * money left, wait a bit then call this function again.
     */

    if (money <= 0) {
      buildTable(startingBet, currentRoll, maxMoney, maxMoneyRoll);
      playButton.disabled = false;
    } else {
      window.setTimeout(playOneRound, 100)
    }
  }

  playOneRound();

  return false;
}

