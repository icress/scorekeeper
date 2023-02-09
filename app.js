let score1 = document.querySelector("#player1");
let score2 = document.querySelector("#player2");

const button1 = document.querySelector("#add1");
const button2 = document.querySelector("#add2");
const resetButton = document.querySelector("#reset")

const cardContent = document.querySelector(".content");
const congrats = document.createElement("p");
congrats.classList.add("title");

button1.addEventListener('click', () => {
    let finalScore = parseInt(document.querySelector("#finalScore").value)
    if (!score1.style.color) {
       score1.innerText = parseInt(score1.innerText) + 1;
        if (score1.innerText == finalScore) {
            score1.style.color = "green";
            score2.style.color = "red";
            congrats.innerText = "Player 1 Wins!";
            cardContent.append(congrats);
        } 
    }    
});

button2.addEventListener('click', () => {
    let finalScore = parseInt(document.querySelector("#finalScore").value)
    if (!score2.style.color) {
       score2.innerText = parseInt(score2.innerText) + 1;
        if (score2.innerText == finalScore) {
            score2.style.color = "green";
            score1.style.color = "red";
            congrats.innerText = "Player 2 Wins!";
            cardContent.append(congrats);
        } 
    }    
});

resetButton.addEventListener('click', () => {
    score1.innerText = 0;
    score2.innerText = 0;
    score1.style.color = "";
    score2.style.color = "";
    congrats.remove();
});