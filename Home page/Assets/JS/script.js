document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener to the Start button
    var startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', function() {
            let playerName = document.getElementById('playerNameInput').value.trim();
            if (playerName === '') {
                alert('Please enter your name!');
            } else {
                // Store player name in sessionStorage
                sessionStorage.setItem('playerName', playerName);
                // Programmatically click the hidden link to navigate
                document.getElementById('hiddenLink').click();
            }
        });
    }

    // Event listeners for other buttons, if needed
    // Add similar logic for practice, challenge, and compete functions
});

function practice() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    // Store player name in sessionStorage
    sessionStorage.setItem('playerName', playerName);
    // Navigate to the practice page
    window.location.href = 'https://en.wikipedia.org/wiki/Practice';
}

function challenge() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    // Store player name in sessionStorage
    sessionStorage.setItem('playerName', playerName);
    // Navigate to the challenge page
    window.location.href = 'https://en.wikipedia.org/wiki/Challenge';
}

function compete() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    // Store player name in sessionStorage
    sessionStorage.setItem('playerName', playerName);
    // Navigate to the compete page
    window.location.href = 'https://en.wikipedia.org/wiki/Competition';
}


// Function to handle starting the game
function startGame() {
    let playerName = document.getElementById('playerNameInput').value.trim();
    if (playerName === '') {
        alert('Please enter your name!');
    } else {
        // Store player name in sessionStorage
        sessionStorage.setItem('playerName', playerName);
        // Redirect to the menu page in the MenuPage directory
        window.location.href = 'MenuPage/menu.html';
    }
}

function practice() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    // Store player name in sessionStorage
    sessionStorage.setItem('playerName', playerName);
    // Navigate to the practice page
    window.location.href = 'https://en.wikipedia.org/wiki/Practice';
}

function challenge() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    // Store player name in sessionStorage
    sessionStorage.setItem('playerName', playerName);
    // Navigate to the challenge page
    window.location.href = 'https://en.wikipedia.org/wiki/Challenge';
}

function compete() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    // Store player name in sessionStorage
    sessionStorage.setItem('playerName', playerName);
    // Navigate to the compete page
    window.location.href = 'https://en.wikipedia.org/wiki/Competition';
}
