let liveScore = document.getElementById('liveScore'); // player1 --- 0:0 --- player2
let playerOneTurn = document.getElementById('playerOneTurn'); // your turn !!! || ok !!!
let playerTwoTurn = document.getElementById('playerTwoTurn'); // your turn !!! || ok !!!
let result = document.getElementById('result'); // PLAYER 1 || 2 WIN !
let why = document.getElementById('why?');
var plOne = '';
var plTwo = '';
var p1Score = 0;
var p2Score = 0;
var countTimes = 0;
function start(event) {
    event.innerText = 'Wait !!! ...';
    playerOneTurn.innerText = 'your turn !!!';
    document.addEventListener('keydown',(chosePlOne)=>{
        event.innerText = 'Wait !!! ...';
        if(chosePlOne.keyCode == 49){//p1 = paper = 1
            playerOneTurn.innerText = 'ok !!!';
            plOne = 'paper';
            playerTwoTurn.innerText = 'your turn !!!';
            document.addEventListener('keydown',(chosePlTwo)=>{
                if (chosePlTwo.keyCode == 56) {//p2 = paper = 8
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'paper';
                    result.innerText = 'DRAW';
                } else if (chosePlTwo.keyCode == 57) {//p2 = two = 9
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'scissor';
                    result.innerText = 'PLAYER 2 WIN !';
                    p2Score++;
                } else if(chosePlTwo.keyCode == 48){//p2 = rock = 0
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'rock';
                    result.innerText = 'PLAYER 1 WIN !';
                    p1Score++;
                }
            })
        } else if (chosePlOne.keyCode == 50){//p1 = two = 2 
            playerOneTurn.innerText = 'ok !!!';
            plOne = 'scissor';
            playerTwoTurn.innerText = 'your turn !!!';
            document.addEventListener('keydown',(chosePlTwo)=>{
                if (chosePlTwo.keyCode == 56) {//p2 = paper = 8
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'paper';
                    result.innerText = 'PLAYER 1 WIN !';
                    p1Score++;
                } else if (chosePlTwo.keyCode == 57) {//p2 = two = 9
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'scissor';
                    result.innerText = 'DRAW';
                } else if(chosePlTwo.keyCode == 48){//p2 = rock = 0
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'rock';
                    result.innerText = 'PLAYER 2 WIN !';
                    p2Score++;
                }
            })
        } else if (chosePlOne.keyCode == 51){//p1 = rock = 3
            playerOneTurn.innerText = 'ok !!!';
            plOne = 'rock';
            playerTwoTurn.innerText = 'your turn !!!';
            document.addEventListener('keydown',(chosePlTwo)=>{
                if (chosePlTwo.keyCode == 56) {//p2 = paper = 8
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'paper';
                    result.innerText = 'PLAYER 2 WIN !';
                    p2Score++;
                } else if (chosePlTwo.keyCode == 57) {//p2 = two = 9
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'scissor';
                    result.innerText = 'PLAYER 1 WIN !';
                    p1Score++;
                } else if(chosePlTwo.keyCode == 48){//p2 = rock = 0
                    playerTwoTurn.innerText = 'ok !!!';
                    plTwo = 'rock';
                    result.innerText = 'DRAW';
                }
            })
        }
    })

    event.innerText = 'Try Again !!!';
    liveScore.innerText = 'player1 --- ' + p1Score + ':' + p2Score +' --- player2';
    why.innerText = 'player 1 : ((' + plOne + '))  Vs  ((' + plTwo + ')) : player 2';
    console.log(countTimes++);
}