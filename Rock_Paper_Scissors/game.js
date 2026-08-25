function newgame(){
    let humanScore=0, computerScore=0;
    console.log("Please Enter Your Choice:")
    while(humanScore<5 && computerScore<5){
        let hc= prompt("Enter your choice(rock,paper,scissor):")
        let mc=machineChoice()
        if(hc==mc){
            console.log("None win Tie")
        }
        else if(hc=="rock" && mc=="scissor"){
            console.log("human win")
            humanScore++
        }
        else if(hc=="paper" && mc=="rock"){
            console.log("human win")
            humanScore++
        }
        else if(hc=="scissor" && mc=="paper"){
            console.log("human win")
            humanScore++
        }
        else{
            console.log("Computer Win")
            computerScore++
        }
        console.log("Human Score: ", humanScore)
        console.log("Computer Score: ", computerScore)
        if(humanScore==5){
            console.log("Human Win")
            return
        }
        if(computerScore==5){
            console.log("Computer Win")
            return
        }
    }
}
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
function nowPlay(){
    console.log("Lets play")
    newgame()
    let again=prompt("Do you want to play again(y/n):")
    if(again=='y'){
        nowPlay()
    }
    return
}
nowPlay()