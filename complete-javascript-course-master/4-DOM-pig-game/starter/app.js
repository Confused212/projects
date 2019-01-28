/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result
 get added to his ROUND score
- BUT, if the player rolls a 1, 
all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold',
 which means that his ROUND score gets added to his GLBAL score. 
 After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, playing;


inIt();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (playing) {
        // roll random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // display the dice
        var diceDOM = document.querySelector('.dice')
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM.style.display = 'block';

        // if player rolls a 1 next players turn

        if (dice !== 1) {
            // add round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;


        } else {
            // next player
            nextPlayer();
        }
    }
});



document.querySelector('.btn-hold').addEventListener('click', function() {
    if (playing) {
        // add roundscore to active players score
        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];


        // check if player has won

        if (score[activePlayer] >= 100) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice').style.display = 'none';
            playing = false;
        } else {
            // next player
            nextPlayer();

        }
    }
});
document.querySelector('.btn-new').addEventListener('click', inIt);

function inIt() {

    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    playing = true;

    document.querySelector('.dice').style.display = 'none';


    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    // remove winner and active classes
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // add player 1 back as active player
    document.querySelector('.player-0-panel').classList.add('active');




};

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    //reset score to 0
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
};