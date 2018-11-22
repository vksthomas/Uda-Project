/*
 * Create a list that holds all of your cards
 */

let cards =['fa-diamond','fa-diamond','fa-paper-plane-o','fa-paper-plane-o','fa-anchor','fa-anchor','fa-bolt','fa-bolt','fa-cube','fa-cube','fa-leaf',
'fa-leaf','fa-bicycle','fa-bicycle','fa-bomb','fa-bomb'];

var count = 0;
var moves =0;
let arraya = [];
let count_move = 0;  
var first_card;
var second_card;       
var move_var;

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
   var indexx = array.splice(0,1);
    console.log(indexx);
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
//var z =shuffle(cards)[0];
arrayevent.forEach(element => 
    {

                //if(element.classList[1] == )
                
                // console.log(element.classList.map);
            //}
            element.addEventListener('click',function()
                    {
                            //count++;
                            if(element.classList.length == 1 && count_move !=3 && moves >= 0)
                         {
                                element.classList.add("open","show");
                                // console.log(element.classList[3]);
                                let y = element.getElementsByClassName("fa");
                               /* if(y[0].classList.length == 1);
                                {
                                   
                                }*/
                                //console.log(y[0].classList.length);
                                if(y[0].classList.length === 1)
                                {
                                    var z = shuffle(cards)[0];
                                    y[0].classList.add(z);

                                  // console.log(y[0].classList[0].length);
                                }
                               // console.log(y[0].classList[1]);
                                //var classnamearr = element.className.split(" ");
                                count++;
                                
                                //console.log(classnamearr);
                                var class_check =  matchclass(y[0].classList[1],count);
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
                                //function card_matched()
                                if(count == 1)
                                {
                                    first_card_match = element;
                                   // console.log(first_card_match);
                                }
                                if(count == 2)
                                {
                                    second_card_match = element;
                                    //console.log(second_card_match);
                                }
                                if(count === 2 && class_check === true)
                                        {
                                            console.log("matched")
                                            first_card_match.classList.add("match");
                                            second_card_match.classList.add("match");
                                            count = 0;
                                            moves = moves + 1;
                                            //console.log(count);
                                        }
                                        //console.log(count);
                                if(count === 2 && class_check === false)
                                {
                                         count_move = 3;   
                                         var time = setTimeout(remove_class,1000);
                                            function remove_class()
                                            {

                                                        
                                                        first_card_match.classList.remove("open",'show');
                                                        second_card_match.classList.remove("open",'show');
                                                        count_move = 1;
                                                        moves = moves + 1;
                                                        move_var = document.body.getElementsByClassName("moves")[0];
                                                        console.log(move_var)
                                                        move_var.innerText = moves;
                                                        /*var star_count = document.getElementsByClassName("stars");
                                                        console.log(star_count);
                                                        star_count[0].removeChild(star_count[0].childNodes[0]);
                                                        star_count[0].removeChild(star_count[0].childNodes[0]);
                                                       // console.log(count);*/
                                                        
                                            }
                                            count = 0;
                                     //console.log(count);       
                                }
                                //console.log(count);
                                if(moves == 3)
                                {
                                    var star_count = document.getElementsByClassName("stars");
                                    console.log(star_count);
                                    star_count[0].removeChild(star_count[0].childNodes[0]);
                                    star_count[0].removeChild(star_count[0].childNodes[0]);
                                }     
                        
                        }
                         
                        

                       
                    });
                  //  console.log(moves)
                    
                        //});
         });



     
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     function resetFunction(){
       location.reload();
         };



          /*while(count < 2)
                           {  
                               arrayevent.forEach(element => {
                                console.log(arrayevent[0])
                              });
                                console.log(count);
     
                         }
                         //console.log(element);
                         //element.removeEventListener("click",function(){},true);*/
//});
 
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

















































 /*
 function generateCard(Card){
    return `li class="card"><i class="fa ${card}"></i></li>`;
}
 function initGame(){
    var deck = document.querySelector('.deck');
    var cardHTML= shuffle(cards).map(function(card){
        return generateCard(card);
    });
    moves = 0;
    deck.innerHTML= cardHTML.join('');
 }

 var allCards = document.querySelectorAll(".card");
 var openCards = [];
 var moves = 0;
 var moveCounter = document.querySelector('.moves');


 initGame();


 

 allCards.forEach(function(card){
    card.addEventListener('click',function(e){

       if (!card.classList.contains('open') && !card.classList.contains('show'))

       openCards.push(card);
       card.classList.add('open','show');

       
        if(openCards.length == 2){
            if(openCards[0].dataset.card == openCards[1].dataset.card){
               openCards[0].classList.add("match");
               openCards[0].classList.add("open");
               openCards[0].classList.add("show");


            }else{
                    
                    setTimeout(function(){
                        openCards.forEach(function(card){
                            cards.classList.remove('open','show');

                        });
                        openCards= [];
                    }, 1000);
                }
           moves += 1;
           moveCounter.inner
        }     
    })

 });  



 ------------------------------

 let arrayEventItems = toArray(eventlist);
//var z =shuffle(cards)[0];
arrayEventItems.forEach(element => {
  element.addEventListener('click',function()
                {
                    if(element.className === 'openedItem'){
                        console.log(element)
                        element.removeEventListener("click",function(){},true);
                    } 
                    else {
                        element.classList.add("open","show");
                        let childNodes = toArray(element.childNodes);
                        // console.log(childNodes)
                        // childNodes[0].add('openedItem');
                        let y = element.getElementsByClassName("fa");
                        let z = shuffle(cards)[0];
                        console.log(z);
                        y[0].classList.add(z);
                        while(count<2)
                            {  arraya.forEach(element => {
                                    arraya[element] = y[0];
                                console.log(arraya[element]);
                                });
                                count++;
                                console.log(count);

                            }
                        }
                });
                console.log(element);
         });

 */