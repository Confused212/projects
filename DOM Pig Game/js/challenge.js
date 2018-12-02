/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. 
(Hint: you can read that value with the .value property in JavaScript. 
This is a good oportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, 
so take a look at the CSS code for the first one.)
*/

let scores, roundScore, activePlayer, gamePlaying;

init();

let lastDie;
//              //
// BUTTON ROLL //
//            //

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        // Random number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        // display results

        document.querySelector('.dice-1').style.display = 'block';
        document.querySelector('.dice-2').style.display = 'block';
        document.querySelector('.dice-1').src = '../starter/imgs/dice-' + dice1 + '.png';
        document.querySelector('.dice-2').src = '../starter/imgs/dice-' + dice2 + '.png';

        // update round number

        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        // if (dice === 6 && lastDice === 6) {
        //     //Player looses score
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();
        // } else if (dice !== 1) {
        //     //Add score
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // } else {
        //     //Next player
        //     nextPlayer();
        // }
        // lastDie = dice;
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

        let input = document.querySelector('.final-score').value;
        let winningScore;

        // check if there is anything written i the winning score box
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // check if player won game
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER !!!!';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
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

    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
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

    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';


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
};