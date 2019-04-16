 var players=[];

var num = [1, 2]

var turn = 0;

players[0]= "<span style='color:red'>X</span>" ;

players[1] = "O" ;

var scores = [0, 0];

var gameOver = false 

//Display on the board
function myFunction(click){ 

    if (click.innerHTML == "") {

    if (!gameOver) {

    click.innerHTML =  players [turn]
    
    winCheck(); 
    drawCheck();

        if(!gameOver) {

    playerTurn()}

    if (gameOver) {
        reset();
    
    }

    
   } } }

//tracking the player
function playerTurn(){

    if(turn == 0 ) {

        turn = 1;

    } else {

        turn = 0;
    }

    document.getElementById("display1").innerHTML = num[turn]
}

// check for the winners

function winCheck(){
  
            var box0 = document.getElementById("0");
            var box1 = document.getElementById("1");
            var box2 = document.getElementById("2");
            var box3 = document.getElementById("3");
            var box4 = document.getElementById("4");
            var box5 = document.getElementById("5");
            var box6 = document.getElementById("6");
            var box7 = document.getElementById("7");
            var box8 = document.getElementById("8");

            if ((box0.innerHTML !== "" && box0.innerHTML === box1.innerHTML && box0.innerHTML === box2.innerHTML) ||
                (box3.innerHTML !== "" && box3.innerHTML === box4.innerHTML && box3.innerHTML === box5.innerHTML) ||
                (box6.innerHTML !== "" && box6.innerHTML === box7.innerHTML && box6.innerHTML === box8.innerHTML) ||
                (box0.innerHTML !== "" && box0.innerHTML === box3.innerHTML && box0.innerHTML === box6.innerHTML) ||
                (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) ||
                (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) ||
                (box0.innerHTML !== "" && box0.innerHTML === box4.innerHTML && box0.innerHTML === box8.innerHTML) ||
                (box2.innerHTML !== "" && box2.innerHTML === box4.innerHTML && box2.innerHTML === box6.innerHTML)
                ) { alert (" Player " + num[turn] + " WON ");

               
                $("#display2").append("<p> Player " + num[turn] + " <span style='color:red'>WON!</span></p> ")
    
                    
                    gameOver = true
                    

                     } 

            
} 

// reset the board

function reset() {

        document.getElementById("0").innerHTML = "" ; 
        document.getElementById("1").innerHTML = "" ; 
        document.getElementById("2").innerHTML = "" ; 
        document.getElementById("3").innerHTML = "" ; 
        document.getElementById("4").innerHTML = "" ; 
        document.getElementById("5").innerHTML = "" ; 
        document.getElementById("6").innerHTML = "" ; 
        document.getElementById("7").innerHTML = "" ; 
        document.getElementById("8").innerHTML = "" ; 
        gameOver= false
        turn = 0
        document.getElementById("display1").innerHTML = num[0]
}

 // check for a draw match

 function drawCheck(){

    var box0 = document.getElementById("0");
    var box1 = document.getElementById("1");
    var box2 = document.getElementById("2");
    var box3 = document.getElementById("3");
    var box4 = document.getElementById("4");
    var box5 = document.getElementById("5");
    var box6 = document.getElementById("6");
    var box7 = document.getElementById("7");
    var box8 = document.getElementById("8");


     if ( !gameOver && box0.innerHTML !== "" && box1.innerHTML !== "" && box2.innerHTML !== ""
     && box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== ""
       && box7.innerHTML !== "" && box8.innerHTML !== "" ){
           alert("A draw match");
           gameOver = true
       }
 }       
       
        
         
        
         
     
