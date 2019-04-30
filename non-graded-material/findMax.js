var bunchaNumbers = [4, 8, 15, 16, 23, 42, 2, 19, 100, 12];
var maxCandidate = 0;

// Start at 1 since we don't need to compare 0 to 0
for (var i = 1; i < bunchaNumbers.length; i++) {
  if (bunchaNumbers[maxCandidate] < bunchaNumbers[i]) {
    maxCandidate = i;
  }
}

console.log("The greatest number is bunchaNumbers[" + maxCandidate +
            "] which is equal to " + bunchaNumbers[maxCandidate] + ".");

