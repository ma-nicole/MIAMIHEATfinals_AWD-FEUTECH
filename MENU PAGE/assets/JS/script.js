document.addEventListener('DOMContentLoaded', function() {
    // Update the displayed player name from session storage
    var playerNameDisplay = document.getElementById('playerNameDisplay');
    if (playerNameDisplay) {
        var playerName = sessionStorage.getItem('playerName');
        playerNameDisplay.textContent = playerName ? 'Player Name: ' + playerName : 'Player Name not set';
    }
});
