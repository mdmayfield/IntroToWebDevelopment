var n = 25;
var result = 0;

document.write("<p>Before discombobulation and transmogrification, the value of <b>n</b> is " + n + " and the value of <b>result</b> is " + result + ".</p>");

if (Number.isInteger(n) && Number.isInteger(result)) {
  if (n % 2) {
    result = result + 10;
  } else {
    result = result - n;
  }
} else {
  document.write("<p>One or both of those numbers is not an integer, so tough luck.</p>");
  n = "unusable";
  result = "irrelevant";
}

document.write("<p>After discombobulation and transmogrification, the value of <b>n</b> is " + n + " and the value of <b>result</b> is " + result + ".</p>");
