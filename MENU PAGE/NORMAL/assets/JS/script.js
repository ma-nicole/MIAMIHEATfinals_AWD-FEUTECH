let currAlienTile;
let currBombTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    const board = document.getElementById("board");
    const boardWidth = board.clientWidth; 

    // Set up the grid in HTML
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);

        
        const tileWidthPercentage = 100 / 3;
        tile.style.width = `${tileWidthPercentage}%`;

        board.appendChild(tile);
    }

    setInterval(setAlien, 900);
    setInterval(setBomb, 1200);
}

function getRandomTile() {
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
        document.getElementById("score").innerText = score.toString(); 
    }
    else if (this == currBombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
        removeScoreLabel(); 
    }
}

document.getElementById("restartGame").addEventListener("click", restartGame);

function restartGame() {
    gameOver = false; 

    if (!document.getElementById('scoreLabel')) {
        createScoreLabel();
    }

    if (currAlienTile) {
        currAlienTile.innerHTML = "";
    }

    if (currBombTile) {
        currBombTile.innerHTML = "";
    }

    score = 0; // Reset score
    document.getElementById("score").innerText = "0"; 


}

function createScoreLabel() {
    const scoreContainer = document.querySelector('.score'); 
    const scoreLabel = document.createElement('p');
    scoreLabel.id = 'scoreLabel';
    scoreLabel.textContent = 'SCORE:';
    scoreContainer.prepend(scoreLabel); 
}

function removeScoreLabel() {
    let scoreLabel = document.getElementById("scoreLabel");
    if (scoreLabel) {
        scoreLabel.remove(); 
    }
}

function goBack() {
    window.history.back();
}
