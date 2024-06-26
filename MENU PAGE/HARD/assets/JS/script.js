let currAlienTile;
let currBombTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    const board = document.getElementById("board");
    const boardWidth = board.clientWidth; // Get the width of the board

    // Set up the grid in HTML
    for (let i = 0; i < 12; i++) { // Change loop to create 12 tiles
        const tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);

        // Calculate the width of each tile as a percentage of the board's width
        const tileWidthPercentage = 100 / 4; // Divide the board into 4 equal parts (3 columns)
        tile.style.width = `${tileWidthPercentage}%`;

        board.appendChild(tile);
    }

    setInterval(setAlien, 400);
    setInterval(setBomb, 800);
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setAlien() {
    if (gameOver) {
        return;
    }
    if (currAlienTile) {
        currAlienTile.innerHTML = "";
    }
    let alien = document.createElement("img");
    alien.src = "assets/alien.png";

    let num = getRandomTile();
    if (currBombTile && currBombTile.id == num) {
        return;
    }
    currAlienTile = document.getElementById(num);
    currAlienTile.appendChild(alien);
}

function setBomb() {
    if (gameOver) {
        return;
    }
    if (currBombTile) {
        currBombTile.innerHTML = "";
    }
    let bomb = document.createElement("img");
    bomb.src = "assets/bomb.png";

    let num = getRandomTile();
    if (currAlienTile && currAlienTile.id == num) {
        return;
    }
    currBombTile = document.getElementById(num);
    currBombTile.appendChild(bomb);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currAlienTile) {
        score += 5;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currBombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
        removeScoreLabel(); // Call a function to remove the <p> element
    }
}

document.getElementById("restartGame").addEventListener("click", restartGame);

function restartGame() {
    gameOver = false; // Reset the gameOver flag

    if (!document.getElementById('scoreLabel')) {
        createScoreLabel();
    }

    if (currAlienTile) {
        currAlienTile.innerHTML = ""; // Clear the current mole tile
    }

    if (currBombTile) {
        currBombTile.innerHTML = ""; // Clear the current plant tile
    }

    score = 0; // Reset score
    document.getElementById("score").innerText = "0"; // Update score display


}

function createScoreLabel() {
    const scoreContainer = document.querySelector('.score'); // Adjust if necessary
    const scoreLabel = document.createElement('p');
    scoreLabel.id = 'scoreLabel';
    scoreLabel.textContent = 'SCORE:';
    scoreContainer.prepend(scoreLabel); // Adds the new <p> at the beginning of the .score div
}

function removeScoreLabel() {
    let scoreLabel = document.getElementById("scoreLabel");
    if (scoreLabel) {
        scoreLabel.remove(); // Removes the <p> element
    }
}

function goBack() {
    window.history.back();
}