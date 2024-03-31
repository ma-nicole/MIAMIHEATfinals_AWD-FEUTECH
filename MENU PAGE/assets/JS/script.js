document.addEventListener('DOMContentLoaded', function() {
    // Update the displayed player name from session storage
    var playerNameDisplay = document.querySelector('.player-name-display .txt');
    if (playerNameDisplay) {
        var playerName = sessionStorage.getItem('playerName');
        playerNameDisplay.textContent = playerName ? 'Hi, ' + playerName : 'Hi, Player Name...';
    }
});
