
let audioTurn = new Audio("ting.mp3")

let turn = "0"
let isgameover = false;


const changeTurn = ()=>{
    return turn === "0"? "X": "0"
}


const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1 ,4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is winner"
            isgameover = true
           // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
          
        }
    })
}

//  Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
             if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "next move " + turn;
            } 
        }
     })
 })


reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "0"; 
    isgameover = false
  
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
   
})
