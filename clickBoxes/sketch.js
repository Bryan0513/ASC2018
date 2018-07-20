let myColor='blue'



function setup(){
    createCanvas(600,600);
}

function draw(){
    fill(myColor);
    rect(20, 20, 60, 60);
}

function mouseClicked(){
   if (myColor == 'blue'){
    myColor ='red'
   }else if(myColor=='red'){
       myColor='blue'
   }
    
 }