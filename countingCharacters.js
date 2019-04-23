function countingCharacters(stringToCount) {
  console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind) {
  var characterCount = 0;
  for (var characterPosition = 0;
       characterPosition < stringToCount.length;
       characterPosition++) {
    if (stringToCount[characterPosition] == characterToFind) {
      characterCount++;
    }
  }
  console.log("String to search in: " + stringToCount);
  console.log("Character to find: " + characterToFind);
  console.log("Number of times the character appears: " + characterCount);
}

