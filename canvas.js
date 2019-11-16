var background = new Image();
background.src = "dark_scary.png";

//
// randomly generate coordinate for the harm and heal objects 
//
var randHeal = Math.floor((Math.random() * 400) + 50);
var randHarm = Math.floor((Math.random() * 400) + 50);

//
// have that randomly generated number as the starting point 
// for where the objects are going to come from 
// 
var healX = randHeal, healY = 0;
var harmX = randHarm, harmY = 0;
var playerX = 200, playerY = 400;

var c = document.getElementById("animationCanvas"); 
var cc = document.getElementById("animationCanvas");

var ctx = document.getElementById("animationCanvas").getContext("2d");

var healObject = c.getContext("2d");
healObject.fillStyle = 'green';

var harmObject = cc.getContext("2d"); 
harmObject.fillStyle = 'red';

console.log(c.width, c.height);
console.log(cc.width, cc.height);
console.log(ctx.width, ctx.height);

// 
// get the canvas element by ID, set the initial horizontal and vertical 
// position of object and set the dimensions of the moving object 
// 
window.requestAnimationFrame(draw);
var stage = document.getElementById('animationCanvas'), 
        ct = stage.getContext('2d'), 
        startingX = 200, 
        startingY = 480, 
        wid = 50, 
        hei = 20; 

//
// draw Rectangle function	
// 	
function drawRect(startingX,startingY,wid,hei) {
    ct.fillStyle = '#666'; 
    ct.fillRect(startingX, startingY, wid, hei); 
}



//
// draw the heal and harm objects and make sure they 
// are moving from top to bottom 
// 
function draw() {
    // clear the canvas
    // healObject.clearRect(0, 0, c.width, c.height);

    //
    // increment coord to "move" top to bottom
    // 
    healY += 1;
    harmY +=1; 

    //
    // handle edge condition
    // 
    if (healY > c.width) {
        healY -= c.width;
    }

      if (harmY > cc.width) {   
        harmY -= cc.width;
    }

    //
    // draw objects
    // draw the background image
    // 
    healObject.drawImage(background, 0, 0);
    harmObject.drawImage(background, 0, 0);
    
    
    //
    // scoring system for the game
    //
    var MY_SCORE;
    var myContext = document.getElementById("animationCanvas");
    var myText = myContext.getContext("2d");
    myText.font = "25px Arial";
    myText.fillStyle = "yellow";
    myText.fillText("Score: ", 10, 50);
    
    //
    // lives system
    // 
    var LIVES = 3;
    myText.font = "25px Arial";
    myText.fillStyle = "yellow";
    myText.fillText("Lives: " + LIVES, 400, 50);
    
    
    //
    // level 
    // 
    var LEVEL = 1;
    myText.font = "25px Arial";
    myText.fillStyle = "yellow";
    myText.fillText("Level: " + LEVEL, 200, 50);
    
    
    //
    // drawing rectangle on initial load
    // 
    drawRect(startingX,startingY,wid,hei); 
    
    //
    // move rectangle inside the canvas using arrow keys
    // 
    window.onkeydown = function(event) {
        var keyPr = event.keyCode; 
        //
        // right arrow functionality 
        // 
        if(keyPr === 39 && startingX <= 440) {  // changes 
            startingX = startingX + 18; 
        }
        //
        // left arrow functionality 
        // 
        else if(keyPr === 37 && startingX > 10) {
            startingX = startingX - 20; 
        }
		
  	//
  	// clearing anything drawn on canvas
    // comment this below do draw path 
    // 
    ct.clearRect(0,0, 400, 400);
  
    //  
  	// drawing rectangle at new position
  	// 
    drawRect(startingX,startingY,wid,hei);
};
    
    //
    // draw a circle
    // start a new path;  
    //  comment out begin and close path to see what happens
    //  
    healObject.beginPath();
    harmObject.beginPath();
    
    
   //
   //  a square at the coordinates     
   //            
   healObject.rect(healX,healY,30,30);
   healObject.closePath();
   healObject.fill();

   

   //
   // a circle at the coordinates 
   // 
   harmObject.arc(harmX, harmY, 18, 0, Math.PI * 2);              
   harmObject.closePath();
   harmObject.fill();

    
   // call again when available
   window.requestAnimationFrame(draw);
}


