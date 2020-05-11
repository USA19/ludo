/*
GAME RULES:
- The game has 2 players, playing in rounds
*/
var dicePic=document.querySelector('.dice');
  var currentSum;
  var totalScore;
  var activePlayer;
var rollButton =document.querySelector('.btn-roll');
init();

//main Function that compute the result and show
rollButton.addEventListener('click' ,function(){
 

    var score =Math.floor(Math.random()*6)+1;
    dicePic.style.display="block"
    dicePic.src="dice-"+score+".png";
    if(score!==1){
        currentSum[activePlayer]=currentSum[activePlayer]+score;
       // console.log(currentSum);
       document.querySelector('#current-'+activePlayer).textContent=currentSum[activePlayer];
    }
    else{
        currentSum[activePlayer]=0;
        document.querySelector('#current-'+activePlayer).textContent=currentSum[activePlayer];
        if(activePlayer==0){
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        activePlayer=1;
        }
        else{
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        activePlayer=0;
        }
        }
        
    
   
});

//Hold Button Function

var holdButton=document.querySelector('.btn-hold').addEventListener('click',function(){

    totalScore[activePlayer]=currentSum[activePlayer]+totalScore[activePlayer];
    //console.log(totalScore);
     document.querySelector('#score-'+activePlayer).textContent= totalScore[activePlayer];
    currentSum[activePlayer]=0;
   document.querySelector('#current-'+activePlayer).textContent= currentSum[activePlayer];
   if(totalScore[activePlayer]>=100){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
  
   }
   else{
       if(activePlayer==0)
      {  document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.add('active');
      activePlayer=1;
    }
       else

      { document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');
          
        activePlayer=0;
    }
   }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    currentSum=[0,0];
    totalScore=[0,0];
    activePlayer=0;
    document.querySelector('#score-0').textContent= '0';
    document.querySelector('#score-1').textContent= '0';
    document.querySelector('#current-0').textContent= '0';
    document.querySelector('#current-1').textContent= '0';
    document.querySelector('#name-0').textContent = 'player 1';
    document.querySelector('#name-1').textContent = 'player 2';

    document.querySelector('.player-1-panel').classList.remove('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    dicePic.style.display="none";

}

/*
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/