let scoreCard = JSON.parse(localStorage.getItem('scores')) || {wins:0,loses:0,ties:0};
    let Result = "";
    function userfun(userChoice){
    const systemChoice = systemfun();
    
    if(userChoice === 'Rock' && systemChoice === 'Rock'){
        scoreCard.ties += 1;
        Result = 'Match Tie';
    }
    else if(userChoice === 'Rock' && systemChoice === 'Paper'){
        scoreCard.loses += 1;
        Result = 'You Loose';
    }
    else if(userChoice === 'Rock' && systemChoice === 'Scissor'){
         scoreCard.wins += 1;
        Result = 'You Win';
    }
    else if(userChoice === 'Paper' && systemChoice === 'Rock'){
         scoreCard.wins += 1;
        Result = 'You Win';
    }
    else if(userChoice === 'Paper' && systemChoice === 'Paper'){
        scoreCard.ties += 1;
        Result = 'Match Tie';
    }
    else if(userChoice === 'Paper' && systemChoice === 'Scissor'){
       scoreCard.loses += 1;
        Result = 'You Loose';
    }
    else if(userChoice === 'Scissor' && systemChoice === 'Rock'){
        scoreCard.loses += 1;
        Result = 'You Loose';
    }
    else if(userChoice === 'Scissor' && systemChoice === 'Paper'){
         scoreCard.wins += 1;
        Result = 'You Win';
    }
    else if(userChoice === 'Rock' && systemChoice === 'Scissor'){
         scoreCard.ties += 1;
        Result = 'Match Tie';
    }
    
    localStorage.setItem('scores',JSON.stringify(scoreCard));
    functioncall(userChoice,systemChoice);
    scorecall();
    }
    function systemfun(){
     const systemSelection = Math.random();
     let systemChoose = "";
     if(systemSelection > 0 && systemSelection <= 1/3){
        systemChoose = 'Rock';
     }
     else if(systemSelection > 1/3 && systemSelection <= 2/3){
        systemChoose = 'Paper';
     }
     else if(systemSelection > 2/3 && systemSelection <= 1){
        systemChoose = 'Scissor';
     }
     return systemChoose;
    }

    function functioncall(userChoice,systemChoice){
       document.getElementById('id-001').innerHTML = Result;
       document.getElementById('id-002').innerHTML = `You <img src="images/${userChoice}.png" class="rock-image"> System <img src="images/${systemChoice}.png" class="paper-image">`;
    }
    function scorecall(){
      document.getElementById('id-003').innerHTML = `Won: ${scoreCard.wins}, Lose: ${scoreCard.loses}, Tie: ${scoreCard.ties}`;
    }
    function resetfunction(){
        scoreCard.wins = 0;
        scoreCard.loses = 0;
        scoreCard.ties = 0;
        localStorage.setItem('scores',JSON.stringify(scoreCard));
        scorecall();
    }
    scorecall();