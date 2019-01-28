/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, 
it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. 
(Hint: you can read that value with the .value property in JavaScript. 
    This is a good oportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var score, roundScore, activePlayer, playing;


inIt();

// var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (playing) {
        // roll random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // display the dice
        document.querySelector('#dice1').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice2').src = 'dice-' + dice2 + '.png';
        document.querySelector('#dice1').style.display = 'block';
        document.querySelector('#dice2').style.display = 'block';

        // if player rolls two 6's he looses all scores and next players turn

        // if (dice === 6 && lastDice === 6) {
        //     // player loses score
        //     score[activePlayer] = 0;

        //     // update the UI
        //     document.querySelector('#score-' + activePlayer).textContent = '0';

        // } else if (dice !== 1) {
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //      nextPlayer();
        // } else {
        //     // next player
        //     nextPlayer();
        // }
        // lastDice = dice;

        if (dice1 !== 1 && dice2 !== 1) {
            // add round score
            roundScore += dice1 + dice2;
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

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        var input = document.querySelector('.final-score').value;
        var finalScore;

        if (input) {
            finalScore = input;
        } else {
            finalScore = 100;
        }
        // check if player has won

        if (score[activePlayer] >= finalScore) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('#dice1').style.display = 'none';
            document.querySelector('#dice2').style.display = 'none';
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

    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';


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
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
    //reset score to 0
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
};