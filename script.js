const boxes = document.getElementsByClassName('box');
const boxtext = document.getElementsByClassName('boxtext');
console.log(boxtext);
let count = 1;
const ting = new Audio('tic tac toe/ting.mp3');
const bgMusic = new Audio('tic tac toe/music.mp3');
bgMusic.loop = true;
const gameOver = new Audio('tic tac toe/gameover.mp3');
const heading = document.getElementById('heading');
const turnMassage = document.getElementById('turnMassage');
let isGameWon = false;
const resetBtn = document.getElementById('reset-btn');
const danceGif = document.getElementsByClassName('celebration-img')[0];

const windowLoaded = () => {
    // bgMusic.play();

    function checkFunction(){
        let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    
        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                heading.innerText = "Congratulations!!"
                turnMassage.innerText = "The Winner is " + boxtext[e[0]].innerText;
                isGameWon = true;
                if(isGameWon){
                    danceGif.src = 'tic tac toe/excited.gif'
                    gameOver.play();
                    
                }
            }
        })
    }

    Array.from(boxes).forEach((element) => {
        element.addEventListener('click', () => {
            if (element.querySelector('.boxtext').innerText === "" && count % 2 !== 0) {
                element.querySelector('.boxtext').innerText = "X";
                if (!isGameWon) {
                    turnMassage.innerText = "Turn of ' 0 '"
                }
                count++;
                ting.play();
                checkFunction();
            } else if (element.querySelector('.boxtext').innerText === "" && count % 2 === 0) {
                element.querySelector('.boxtext').innerText = "0"
                if (!isGameWon) {
                    turnMassage.innerText = "Turn for ' X '"
                }
                count++;
                ting.play();
                checkFunction();
            }
        })
    })

    

    resetBtn.addEventListener('click', () => {
        location.reload(true);
    })

}


window.addEventListener('load', windowLoaded)

