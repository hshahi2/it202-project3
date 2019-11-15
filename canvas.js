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
    
    
    
    var myCan = document.querySelector("#animationCanvas");
    var mycontext = myCan.getContext("2d");
    
    function drawTriangle() {
        mycontext.beginPath();
        mycontext.moveTo(200, 100);
        mycontext.lineTo(170, 150);
        mycontext.lineTo(230, 150);
        mycontext.closePath();
//         myContext.translate(200,200);


        // the outline
        mycontext.lineWidth = 10;
        mycontext.strokeStyle = "rgba(102, 102, 102, 1)";
        mycontext.stroke();

        // the fill color
        mycontext.fillStyle = "rgba(255, 204, 0, 1)";
        mycontext.fill();
    }
    
    drawTriangle();
    
    
    

    
    

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



// kick it off
window.requestAnimationFrame(draw);









//     var myCan = document.querySelector("#animationCanvas");
// var mycontext = myCan.getContext("2d");
 
// function drawTriangle() {
//       mycontext.clearRect(0, 0, canvas.width, canvas.height);

//   // the triangle
//   mycontext.beginPath();
//     mycontext.moveTo(200 + deltaX, 100 + deltaY);
//   mycontext.lineTo(170 + deltaX, 150 + deltaY);
//   mycontext.lineTo(230 + deltaX, 150 + deltaY);
    
// //   mycontext.moveTo(200, 100);
// //   mycontext.lineTo(170, 150);
// //   mycontext.lineTo(230, 150);
//   mycontext.closePath();
 
//   // the outline
//   mycontext.lineWidth = 10;
//   mycontext.strokeStyle = "rgba(102, 102, 102, 1)";
//   mycontext.stroke();
 
//   // the fill color
//   mycontext.fillStyle = "rgba(255, 204, 0, 1)";
//   mycontext.fill();
// }
    
    
    
//     window.addEventListener("keydown", moveSomething, false);
  
    
//     var deltaX = 0;
// var deltaY = 0;
    
// function moveSomething(e) {
//     switch(e.keyCode) {
//         case 37:
//             deltaX -= 2;
//             break;
//         case 38:
//             deltaY -= 2;
//             break;
//         case 39:
//             deltaX += 2;
//             break;
//         case 40:
//             deltaY += 2;
//             break;
//     } 
//         e.preventDefault();
//     drawTriangle();


// }  
    
//     function keysReleased(e) {
//     // mark keys that were released
//     keys[e.keyCode] = false;
// }
