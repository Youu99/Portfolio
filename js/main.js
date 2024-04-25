const element = document.getElementById('titleh1');
const texts = ["Lee Yom Min", "PORTFOLIO"];
let currentText = '';
let letterIndex = 0;
let textIndex = 0;

function typeText() {
  if (letterIndex < texts[textIndex].length) {
    currentText += texts[textIndex].charAt(letterIndex);
    element.textContent = currentText;
    letterIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(deleteText, 3000);
  }
}

function deleteText() {
  if (letterIndex > 0) {
    currentText = currentText.substring(0, currentText.length - 1);
    element.textContent = currentText;
    letterIndex--;
    setTimeout(deleteText, 100);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 1000);
  }
}

typeText();





