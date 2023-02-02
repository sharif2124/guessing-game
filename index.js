// Selecting Element
// const cardBody = document.querySelector(".card-body")
// const form = document.querySelector("form")
// const guessingNumber = form.querySelector("#guessingNumber")
// const CheckButton = form.document.querySelector("#check");
// const resultText = cardBody.document.querySelector(".resultText")
// const remaingAttemps = cardBody.document.querySelector(".remaingAttemps")
// // initializing some values
// let totalAttempts = 5;
// let attempts = 0;
// let totalWons = 0;
// let totallosts = 0;
// // Selecting Element
// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const guessingNumber = form.querySelector("#guessingNumber");
// const checkButton = form.querySelector("#check");
// const resultText = cardBody.querySelector(".resultText");
// const lostWonMessage = document.createElement("p");
// const remainingAttempts = cardBody.querySelector(".remainingAttempts");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     attempts++;
//     if (guessingNumber === 5) {
//         guessingNumber.disable = true;
//         checkButton.disable = true;
//     }
//     if (getrandomNumber < 6) {
//         let guessNumber = Number(guessingNumber.value)
//         checkResult(guessNumber)
//         remainingAttempts = `RemainingAttempts:${totalAttempts - attempts}`;

//     }
//     guessingNumber.value = "";
// })

// function checkResult(guessingNumber) {
//     const randomNumber = getrandomNumber(5);
//     if (guessingNumber === randomNumber) {
//         resultText.innerHTML = `you have won`;
//         totalWons++;
//     }
//     else {
//         resultText.innerHTML = `You have lost; Random Number was:${randomNumber}`;
//         totallosts++;
//     }
//     lostWonMessage.innerHTML = `Won:${totalWons},Lost:${totallosts}`;
//     lostWonMessage.classList.add("large-text");
//     cardBody.appendChild(lostWonMessage);


// }

// function getrandomNumber(limit) {
//     return Math.floor(Math.random() * limit) + 1;
// }

// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;

// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    attempts++;
    if (attempts === 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts
            }`;
    }
    guessingNumber.value = "";
});

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `you have won`;
        totalWons++;
    } else {
        resultText.innerHTML = `you have lost; random number was: ${randomNumber}`;
        totallosts++;
    }
    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}