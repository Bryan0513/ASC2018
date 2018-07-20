let w = 100
function setup(){
    createCanvas(1000,900);
    fill('blue');// color \s the rectangle
    rect(0,0,100,90);// teh square in the grid
    let x=0
    let y=0
    //
    
    
    for (i=1;i<=100;i++){
        rect(x,y,w,w);
        if(i%10==0){
         y+=w
            x=0
        }else{
            x+=w
         }
        }
 }
let boats=[[100,100],[100,100]];
boat1 = boats[0]
boatx1 = boat1[0]
boaty1 = boat1[1]
boaty2 = boat1[1]
 
function mousePressed(){
    let x = floor(mouseX%box.size);
    let y = floor(mouseY%box.size);
    let ships[]
}
