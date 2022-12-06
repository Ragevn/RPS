let playerScore = 0
let cpuScore = 0
const buttons = document.querySelectorAll('input')
const choices = ['rock', 'paper', 'scissor'];
function  cpuselection() {
    // let choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
        })
    }

function playRound(playerSelection) {
    let computerselection = cpuselection()
    let result = " "
        if  (playerSelection === 'rock' && computerselection === 'scissor'||
        playerSelection === 'paper' && computerselection === 'rock'||
        playerSelection === 'scissor' && computerselection === 'paper') {
        playerScore +=1
        result =  ('you win!' + playerSelection + 'beat' + computerselection
        + "<br><br>player's score: " + playerScore + "<br>cpu's score: " + cpuScore)
            if (playerScore === 5 ) {
                result += "<br><br> you win, brother"
                disableButtons()
            }
        } else if (playerSelection === computerselection) {
        
        result +=  ("<br>it's a tie!!!")
        } 
        else {
            cpuScore +=1
            result =  ('you lose!' + computerselection + 'beat' + playerSelection
            + "<br><br>player's score: " + playerScore + "<br>cpu's score: " + cpuScore)
            if (cpuScore === 5 ) {
            result += "<br><br> you lose, brother"
            disableButtons()
            }
            
        }
        document.getElementById('result').innerHTML = result ;
        return;
    }

    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            playRound(button.value)
        })
    
        
   })


