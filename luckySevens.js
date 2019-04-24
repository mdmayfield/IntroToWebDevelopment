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

function buildTable(startingBet, currentRoll, maxMoney, maxMoneyRoll) {
  console.log("start bet " + startingBet);
  console.log("total rolls " + currentRoll);
  console.log("highest amt " + maxMoney);
  console.log("roll at highest " + maxMoneyRoll);
}

function playLuckySevens() {
  var startingBet = document.forms["playfield"]["startingBet"].value;
  /* Strip commas, then convert to a number type */
  startingBet = startingBet.replace(/,/g , '');
  startingBet = Number(startingBet.substring(1,startingBet.length));
  var money = startingBet;

  var maxMoney = money;
  var maxMoneyRoll = 0;
  var currentRoll = 0;

// TODO: If money <=0 error

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

  return false;
}

