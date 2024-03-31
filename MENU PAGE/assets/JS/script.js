document.addEventListener('DOMContentLoaded', function() {
    var playerNameDisplay = document.querySelector('.player-name-display .txt');
    if (playerNameDisplay) {
        var playerName = sessionStorage.getItem('playerName');
        playerNameDisplay.textContent = playerName ? 'Hi, ' + playerName : 'Hi, Player Name...';
    }
});
function goBack() {
    window.history.back();
}
