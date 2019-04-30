var sentence = "I luuuuv learning software development";

document.write("<p><strong>until now.</strong></p>");

for (var i=0; i < sentence.length; i++) {
  if(sentence[i] !== " ") {
    document.write(sentence[i] + "<br />");
  }
}


