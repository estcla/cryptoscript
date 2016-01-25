function caesarCipher(inputString) {
  var outputString = "";
  for (var i = 0; i < inputString.length; i++) {
    var c = inputString.charCodeAt(i);
    if (c >= 68 && c <= 90) outputString += String.fromCharCode(c - 3);
    else if (c >= 65 && c <= 67) outputString += String.fromCharCode(c - 3 + 26);
    else outputString += inputString.charAt(i);
  }
  return outputString;
}

function atbashCipher(inputString) {
  var outputString = "";
  for (var i = 0; i < inputString.length; i++) {
    var a = inputString.charCodeAt(i);
    if (a >= 65 && a <= 90) outputString += String.fromCharCode((90 - a) + 65);
    else outputString += inputString.charAt(i);
  }
  return outputString;
}

function a1z26Cipher(inputString) {
  var outputString = "";
  var splitString = inputString.split(/(\W| )/);
  for (var i = 0; i < splitString.length; i++) {
    var n = splitString[i];
    if (n >= 1 && n <= 26) outputString += String.fromCharCode(parseInt(n, 10) + 64);
    else outputString += n.replace("-", "");
  }
  return outputString;
}

$("#caesar").click(function() {
  var cipher = $("#cipherInput").find("input").val().toUpperCase();
  var cipherOutput = document.getElementById("cipherOutput");
  var output = document.createElement("h1");
  output.innerHTML = caesarCipher(cipher);
  cipherOutput.appendChild(output);
});

$("#atbash").click(function() {
  var cipher = $("#cipherInput").find("input").val().toUpperCase();
  var cipherOutput = document.getElementById("cipherOutput");
  var output = document.createElement("h1");
  output.innerHTML = atbashCipher(cipher);
  cipherOutput.appendChild(output);
});

$("#a1z26").click(function() {
  var cipher = $("#cipherInput").find("input").val().toUpperCase();
  var cipherOutput = document.getElementById("cipherOutput");
  var output = document.createElement("h1");
  output.innerHTML = a1z26Cipher(cipher);
  cipherOutput.appendChild(output);
});
