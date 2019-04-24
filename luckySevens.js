function resetGame() {
  var resultTable = document.getElementById("resultTable");
  while (resultTable.lastChild) {
    resultTable.removeChild(resultTable.lastChild);
  }
}

function playLuckySevens() {
  var money = document.forms["playfield"]["startingBet"].value;
  console.log(money);

  realMoney = Number(money.substring(1,money.length));
  console.log(realMoney);

  return false;
}

