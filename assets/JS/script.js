document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', function() {
            let playerName = document.getElementById('playerNameInput').value.trim();
            if (playerName === '') {
                alert('Please enter your name!');
            } else {
                sessionStorage.setItem('playerName', playerName);
                document.getElementById('hiddenLink').click();
            }
        });
    }

});

function practice() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    sessionStorage.setItem('playerName', playerName);
    window.location.href = 'https://en.wikipedia.org/wiki/Practice';
}

function challenge() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    sessionStorage.setItem('playerName', playerName);
    window.location.href = 'https://en.wikipedia.org/wiki/Challenge';
}

function compete() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    sessionStorage.setItem('playerName', playerName);
    window.location.href = 'https://en.wikipedia.org/wiki/Competition';
}


function startGame() {
    let playerName = document.getElementById('playerNameInput').value.trim();
    if (playerName === '') {
        alert('Please enter your name!');
    } else {
        sessionStorage.setItem('playerName', playerName);
        window.location.href = 'MenuPage/menu.html';
    }
}

function practice() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    sessionStorage.setItem('playerName', playerName);
    window.location.href = 'https://en.wikipedia.org/wiki/Practice';
}

function challenge() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    sessionStorage.setItem('playerName', playerName);
    window.location.href = 'https://en.wikipedia.org/wiki/Challenge';
}

function compete() {
    let playerName = document.getElementById('playerNameInput').value;
    if (playerName.trim() === '') {
        alert('Please enter your name!');
        return;
    }
    sessionStorage.setItem('playerName', playerName);
    window.location.href = 'https://en.wikipedia.org/wiki/Competition';
}
