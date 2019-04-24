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

function playLuckySevens() {
  var money = document.forms["playfield"]["startingBet"].value;
  money = Number(money.substring(1,money.length));

  var maxMoney = money;
  var maxMoneyRoll = 0;
  var currentRoll = 0;

// TODO: If money <=0 error

  while (money > 0) {
    if (rollDice() == 7) {
      money += 4;
    } else {
      money--;
    }
  }

  return false;
}

