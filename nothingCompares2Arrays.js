var bunchaStuff = [4, 8, 15, 16, 23, 42, "Spam", "Coconuts", 100, 12];
var compare = prompt("What would you like to compare to the items in the array?", "16");

document.write("<table><tr><th>Prompt</th><th>==</th><th>&gt;</th><th>&lt;</th><th>Item</th></tr>");

for (var i = 0; i < bunchaStuff.length; i++) {
  document.write("<tr><td>" + compare + "</td>");
  document.write("<td>" + (compare == bunchaStuff[i]) + "</td>");
  document.write("<td>" + (compare > bunchaStuff[i]) + "</td>");
  document.write("<td>" + (compare < bunchaStuff[i]) + "</td>");
  document.write("<td>" + bunchaStuff[i] + "</td></tr>");
}

document.write("</table>");

