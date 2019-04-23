function clearErrors() {
  for (var loopCounter = 0;
       loopCounter < document.forms["numberFun"].elements.length;
       loopCounter++; {
    if (document.forms["numberFun"].elements[loopCounter]
        .parentElement.className.indexOf("has-") != -1) {
      document.forms["numberFun"].elements[loopCounter]
      .parentElement.className = "form-group";
    }
  }
}

function resetForm() {
  clearErrors();
  document.forms["numberFun"]["num1"].value = "";
  document.forms["numberFun"]["num2"].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("submitButton").innerText = "Submit";
  document.forms["numberFun"]["num1"].focus();
}
