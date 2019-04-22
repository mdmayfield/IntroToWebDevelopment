var n;
var sum = 0;

while (!Number(n)) {
  n = Number(prompt("Please enter a number to assign to n:", "25"));
}

document.write("<p>n = " + n + "</p><p>sum = 0");

if (n > 1) {
  for (var i = 1; i < n; i++) {
    sum += i;
    document.write(" + " + i);
  }
  document.write(" = ");
}

if (sum) {
  document.write(sum);
}

document.write("</p>");

