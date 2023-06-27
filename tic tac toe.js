console.log("Welcome to Tic Tac Toe");
let bgmusic= new Audio("");
let turng = new Audio("ting.mp3");
let gameover = new Audio("");
let turn ="X"
let isgameover = false;
 
// function to change the turn
const changeTurn = ()=>{
    return turn ==="X"? "0":"X"
}

//function to check win
const checkwin = ()=>{
    let text = document.getElementsByClassName('text'); 
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if( (text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText ) && (text[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = text[e[0]].innerText + "  Won "
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";  
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let text = element.querySelector('.text');
    element.addEventListener('click',()=>{ 
        if(text.innerText === ''){
            text.innerText = turn ;
            turn = changeTurn();
            turng.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = " Turn for  " + turn;
            }  
        }
    })
})

//reset button
reset.addEventListener('click',()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element=> {
        element.innerText=""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
} )






