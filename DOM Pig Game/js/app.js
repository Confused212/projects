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

let scores, roundScore, activePlayer, gamePlaying;

init();

//              //
// BUTTON ROLL //
//            //

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        // Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // display results

        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = '../starter/imgs/dice-' + dice + '.png';

        // update round number

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

//              //
// BUTTON HOLD //
//            //

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

        // add current to global score
        scores[activePlayer] += roundScore;

        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check if player won game
        if (scores[activePlayer] >= 10) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER !!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            // nextPlayer
            nextPlayer();
        }
    }
});

//              //
// BUTTON NEW //
//            //

document.querySelector('.btn-new').addEventListener('click', init);

//                      //
// NEXT PLAYER FUNCTION //
//                    //

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

//                //
// INIT FUNCTION //
//              //

function init() {
    // this resets all scores back to zero
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // this changes the names back from winner to player
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // this removes the winner class decoration
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // this removes the active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // this adds the active calss back onto player 1
    document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('.player-0-panel').classList.add('active');
// document.querySelector('.player-1-panel').classList.add('active');