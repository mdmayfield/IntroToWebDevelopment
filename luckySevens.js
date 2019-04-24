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

  var money = startingBet;
  var maxMoney = money;
  var maxMoneyRoll = 0;
  var currentRoll = 0;

  while (money > 0) {
    currentRoll++;

    var d1 = rollD6();
    var d2 = rollD6();
    var diceValue = d1 + d2;

    /* Show total number of rolls */
    document.getElementById("rollNo").innerHTML = String(currentRoll);

    /* Show two dice w/Unicode chars in their own div */
    document.getElementById("animDice").innerHTML = String(dieFace[d1 - 1]) + 
                                                    String(dieFace[d2 - 1]);

    /* Show current amount of money */
    document.getElementById("money").innerHTML = currency(money);

    /* Show highest amount of money so far */
    document.getElementById("maxMoney").innerHTML = currency(maxMoney);

    /* Animation speed throttle: if x milliseconds have passed, go ahead;
     * if not, wait however long it takes to get there. Find x by trial and
     * error */

    if (diceValue == 7) {
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

