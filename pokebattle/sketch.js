let attacking;
let attackTime;
let baseSize = 200;
let damage = false;

function setup(){
    createCanvas(500, 500);
    attacking = false;
    attackTime = 0;
}


let atkBoxX;
let atkBoxY;
let atkBoxWidth;
let atkBoxHeight;
let x;
let y;
let health = 1;
function draw(){
    background(200);
    let opponentColor = color(255, 100, 100);

    if(attacking){
        if(attackTime % 20 == 0){
            damage = !damage;                                                            
        }

        if(attackTime > 100){
            attacking = false;
            attackTime = 0;      
            console.log("stopping");  
            damage = false;                                                                            
        }
        attackTime++;
    }

    if(damage){
        opponentColor = color(223, 244, 66);        
    }else{
        opponentColor = color(255, 100, 100)        
    }        
            
    fill(244, 223, 66);
    ellipse(3 * baseSize/4, height - 3 * baseSize/4, baseSize);
    fill(opponentColor);
    let opponentSize = baseSize * .8;
    ellipse(width - 3 * opponentSize/4,  3 * opponentSize/4, opponentSize);
    fill(0, 255, 0);
    atkBoxX = 6 * width / 8 - 10;
    atkBoxY = 7 * height / 8 - 10;
    atkBoxWidth = 2 * width / 8;
    atkBoxHeight = height / 8;
    rect(atkBoxX, atkBoxY, atkBoxWidth, atkBoxHeight);
    x = width / 10
    y = height / 10      
    fill(0,255,0);    
    if(health<=.5){
        fill(255,0,0);
    }
    rect(x, y,  2 * width / 5 * health, height / 20)
} 

function mousePressed(){
    rect(atkBoxX, atkBoxY, atkBoxWidth, atkBoxHeight);
    let xlow=atkBoxX;
    let ylow=atkBoxY;
    let xhigh=atkBoxX + atkBoxWidth;
    let yhigh=atkBoxY + atkBoxHeight;

    if(xlow<mouseX && mouseX<xhigh && ylow<mouseY && mouseY<yhigh){
        attacking = true
        console.log('x');
        health=health-.1
        if(health < 0 ){
            health = 0;
        }
    }
                            
}

