function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollLotsaDice(dice, sides) {
  for (var i = 0; i < dice; i++) {
    console.log(rollDice(sides));
  }
}
