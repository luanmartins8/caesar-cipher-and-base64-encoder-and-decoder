// Shows Shift / Key option if Caesar Cipher encoder is selected

var divIncrease = document.querySelector(".divIncrease");
var selecaoCod = document.addEventListener("click", function () {
  var codes = document.getElementById("codes").value;
  if (codes == "caesarCipher") {
    divIncrease.style.display = "block";
  } else {
    divIncrease.style.display = "none";
  }
});

// Calls the encoder or decoder function based on the selected code

var radio = document.querySelectorAll(".radio");
var btn = document.getElementById("codeButton");
var msg = document.getElementById("message");
var shiftKey = document.getElementById("key");
var resultMessage = document.getElementById("resultMessage");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  var codes = document.getElementById("codes").value;
  if (codes == "caesarCipher" && radio[0].checked) {
    var valorMsg = msg.value.split("");
    var valorKey = parseInt(shiftKey.value);
    resultMessage.value = caesaEncoder(valorMsg, valorKey);
  } else if (codes == "caesarCipher" && radio[1].checked) {
    var valorMsg = msg.value.split("");
    var valorKey = parseInt(shiftKey.value);
    resultMessage.value = caesaDecoder(valorMsg, valorKey);
  } else if (codes == "base64" && radio[0].checked) {
    var valorMsg = msg.value;
    resultMessage.value = btoa(valorMsg);
  } else {
    var valorMsg = msg.value;
    resultMessage.value = atob(valorMsg);
  }
});

// Caesa Cipher encoder function

function caesaEncoder(msg, shiftKey) {
  return msg
    .map((str) => {
      var entry = str.charCodeAt();
      if (entry >= 65 && entry <= 90) {
        return String.fromCharCode(((entry - 65 + shiftKey) % 26) + 65);
      } else if (entry >= 97 && entry <= 122) {
        return String.fromCharCode(((entry - 97 + shiftKey) % 26) + 97);
      } else {
        return str;
      }
    })
    .join("");
}

// Caesa Cipher decoder function

function decodificarCesar(msg, shiftKey) {
  return msg
    .map((str) => {
      var entry = str.charCodeAt();
      if (entry >= 65 && entry <= 90) {
        if (entry - 65 - shiftKey < 0) {
          return String.fromCharCode(((entry - 65 - shiftKey + 26) % 26) + 65);
        } else {
          return String.fromCharCode(((entry - 65 - shiftKey) % 26) + 65);
        }
      } else if (entry >= 97 && entry <= 122) {
        if (entry - 97 - shiftKey < 0) {
          return String.fromCharCode(((entry - 97 - shiftKey + 26) % 26) + 97);
        } else {
          return String.fromCharCode(((entry - 97 - shiftKey) % 26) + 97);
        }
      } else {
        return str;
      }
    })
    .join("");
}

// Switch button's text
radio[0].addEventListener("click", function () {
  if (radio[0].checked) {
    btn.innerText = 'Encode';
  }
});

radio[1].addEventListener("click", function () {
  if (radio[1].checked) {
    btn.innerText = 'Decode';
  }
});
