var background = new Image();
background.src = "hs-2014-27-a-print.0.0.jpg";

// var myC = document.getElementById("animationCanvas");
// var ccc = myC.getContext("2d");
// ccc.font = "30px Arial";
// ccc.fillStyle = "yellow";
// ccc.fillText("Hello World", 10, 50);
               


//
// randomly generate coordinate for the harm and heal objects 
//
var randHeal = Math.floor((Math.random() * 400) + 50);
var randHarm = Math.floor((Math.random() * 400) + 50);


//                 var healX = 0, healY = randHeal;
//                 var harmX = 0, harmY = randHarm;

var healX = randHeal, healY = 0;
var harmX = randHarm, harmY = 0;

var c = document.getElementById("animationCanvas"); 
var cc = document.getElementById("animationCanvas");

var ctx = document.getElementById("animationCanvas").getContext("2d");

var healObject = c.getContext("2d");
healObject.fillStyle = 'green';

var harmObject = cc.getContext("2d"); ///////////////
harmObject.fillStyle = 'red';////////////

console.log(c.width, c.height);
console.log(cc.width, cc.height);//////

console.log(ctx.width, ctx.height);



function draw() {
    // clear the canvas
    // healObject.clearRect(0, 0, c.width, c.height);

    //
    // increment coord to "move" l to r
    // 
    healY += 1;
    harmY +=1; ////////////

    //
    // handle edge condition
    // 
    if (healY > c.width) {
        healY -= c.width;
    }

      if (harmY > cc.width) {   ////////////////
        harmY -= cc.width;
    }

    //
    // draw objects
    // draw the background image
    // 
    healObject.drawImage(background, 0, 0);
    harmObject.drawImage(background, 0, 0);///////
    
    
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
    myText.fillText("LeveL: " + LEVEL, 200, 50);
    
    

    //
    // draw a circle
    // start a new path;  
    //  comment out begin and close path to see what happens
    //  
    healObject.beginPath();
    harmObject.beginPath();//////////

   //
   //  a square at the coordinates     
   //            
   healObject.rect(healX,healY,30,30);
   healObject.closePath();
   healObject.fill();

   

   //
   // a circle at the coordinates 
   // 
   harmObject.arc(harmX, harmY, 18, 0, Math.PI * 2);              ///////
   harmObject.closePath();
   harmObject.fill();

   // call again when available
   window.requestAnimationFrame(draw);
}



// kick it off
window.requestAnimationFrame(draw);



