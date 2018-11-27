/*
 * Create a list that holds all of your cards
 */

let cards =['fa-diamond','fa-diamond','fa-paper-plane-o','fa-paper-plane-o','fa-anchor','fa-anchor','fa-bolt','fa-bolt','fa-cube','fa-cube','fa-leaf',
'fa-leaf','fa-bicycle','fa-bicycle','fa-bomb','fa-bomb'];

let count = 0;
let moves =0;
let arraya = [];
let count_move = 0;  
let first_card;
let second_card;       
let move_var;
let match_card =0;
let t_minutes = 0;
let t_seconds = 0;
let star_count = 3;
let conf = true;
let set_time;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below*/
  
  
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    } 
   let indexx = array.splice(0,1);
    return indexx;
}



 /*   - loop through each card and create its HTML */


 for(let i=0;i<16;i++)
 {
 let createCard = document.body.getElementsByClassName("deck");
      let createLi = document.createElement("li");
      createLi.classList.add('card');
      let createI = document.createElement("i");
      createI.classList.add("fa");
      createLi.appendChild(createI);
      createCard[0].appendChild(createLi);
 }   
 


 /*   - add each card's HTML to the page
 */
let eventlist = document.body.getElementsByClassName("card");
let arrayevent = [];
function toArray(eventlist) {
    for (let i = eventlist.length >>> 0; i--;) { 
      arrayevent[i] = eventlist[i];
    }
  }

toArray(eventlist);

arrayevent.forEach(element => 
    {

                
            element.addEventListener('click',function()
                    {
                            
                            if(element.classList.length == 1 && count_move !=3 && moves >= 0)
                         {
                            
                            element.classList.add("open","show");
                                
                                let y = element.getElementsByClassName("fa");
                             
                                if(y[0].classList.length === 1)
                                {
                                    let z = shuffle(cards)[0];
                                    y[0].classList.add(z);

                                  
                                }
                              
                                count++;
                                
                               
                                let class_check =  matchclass(y[0].classList[1],count);
                                function matchclass(p,q) 
                              {
                                        if(q == 1){
                                            first_card = p;
                                        }
                                        if(q == 2){
                                            second_card = p;
                                        }
                                        if(first_card === second_card)
                                        {
                                        return true;
                                        }
                                        else{
                                            return false;
                                        }
                    
                             }
                                
                                if(count == 1)
                                {
                                    first_card_match = element;
                                 
                                }
                                if(count == 2)
                                {
                                    second_card_match = element;
                                   
                                }
                                if(count === 2 && class_check === true)
                                  {    
                                      let time = setTimeout(add_class,1000);
                                      function add_class() 
                                        {
                                                first_card_match.classList.add("match");
                                                second_card_match.classList.add("match");
                                                count = 0;
                                                
                                                moves = moves + 1;
                                                move_var = document.body.getElementsByClassName("moves")[0];
                                                move_var.innerText = moves;
                                                match_card++;
                                                if(match_card === 8){
                                                    setTimeout(function(){
                                                    let conf = confirm("You Completed This Game in "+ t_seconds + " seconds and in "+moves+" moves"+"\nYou got "+star_count+" star" +"\nDo You Want to Play it again ?" );
                                                
                                                    if (conf == true) {
                                                        resetFunction();
                                                    } else {
                                                        stop_interval();
                                                    }
                                                    
                                                    
                                                    },500);
                                                }
                                            
                                                
                                            }
                                        }    
                                        
                                if(count === 2 && class_check === false)
                                {
                                         count_move = 3;   
                                         let time = setTimeout(remove_class,1000);
                                            function remove_class()
                                            {

                                                        
                                                        first_card_match.classList.remove("open",'show');
                                                        second_card_match.classList.remove("open",'show');
                                                        count_move = 1;
                                                        moves = moves + 1;
                                                        move_var = document.body.getElementsByClassName("moves")[0];
                                                        move_var.innerText = moves;
                                                        
                                            }
                                            count = 0;
                                                 
                                }
    
                                if(moves === 7 || moves === 10)
                                {
                                    let rmv_star = document.getElementsByClassName("stars");
                                    
                                    
                                    rmv_star[0].removeChild(rmv_star[0].childNodes[0]);
                                    star_count= rmv_star[0].childElementCount;
                                    
                                } 
                                setTimeout(function(){
                                    if(moves === 0){
                                        timer();
                                    }       
                                },1000);
                                
                        
                        }
                         
                        

                       
                    });
                 
         });



     function timer(){
        {
        
           set_time = setInterval(function()
                {
                        t_seconds++;
                        let t_count = document.getElementsByClassName("timer_count")[0];
                         t_count.innerHTML = " "+t_seconds;
                    },1000);
        }
     }
     function stop_interval(){
         clearInterval(set_time);
     }
     

     function resetFunction(){
       location.reload();
         };



         
// Shuffle function from http://stackoverflow.com/a/2450976



      /*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 * 
 * 
 * 
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
