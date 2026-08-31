function machineChoice(){
    let num = Math.random()
    if(num<1/3){
        return "rock"
    }
    else if(num<2/3){
        return "paper"
    }
    else{
        return "scissor"
    }
}
function tellVictor(hc,mc){
    const victor= document.getElementById('victor')
    if(hc==mc){
            victor.innerText="Victor: None"
        }
        else if(hc=="rock" && mc=="scissor"){
            victor.innerText="Victor: Human"
            humanScore++
            document.getElementById('human-score').innerText=`Human Score: ${humanScore}`
        }
        else if(hc=="paper" && mc=="rock"){
            victor.innerText="Victor: Human"
            humanScore++
            document.getElementById('human-score').innerText=`Human Score: ${humanScore}`
        }
        else if(hc=="scissor" && mc=="paper"){
            victor.innerText="Victor: Human"
            humanScore++
            document.getElementById('human-score').innerText=`Human Score: ${humanScore}`
        }
        else{
            victor.innerText="Victor: Computer"
            computerScore++
            document.getElementById('computer-score').innerText=`Computer Score: ${computerScore}`
        }
}
function showMove(hm,cm){
    const humanMoveText= document.getElementById('human-move')
    humanMoveText.innerText=`Your Move: ${hm}`
    const compMoveText= document.getElementById('game-move')
    compMoveText.innerText=`Computer's Move: ${cm}`
}
function reset(){
    humanScore=0;
    computerScore=0;
    document.getElementById('human-score').innerText=`Human Score:`
    document.getElementById('computer-score').innerText=`Computer Score:`
    document.getElementById('victor').innerText='Victor:'
    document.getElementById('human-move').innerText=`Your Move:`
    document.getElementById('game-move').innerText=`Computer's Move:`
}
function checkWin(){
    if(humanScore==5 || computerScore==5){
        reset()
    }
}
let humanScore=0
let computerScore=0
const rockMove = document.getElementById('rock-button')
const paperMove = document.getElementById('paper-button')
const scissorMove = document.getElementById('scissor-button')

rockMove.addEventListener('click',()=>{
    const compMove = machineChoice()
    showMove('rock',compMove)
    tellVictor('rock',compMove)
    checkWin()
})
paperMove.addEventListener('click',()=>{
    const compMove = machineChoice()
    showMove('paper',compMove)
    tellVictor('paper',compMove)
    checkWin()
})
scissorMove.addEventListener('click',()=>{
    const compMove = machineChoice()
    showMove('scissor',compMove)
    tellVictor('scissor',compMove)
    checkWin()
})
const restart = document.getElementById('restart')

restart.addEventListener('click',()=>{
    reset()
})

