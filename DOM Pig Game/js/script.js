// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes.
// Each result get added to his ROUND score
// - BUT, if the player rolls a 1,
// all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold',
// which means that his ROUND score gets added to his GLBAL score. After that,
// it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

var score, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.dice').style.display = 'none';
document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function() {
    // random dice 

    // update round score with dice number on each roll and add to the totals together

    // if player rolls 1 clear round score

    // next player
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add roundscore to player score

    // highlight next player

    // clear all score to 0

    // next player
});

document.querySelector('.btn-new').addEventListener('click', function() {
    // clear score

    // move active playeer to player 1

    // clear scores

});