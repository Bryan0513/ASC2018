let ball ='blue';
//lines 6 & 7
//says hey: everyone in ball.js
//theres two global variables called
//xCoord and yCoord
let xCoord;
let yCoord;
//oh crap i dont know what the p5 variable width is here 
let xDirect=1;
let yDirect=1;

function setup(){
    createCanvas(500,500);
    //but i do know what it is here because
    //im inside a p5 function
    xCoord = width / 2;
    yCoord = height /2
}

let x=0
//function draw rapidly draws the object rapidly to create an animation
function draw(){
    fill(ball)
    background(75);
    ellipse(xCoord,yCoord,100);//circle
    if (xCoord>495){
        xDirect*=-1
    }else if(xCoord<5){
        xDirect*=-1
    }
    xCoord+=xDirect;

    
    
}
