let currAlienTile;
let currBombTile;
let score = 0;
let gameOver = false;
const numRows = 2; 
const numCols = 2; 
const numTiles = numRows * numCols; // Total number of tiles in the grid
const alienInterval = 1200; // Interval for alien appearance (milliseconds)

window.onload = function() {
    setGame();
}

function setGame() {
    const board = document.getElementById("board"); 
    const boardWidth = board.clientWidth; // Get the width of the board

    // Set up the grid in HTML
    for (let i = 0; i < numTiles; i++) {
        const tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);

        // Calculate the width of each tile as a percentage of the board's width
        const tileWidthPercentage = 100 / numCols; // Divide the board into equal parts
        tile.style.width = `${tileWidthPercentage}%`;

        board.appendChild(tile);
    }

    setInterval(setAlien, alienInterval);
    setInterval(setBomb, 1200);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * numTiles);
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
        currAlienTile.innerHTML = ""; // Clear the current alien tile
    }

    if (currBombTile) {
        currBombTile.innerHTML = ""; // Clear the current bomb tile
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
