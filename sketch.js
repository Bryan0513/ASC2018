
function setup(){
    createCanvas(600,600);
}
let x=0
let xDirec=1
function draw(){
    background(100);
    fill(220);
    ellipse(x,200,20);
    x = x + xDirec

    if(x<10){
        xDirect=1
    }else if(x>590){
        xDirect = -1
    }
}
