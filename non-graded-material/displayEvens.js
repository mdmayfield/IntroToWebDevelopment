function clearErrors() {
  for (var loopCounter = 0;
       loopCounter < document.forms["numberSelector"].elements.length;
       loopCounter++) {
    if (document.forms["numberSelector"].elements[loopCounter]
        .parentElement.className.indexOf("has-") != -1) {
      document.forms["numberSelector"].elements[loopCounter]
      .parentElement.className = "form-group";
    }
  }
}

function clearTable() {
  var resultTable = document.getElementById("resultTable");
  while (resultTable.lastChild) {
    resultTable.removeChild(resultTable.lastChild);
  }
}

function displayEvens() {
  clearErrors();
  var startingNumber = document.forms["numberSelector"]["startingNumber"].value;
  var endingNumber = document.forms["numberSelector"]["endingNumber"].value;
  var step = document.forms["numberSelector"]["step"].value;

  /* Is there a way to loop over an array with a helper function, instead? */

  if (startingNumber == "" || isNaN(startingNumber)) {
    alert("Starting Number must be a number.");
    document.forms["numberSelector"]["startingNumber"]
    .parentElement.className = "form-group has-error";
    document.forms["numberSelector"]["startingNumber"].focus();
    return false;
  }

  if (endingNumber == "" || isNaN(endingNumber) ||
      Number(endingNumber) <= Number(startingNumber) ) {
    alert("Ending Number must be a number and greater than the starting number.");
    document.forms["numberSelector"]["endingNumber"]
    .parentElement.className = "form-group has-error";
    document.forms["numberSelector"]["endingNumber"].focus();
    return false;
  }

  if (step == "" || isNaN(step) || Number(step) <= 0) {
    alert("Step must be a positive number.");
    document.forms["numberSelector"]["step"]
    .parentElement.className = "form-group has-error";
    document.forms["numberSelector"]["step"].focus();
    return false;
  }

  clearTable();

  document.getElementById("result").style.display = "block";
  document.getElementById("resultDesc").innerText = "Here are the even "
  + "numbers between " + startingNumber + " and " + endingNumber
  + " by " + step + "'s:";

  /* apparently JS can pass by reference? */
  var resultTable = document.getElementById("resultTable");
  var anyMatches = false;

  for (var i = Number(startingNumber);
       i <= Number(endingNumber);
       i += Number(step)) {
    if (!(i % 2)) {
      var newRow = resultTable.insertRow();
      var newCell = newRow.insertCell();
      newCell.innerHTML = String(i);
      anyMatches = true;
    }
  }

  if (!anyMatches) {
    var newRow = resultTable.insertRow();
    var newCell = newRow.insertCell()
    newCell.innerHTML="None";
  }

  return false;
}

