var myREC;
var MY_SCORE;
var background = new Image();
background.src = "dark_scary.png";

//
// randomly generate coordinate for the harm and heal objects 
//
var randHeal = Math.floor((Math.random() * 400) + 50);
var randHarm = Math.floor((Math.random() * 400) + 50);

var temp = Math.abs(randHeal-randHarm);


//
// make sure the heal and harm objects don't overlap 
// 
do 
{
    randHeal = Math.floor((Math.random() * 400) + 50);
    temp = Math.abs(randHeal-randHarm);
} while (temp <=50);



//
// have that randomly generated number as the starting point 
// for where the objects are going to come from 
// 
var healX = randHeal, healY = 0;
var harmX = randHarm, harmY = 0;
var playerX = 200, playerY = 400;

var healCanvas = document.getElementById("animationCanvas"); 
var harmCanvas = document.getElementById("animationCanvas");
var ctx = document.getElementById("animationCanvas").getContext("2d");

var healObject = healCanvas.getContext("2d");
var harmObject = harmCanvas.getContext("2d"); 

console.log(healCanvas.width, healCanvas.height);
console.log(harmCanvas.width, harmCanvas.height);
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

function getDistance(x1,y1,x2,y2)
{
    var xD = (x2-x1);
    var yD = (y2-y1);
    var power = Math.pow(xD,2)+Math.pow(yD,2);
    return Math.sqrt(power);
}



function timeDisp() {
  MY_SCORE++;
//   document.write(MY_SCORE);
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
    if (healY > healCanvas.width) {
        healY -= healCanvas.width;
    }

      if (harmY > harmCanvas.width) {   
        harmY -= harmCanvas.width;
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
    //  
    MY_SCORE = 0;
    var myContext = document.getElementById("animationCanvas");
    var myText = myContext.getContext("2d");
    myText.font = "25px Arial";
    myText.fillStyle = "yellow";
    var theSCORE = setInterval(timeDisp,5000000);
    myText.fillText("Score: " + theSCORE, 10, 50);
    
    
    
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
  	myREC = drawRect(startingX,startingY,wid,hei);
    drawRect(startingX,startingY,wid,hei);
        
        
};
    
    
    
    
    
    //
    // draw a circle
    // start a new path;  
    //  comment out begin and close path to see what happens
    //  
    
    
    //
    //  a square at the coordinates     
    //
    healObject.beginPath();                        
    healObject.rect(healX,healY,30,30);
    healObject.closePath();
    healObject.fillStyle = 'green';
    healObject.fill();

   

    //
    // a circle at the coordinates 
    // 
    harmObject.beginPath();
    harmObject.arc(harmX, harmY, 18, 0, Math.PI * 2);              
    harmObject.closePath();
    harmObject.fillStyle = 'red';
    harmObject.fill();
    
    
    //
    // collision detection 
    // 

    
//     if (healObject.healX < myREC.startingX + myREC.wid  && healObject.healX + healCanvas.width  > myREC.startingX &&
// 		healObject.healY < myREC.startingY + myREC.hei && healObject.healY + healCanvas.height > myREC.startingY) {
//         myText.fillText("Score: " + MY_SCORE, 10, 50);
// console.log("dfsd");
// // The objects are touching
// }
    
    
    
    
    
    
    
    
    

    
    
    // call again when available 
    window.requestAnimationFrame(draw);
}


