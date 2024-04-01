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
