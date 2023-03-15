// Local de Variaveis
var userWTP // User Want to Play (VARIAVEL GLOBAL)
var userWIN = 0;
var comWIN = 0;

// Confirm - retorna (True/False)
userWTP = confirm('You Want to play?')

//Local de Funções:
function startGame() {


    // Choise User and comChoise Randomic
    let userChoise = Number(prompt ('Select your option ([1]Rock, [2]Scissors, [3]Paper)'))
    if (isNaN(userChoise)){
        alert('Por Favor, insira um numero 1 a 3!')
        startGame()
    }
    let comChoise = Math.floor(Math.random() * 3) + 1


    // Rock Situation Choise
    if(userChoise === 1 && comChoise === 1){ 
        alert('DRAW!')
  
    }else if (userChoise === 1 && comChoise === 2){
        alert('WIN!')
        userWIN++
    }else if (userChoise === 1 && comChoise === 3){
        alert('LOST!')
        comWIN++
    }

    // Scissors Situation Choise
    if(userChoise === 2 && comChoise === 1){ 
        alert('LOST!')
        comWIN++
    }else if (userChoise === 2 && comChoise === 2){
        alert('DRAW!')

    }else if (userChoise === 2 && comChoise === 3){
        alert('WIN!')
        userWIN++
    }

    // Paper Situation Choise
    if(userChoise === 3 && comChoise === 1){ 
        alert('WIN!')
        userWIN++
    }else if (userChoise === 3 && comChoise === 2){
        alert('LOST!')
        comWIN++
    }else if (userChoise === 3 && comChoise === 3){
        alert('DRAW!')

    }
    
    resultWIN()

}
function resultWIN(){
    if(userWIN !== 2 && comWIN !== 2){
        startGame()
    }else{
        if( userWIN === 2){
            alert('You WIN!')
        }
        if( comWIN === 2){
            alert('You LOSE!')
        }
    }
}


if(userWTP === true){
    startGame() // Chamando a Função!

}else{
    alert('LOSSER :P')
    
}

