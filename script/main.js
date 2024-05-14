let result = document.getElementById('result');
let computerChose = document.getElementById('computerChose');
let liveScore = document.getElementById('liveScore');
var compPoint = 0;
var userPoint = 0;
var countTimes = 0;

function score(event){

    //select user choice to make pointing

    event.innerText = 'PLAY AGAIN';
    let userChoice;
    if (document.getElementById('paper').checked) {
        userChoice = document.getElementById('paper').value;
    } else if (document.getElementById('two').checked) {
        userChoice = document.getElementById('two').value;
    } else if (document.getElementById('rock').checked) {
        userChoice = document.getElementById('rock').value;
    }

    //AI chose a random number between 1 to 3 , on this logic : 1=paper & 2=scissor & 3=rock

    let AI = Math.floor(Math.random() * 3) + 1;

    //pointing

    if (userChoice == 1) {
        if (AI == 1) {
            result.innerText = 'DRAW';
            result.style.color = 'white';
            computerChose.innerText = 'Computer Chose “paper”';
        } else if (AI == 2) {
            result.innerText = 'You Lost!';
            result.style.color = 'rgba(203, 17, 17, 1)';
            computerChose.innerText = 'Computer Chose “scissor”'
            compPoint++;
        } else if (AI == 3){
            result.innerText = 'You Win!';
            result.style.color = 'rgba(78, 255, 34, 1)';
            computerChose.innerText = 'Computer Chose “rock”';
            userPoint++;
        }
    } else if (userChoice == 2) {
        if (AI == 1) {
            result.innerText = 'You Win!';
            result.style.color = 'rgba(78, 255, 34, 1)';
            computerChose.innerText = 'Computer Chose “paper”';
            userPoint++;
        } else if (AI == 2) {
            result.innerText = 'DRAW';
            result.style.color = 'white';
            computerChose.innerText = 'Computer Chose “scissor”';
        } else if (AI == 3){
            result.innerText = 'You Lost!';
            result.style.color = 'rgba(203, 17, 17, 1)';
            computerChose.innerText = 'Computer Chose “rock”';
            compPoint++;
        }
    } else if (userChoice == 3) {
        if (AI == 1) {
            result.innerText = 'You Lost!';
            result.style.color = 'rgba(203, 17, 17, 1)';
            computerChose.innerText = 'Computer Chose “paper”';
            compPoint++;
        } else if (AI == 2) {
            result.innerText = 'You Win!';
            result.style.color = 'rgba(78, 255, 34, 1)';
            computerChose.innerText = 'Computer Chose “scissor”';
            userPoint++;
        } else if (AI == 3){
            result.innerText = 'DRAW';
            result.style.color = 'white';
            computerChose.innerText = 'Computer Chose “rock”';
        }
    }

    //showing live score

    liveScore.innerText = 'You ' + userPoint + ' : ' +  compPoint + ' Ai';

    //counting

    countTimes += 1; 
    console.log(countTimes);

}