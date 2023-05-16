// Word Guessing Game

// Array of words
let name = prompt("Hello,Enter you name!");
const GUESSES = 5;
let guessesRemaining = GUESSES;
let currentGuess = [];
let nextLetter = 0;
let WordGenerated = words[Math.floor(Math.random() * words.length)];
var splitWord = WordGenerated.split("").map((letter) => letter.toLowerCase());

let randomWord = splitWord.join("");

console.log(randomWord);

function insertText(text) {
  const target = document.getElementById(`${text}`);
  console.log(target.textContent);

  if (nextLetter < 5) {
    insertLetter(target.textContent);
  }
}

function insertLetter(pressedKey) {
  console.log(pressedKey);

  let row = document.getElementsByClassName("grid-row")[5 - guessesRemaining];

  let box = row.children[nextLetter];
  console.log(box);

  box.textContent = pressedKey;
  pressedKey = pressedKey.toLowerCase();

  currentGuess.push(pressedKey);
  console.log(nextLetter);
  nextLetter += 1;
  if (nextLetter === 5) {
    checkGuess();
  }
  console.log(nextLetter);
}

function checkGuess() {
  let row = document.getElementsByClassName("grid-row")[5 - guessesRemaining];
  let guessString = "";
  let rightGuess = randomWord.split("");
  console.log(rightGuess);

  for (const val of currentGuess) {
    guessString += val;
  }
  console.log(guessString);

  for (let i = 0; i < 5; i++) {
    let boxColor = "";
    let box = row.children[i];
    let letter = currentGuess[i];
    console.log(box);
    console.log(rightGuess.indexOf(currentGuess[i]));

    let letterPosition = rightGuess.indexOf(currentGuess[i]);
    // is letter in the correct guess
    if (letterPosition === -1) {
      boxColor = "grey";
    } else {
      // now, letter is definitely in word
      // if letter index and right guess index are the same
      // letter is in the right position
      if (currentGuess[i] === rightGuess[i]) {
        // shade green
        boxColor = "green";
      } else {
        // shade box yellow
        boxColor = "yellow";
      }
      // rightGuess[letterPosition] = "#";
    }
    console.log(boxColor);
    box.style.backgroundColor = boxColor;
  }

  if (guessString === randomWord) {
    guessesRemaining = 0;
    const div = document.getElementById("end");
    let end = document.createElement("div");
    end.textContent = "Game Over,You Won " + name + "!!!";
    div.appendChild(end);
    return;
  } else {
    guessesRemaining -= 1;
    currentGuess = [];
    nextLetter = 0;
    const div = document.getElementById("end");
    if (guessesRemaining > 0) {
      let end = document.createElement("div");
      end.textContent = "TRY AGAIN,GUESSES REMAINING  " + guessesRemaining;
      div.appendChild(end);

      let delay = 1000;
      setTimeout(() => {
        div.removeChild(end);
      }, delay);
    }

    if (guessesRemaining === 0) {
      const div = document.getElementById("end");

      let end = document.createElement("div");
      end.textContent =
        "Game Over!!!The right word is " + "'" + randomWord + "'";
      div.appendChild(end);
    }
  }
}
