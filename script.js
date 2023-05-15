// Word Guessing Game

// Array of words

const GUESSES = 5;
let guessesRemaining = GUESSES;
let currentGuess = [];
let nextLetter = 0;
//let randomWord = words[Math.floor(Math.random() * words.length)];
let randomWord = "qqqqq";
console.log(randomWord);

function insertText(text) {
  document.getElementById(`${text}`).addEventListener("click", (e) => {
    const target = e.target;

    // if (!target.classList.contains(`${text}`)) {
    //   return;
    // }
    let key = target.textContent;
    console.log(key);
    insertLetter(key);
  });
}

function insertLetter(pressedKey) {
  if (nextLetter < 5) {
    pressedKey = pressedKey.toLowerCase();

    console.log(pressedKey);

    let row = document.getElementsByClassName("grid-row")[5 - guessesRemaining];

    let box = row.children[nextLetter];
    console.log(box);
    box.textContent = pressedKey;
    //   box.classList.add("filled-box");
    currentGuess.push(pressedKey);
    nextLetter += 1;
  } else {
    checkGuess();
  }
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

  //   for (let i = 0; i < 5; i++) {
  //     let letterColor = "";
  //     let box = row.children[i];
  //     let letter = currentGuess[i];

  //     let letterPosition = rightGuess.indexOf(currentGuess[i]);
  //     // is letter in the correct guess
  //     if (letterPosition === -1) {
  //       letterColor = "grey";
  //     } else {
  //       // now, letter is definitely in word
  //       // if letter index and right guess index are the same
  //       // letter is in the right position
  //       if (currentGuess[i] === rightGuess[i]) {
  //         // shade green
  //         letterColor = "green";
  //       } else {
  //         // shade box yellow
  //         letterColor = "yellow";
  //       }

  //       rightGuess[letterPosition] = "#";
  //     }

  //     let delay = 250 * i;
  //     setTimeout(() => {
  //       //shade box
  //       box.style.backgroundColor = letterColor;
  //       shadeKeyBoard(letter, letterColor);
  //     }, delay);
  //   }

  if (guessString === randomWord) {
    alert("You guessed right! Game over!");
    guessesRemaining = 0;
    return;
  } else {
    guessesRemaining -= 1;
    currentGuess = [];
    nextLetter = 0;

    if (guessesRemaining === 0) {
      alert("You've run out of guesses! Game over!");
      alert(`The right word was: "${rightGuessString}"`);
    }
  }
}
