const p1 = {
    name: "Player 1",
    score: document.querySelector("#player1"),
    button: document.querySelector("#add1"),
};

const p2 = {
    name: "Player 2",
    score: document.querySelector("#player2"),
    button: document.querySelector("#add2"),
};

const resetButton = document.querySelector("#reset");

const cardContent = document.querySelector(".content");

const congrats = document.createElement("p");
congrats.classList.add("title");

function updateScore(player, opponent) {
    let finalScore = parseInt(document.querySelector("#finalScore").value)
    player.score.innerText = parseInt(player.score.innerText) + 1;
    if (player.score.innerText == finalScore) {
        player.score.style.color = "green";
        opponent.score.style.color = "red";
        congrats.innerText = `${player.name} Wins!`;
        cardContent.append(congrats);
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
};

p1.button.addEventListener('click', () => {
    updateScore(p1, p2)
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p1)
});

resetButton.addEventListener('click', () => {
    p1.score.innerText = 0;
    p2.score.innerText = 0;
    p1.score.style.color = "";
    p2.score.style.color = "";
    congrats.remove();
    p1.button.disabled = false;
    p2.button.disabled = false;
});
