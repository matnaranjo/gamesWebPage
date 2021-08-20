class alienboss{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    draw(){
        let alienboss = new Path2D();
        alienboss.lineTo(this.x,this.y-25);
        alienboss.lineTo(this.x-10,this.y-25);
        alienboss.lineTo(this.x-10,this.y-20);
        alienboss.lineTo(this.x-35,this.y-20);
        alienboss.lineTo(this.x-35,this.y-15);
        alienboss.lineTo(this.x-40,this.y-15);
        alienboss.lineTo(this.x-40,this.y-10);
        alienboss.lineTo(this.x-45,this.y-10);
        alienboss.lineTo(this.x-45,this.y-5);
        alienboss.lineTo(this.x-55,this.y-5);
        alienboss.lineTo(this.x-55,this.y);
        alienboss.lineTo(this.x-60,this.y);
        alienboss.lineTo(this.x-60,this.y+5);
        alienboss.lineTo(this.x-70,this.y+5);
        alienboss.lineTo(this.x-70,this.y+10);
        alienboss.lineTo(this.x-90,this.y+10);
        alienboss.lineTo(this.x-90,this.y+20);
        alienboss.lineTo(this.x-105,this.y+20);
        alienboss.lineTo(this.x-105,this.y+40);
        alienboss.lineTo(this.x-80,this.y+40);
        alienboss.lineTo(this.x-80,this.y+45);
        alienboss.lineTo(this.x-75,this.y+45);
        alienboss.lineTo(this.x-75,this.y+50);
        alienboss.lineTo(this.x-65,this.y+50);
        alienboss.lineTo(this.x-65,this.y+45);
        alienboss.lineTo(this.x-60,this.y+45);
        alienboss.lineTo(this.x-60,this.y+40);
        alienboss.lineTo(this.x-10,this.y+40);
        alienboss.lineTo(this.x-10,this.y+45);
        alienboss.lineTo(this.x-5,this.y+45);
        alienboss.lineTo(this.x-5,this.y+50);
        
        alienboss.lineTo(this.x+5,this.y+50);
        alienboss.lineTo(this.x+5,this.y+45);
        alienboss.lineTo(this.x+10,this.y+45);
        alienboss.lineTo(this.x+10,this.y+40);
        alienboss.lineTo(this.x+60,this.y+40);
        alienboss.lineTo(this.x+60,this.y+45);
        alienboss.lineTo(this.x+65,this.y+45);
        alienboss.lineTo(this.x+65,this.y+50);
        alienboss.lineTo(this.x+75,this.y+50);
        alienboss.lineTo(this.x+75,this.y+45);
        alienboss.lineTo(this.x+80,this.y+45);
        alienboss.lineTo(this.x+80,this.y+40);
        alienboss.lineTo(this.x+105,this.y+40);
        alienboss.lineTo(this.x+105,this.y+20);
        alienboss.lineTo(this.x+90,this.y+20);
        alienboss.lineTo(this.x+90,this.y+10);
        alienboss.lineTo(this.x+70,this.y+10);
        alienboss.lineTo(this.x+70,this.y+5);
        alienboss.lineTo(this.x+60,this.y+5);
        alienboss.lineTo(this.x+60,this.y);
        alienboss.lineTo(this.x+55,this.y);
        alienboss.lineTo(this.x+55,this.y-5);
        alienboss.lineTo(this.x+45,this.y-5);
        alienboss.lineTo(this.x+45,this.y-10);
        alienboss.lineTo(this.x+40,this.y-10);
        alienboss.lineTo(this.x+40,this.y-15);
        alienboss.lineTo(this.x+35,this.y-15);
        alienboss.lineTo(this.x+35,this.y-20);
        alienboss.lineTo(this.x+10,this.y-20);
        alienboss.lineTo(this.x+10,this.y-25);
        alienboss.closePath();
        ctx.fillStyle="#fc0320";
        ctx.fill(alienboss);


    }
}

class alien1 {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;

    }
    draw(Xpos, animation){
        if (this.alive==1){
            let alien1XPos1 =  10;
            let alien1YPos1 = 10;
            let imageheight = 40;
            let imagewidth = 50;
            let alien1XPos2 =  80;
            let alien1YPos2 = 10;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/aliens/alien_sprites_sheet.png";

            if (animation==1){
                ctx.drawImage(sprites, alien1XPos1,alien1YPos1, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if (animation==2){
                ctx.drawImage(sprites, alien1XPos2,alien1YPos2, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
        }
        if (this.alive==2){
            this.alive=3;
        }
        
    }
    destroy(bullX, bullY){
        if ((bullX > this.x)&&(bullX+5 < this.x+50) && (bullY>this.y)&&(bullY+10<this.y+40)&&(this.alive==1)){
            this.alive=2;
        }
    }
    explotion(Xpos){
        if (this.explotion_timer<150 && this.alive==3){
            let alien1XPos =  10;
            let alien1YPos = 10;
            let imageheight = 40;
            let imagewidth = 50;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/explotion/explotion.png";

            if (this.explotion_timer<25){
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<50){
                alien1XPos = 70;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<75){
                alien1XPos =130;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<100){
                alien1XPos =190;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<125){
                alien1XPos =250;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<150){
                alien1XPos =310;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            this.explotion_timer++;
        }
    }
}

class alien2 {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
    }

    draw(Xpos, animation){
        if (this.alive==1){
            let alien1XPos1 =  10;
            let alien1YPos1 = 130;
            let imageheight = 40;
            let imagewidth = 50;
            let alien1XPos2 =  80;
            let alien1YPos2 = 130;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/aliens/alien_sprites_sheet.png"

            if (animation==1){
                ctx.drawImage(sprites, alien1XPos1,alien1YPos1, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if (animation==2){
                ctx.drawImage(sprites, alien1XPos2,alien1YPos2, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);    
            }
        }  
        if (this.alive==2){
            this.alive=3;
        }
    }
    destroy(bullX, bullY){
        if ((bullX > this.x)&&(bullX+5 < this.x+50) && (bullY>this.y)&&(bullY+10<this.y+40)&&(this.alive==1)){
            this.alive=2;
        }
    }
    explotion(Xpos){
        if (this.explotion_timer<150 && this.alive==3){
            let alien1XPos =  10;
            let alien1YPos = 10;
            let imageheight = 40;
            let imagewidth = 50;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/explotion/explotion.png";

            if (this.explotion_timer<25){
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<50){
                alien1XPos = 70;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<75){
                alien1XPos =130;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<100){
                alien1XPos =190;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<125){
                alien1XPos =250;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<150){
                alien1XPos =310;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            this.explotion_timer++;
        }
    }
}

class alien3 {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.alive = 1;
        this.explotion_timer=0;
    }

    draw(Xpos,animation){
        if (this.alive==1){
            let alien1XPos1 =  10;
            let alien1YPos1 = 70;
            let imageheight = 40;
            let imagewidth = 50;
            let alien1XPos2 =  80;
            let alien1YPos2 = 70;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/aliens/alien_sprites_sheet.png";

            if (animation==1){
                ctx.drawImage(sprites, alien1XPos1,alien1YPos1, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if (animation==2){
                ctx.drawImage(sprites, alien1XPos2,alien1YPos2, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);    
            }
        }
        if (this.alive==2){
            this.alive=3;
        }
    }
    destroy(bullX, bullY){
        if ((bullX > this.x)&&(bullX+5 < this.x+50) && (bullY>this.y)&&(bullY+10<this.y+40)&&(this.alive==1)){
            this.alive=2;
        }
    }
    explotion(Xpos){
        if (this.explotion_timer<150 && this.alive==3){
            let alien1XPos =  10;
            let alien1YPos = 10;
            let imageheight = 40;
            let imagewidth = 50;
            this.x = Xpos;
            const sprites = new Image();
            sprites.src = "./sprites/explotion/explotion.png";

            if (this.explotion_timer<25){
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<50){
                alien1XPos = 70;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<75){
                alien1XPos =130;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<100){
                alien1XPos =190;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<125){
                alien1XPos =250;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            if(this.explotion_timer<150){
                alien1XPos =310;
                ctx.drawImage(sprites, alien1XPos,alien1YPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
            }
            this.explotion_timer++;
        }
    }
}

class shelter {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    draw(){
        let shelter1 = new Path2D();
        shelter1.lineTo(this.x,this.y-100);
        shelter1.lineTo(this.x-50,this.y-100);
        shelter1.lineTo(this.x-100,this.y-50);
        shelter1.lineTo(this.x-100, this.y+100);
        shelter1.lineTo(this.x-50,this.y+100);
        shelter1.lineTo(this.x-50,this.y+50);
        shelter1.lineTo(this.x-25,this.y);
        shelter1.lineTo(this.x+25,this.y);
        shelter1.lineTo(this.x+50,this.y+50);
        shelter1.lineTo(this.x+50,this.y+100);
        shelter1.lineTo(this.x+100,this.y+100);
        shelter1.lineTo(this.x+100,this.y-50);
        shelter1.lineTo(this.x+50,this.y-100);
        shelter1.closePath();
        ctx.fillStyle="#06d41e"
        ctx.fill(shelter1);
    }
}

class tank{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.x_bullet = 0;
        this.y_bullet = 0;
    }
    draw(Xpos){
        let tankXPos =  0;
        let tankYPos = 5;
        let imageheight = 25;
        let imagewidth = 65;
        this.x = Xpos;
        const sprites = new Image();
        sprites.src = "./sprites/tank/tank.png";
        ctx.drawImage(sprites, tankXPos,tankYPos, imagewidth,imageheight, this.x,this.y,imagewidth,imageheight);
    }

    draw_shoot(Xpos, Ypos){
        this.x_bullet=Xpos;
        this.y_bullet=Ypos;
        let  bulletXpos = 0;
        let bulletYPos = 0;
        let imageheight = 10;
        let imagewidth = 5;
        const sprites = new Image();
        sprites.src = "./sprites/shoots/tank_shoot.png";
        ctx.drawImage(sprites, bulletXpos, bulletYPos, imagewidth, imageheight, this.x_bullet, this.y_bullet, imagewidth, imageheight);
    }
}

// Constantes, variables y demas, borrar corchetes

let distance = 70;
let xprime = 310;
let xalienkiller = 600;
let yalienkiller = 800;
let alienspeed = 0;
let direction = 0;
let animation = 1;
let bullet_exist = 0;
let bullet_speed = 0;
let bulletX=0;
let bulletY=800;

const alien1row1 = new alien1(xprime+(0*distance),100);
const alien2row1 = new alien1(xprime+(1*distance),100);
const alien3row1 = new alien1(xprime+(2*distance),100);
const alien4row1 = new alien1(xprime+(3*distance),100);
const alien5row1 = new alien1(xprime+(4*distance),100);
const alien6row1 = new alien1(xprime+(5*distance),100);
const alien7row1 = new alien1(xprime+(6*distance),100);
const alien8row1 = new alien1(xprime+(7*distance),100);
const alien9row1 = new alien1(xprime+(8*distance),100);
const alien10row1 = new alien1(xprime+(9*distance),100);

const alien1row2 = new alien1(xprime+(0*distance),160);
const alien2row2 = new alien1(xprime+(1*distance),160);
const alien3row2 = new alien1(xprime+(2*distance),160);
const alien4row2 = new alien1(xprime+(3*distance),160);
const alien5row2 = new alien1(xprime+(4*distance),160);
const alien6row2 = new alien1(xprime+(5*distance),160);
const alien7row2 = new alien1(xprime+(6*distance),160);
const alien8row2 = new alien1(xprime+(7*distance),160);
const alien9row2 = new alien1(xprime+(8*distance),160);
const alien10row2 = new alien1(xprime+(9*distance),160);

const alien1row3 = new alien2(xprime+(0*distance),220);
const alien2row3 = new alien2(xprime+(1*distance),220);
const alien3row3 = new alien2(xprime+(2*distance),220);
const alien4row3 = new alien2(xprime+(3*distance),220);
const alien5row3 = new alien2(xprime+(4*distance),220);
const alien6row3 = new alien2(xprime+(5*distance),220);
const alien7row3 = new alien2(xprime+(6*distance),220);
const alien8row3 = new alien2(xprime+(7*distance),220);
const alien9row3 = new alien2(xprime+(8*distance),220);
const alien10row3 = new alien2(xprime+(9*distance),220);

const alien1row4 = new alien2(xprime+(0*distance),280);
const alien2row4 = new alien2(xprime+(1*distance),280);
const alien3row4 = new alien2(xprime+(2*distance),280);
const alien4row4 = new alien2(xprime+(3*distance),280);
const alien5row4 = new alien2(xprime+(4*distance),280);
const alien6row4 = new alien2(xprime+(5*distance),280);
const alien7row4 = new alien2(xprime+(6*distance),280);
const alien8row4 = new alien2(xprime+(7*distance),280);
const alien9row4 = new alien2(xprime+(8*distance),280);
const alien10row4 = new alien2(xprime+(9*distance),280);

const alien1row5 = new alien3(xprime+(0*distance),340);
const alien2row5 = new alien3(xprime+(1*distance),340);
const alien3row5 = new alien3(xprime+(2*distance),340);
const alien4row5 = new alien3(xprime+(3*distance),340);
const alien5row5 = new alien3(xprime+(4*distance),340);
const alien6row5 = new alien3(xprime+(5*distance),340);
const alien7row5 = new alien3(xprime+(6*distance),340);
const alien8row5 = new alien3(xprime+(7*distance),340);
const alien9row5 = new alien3(xprime+(8*distance),340);
const alien10row5 = new alien3(xprime+(9*distance),340);

const alien1row6 = new alien3(xprime+(0*distance),400);
const alien2row6 = new alien3(xprime+(1*distance),400);
const alien3row6 = new alien3(xprime+(2*distance),400);
const alien4row6 = new alien3(xprime+(3*distance),400);
const alien5row6 = new alien3(xprime+(4*distance),400);
const alien6row6 = new alien3(xprime+(5*distance),400);
const alien7row6 = new alien3(xprime+(6*distance),400);
const alien8row6 = new alien3(xprime+(7*distance),400);
const alien9row6 = new alien3(xprime+(8*distance),400);
const alien10row6 = new alien3(xprime+(9*distance),400);

const alienkiller = new tank(xalienkiller, yalienkiller);


window.onload=function (){
    canv = document.getElementById("background_animation");
    ctx = canv.getContext("2d");
    canv.width = 1300;
    canv.height = 850;
    document.addEventListener("keydown",tankMovement);
    document.addEventListener("keydown", shoot);
    let spaceinvaders = setInterval(game,2);
}


function game(){
    ctx.clearRect(0, 0, canv.width, canv.height);

    if (alienspeed<100){
        alienspeed++;
    }


    // Alien animation selected per cycle
    if (alienspeed==100){
        if (animation==1){
            animation=2;
        }
        else{
            animation=1;
        }
    }

    // Alien animation #1 drawn
    alien1row1.draw(xprime+(0*distance), animation);
    alien2row1.draw(xprime+(1*distance),animation);
    alien3row1.draw(xprime+(2*distance),animation);
    alien4row1.draw(xprime+(3*distance),animation);
    alien5row1.draw(xprime+(4*distance),animation);
    alien6row1.draw(xprime+(5*distance),animation);
    alien7row1.draw(xprime+(6*distance),animation);
    alien8row1.draw(xprime+(7*distance),animation);
    alien9row1.draw(xprime+(8*distance),animation);
    alien10row1.draw(xprime+(9*distance),animation);

    alien1row2.draw(xprime+(0*distance),animation);
    alien2row2.draw(xprime+(1*distance),animation);
    alien3row2.draw(xprime+(2*distance),animation);
    alien4row2.draw(xprime+(3*distance),animation);
    alien5row2.draw(xprime+(4*distance),animation);
    alien6row2.draw(xprime+(5*distance),animation);
    alien7row2.draw(xprime+(6*distance),animation);
    alien8row2.draw(xprime+(7*distance),animation);
    alien9row2.draw(xprime+(8*distance),animation);
    alien10row2.draw(xprime+(9*distance),animation);

    alien1row3.draw(xprime+(0*distance),animation);
    alien2row3.draw(xprime+(1*distance),animation);
    alien3row3.draw(xprime+(2*distance),animation);
    alien4row3.draw(xprime+(3*distance),animation);
    alien5row3.draw(xprime+(4*distance),animation);
    alien6row3.draw(xprime+(5*distance),animation);
    alien7row3.draw(xprime+(6*distance),animation);
    alien8row3.draw(xprime+(7*distance),animation);
    alien9row3.draw(xprime+(8*distance),animation);
    alien10row3.draw(xprime+(9*distance),animation);

    alien1row4.draw(xprime+(0*distance),animation);
    alien2row4.draw(xprime+(1*distance),animation);
    alien3row4.draw(xprime+(2*distance),animation);
    alien4row4.draw(xprime+(3*distance),animation);
    alien5row4.draw(xprime+(4*distance),animation);
    alien6row4.draw(xprime+(5*distance),animation);
    alien7row4.draw(xprime+(6*distance),animation);
    alien8row4.draw(xprime+(7*distance),animation);
    alien9row4.draw(xprime+(8*distance),animation);
    alien10row4.draw(xprime+(9*distance),animation);

    alien1row5.draw(xprime+(0*distance),animation);
    alien2row5.draw(xprime+(1*distance),animation);
    alien3row5.draw(xprime+(2*distance),animation);
    alien4row5.draw(xprime+(3*distance),animation);
    alien5row5.draw(xprime+(4*distance),animation);
    alien6row5.draw(xprime+(5*distance),animation);
    alien7row5.draw(xprime+(6*distance),animation);
    alien8row5.draw(xprime+(7*distance),animation);
    alien9row5.draw(xprime+(8*distance),animation);
    alien10row5.draw(xprime+(9*distance),animation);

    alien1row6.draw(xprime+(0*distance),animation);
    alien2row6.draw(xprime+(1*distance),animation);
    alien3row6.draw(xprime+(2*distance),animation);
    alien4row6.draw(xprime+(3*distance),animation);
    alien5row6.draw(xprime+(4*distance),animation);
    alien6row6.draw(xprime+(5*distance),animation);
    alien7row6.draw(xprime+(6*distance),animation);
    alien8row6.draw(xprime+(7*distance),animation);
    alien9row6.draw(xprime+(8*distance),animation);
    alien10row6.draw(xprime+(9*distance),animation);


    // EXPLOTION SECUENCE 
    alien1row1.explotion(xprime+(0*distance));
    alien2row1.explotion(xprime+(1*distance));
    alien3row1.explotion(xprime+(2*distance));
    alien4row1.explotion(xprime+(3*distance));
    alien5row1.explotion(xprime+(4*distance));
    alien6row1.explotion(xprime+(5*distance));
    alien7row1.explotion(xprime+(6*distance));
    alien8row1.explotion(xprime+(7*distance));
    alien9row1.explotion(xprime+(8*distance));
    alien10row1.explotion(xprime+(9*distance));

    alien1row2.explotion(xprime+(0*distance));
    alien2row2.explotion(xprime+(1*distance));
    alien3row2.explotion(xprime+(2*distance));
    alien4row2.explotion(xprime+(3*distance));
    alien5row2.explotion(xprime+(4*distance));
    alien6row2.explotion(xprime+(5*distance));
    alien7row2.explotion(xprime+(6*distance));
    alien8row2.explotion(xprime+(7*distance));
    alien9row2.explotion(xprime+(8*distance));
    alien10row2.explotion(xprime+(9*distance));

    alien1row3.explotion(xprime+(0*distance));
    alien2row3.explotion(xprime+(1*distance));
    alien3row3.explotion(xprime+(2*distance));
    alien4row3.explotion(xprime+(3*distance));
    alien5row3.explotion(xprime+(4*distance));
    alien6row3.explotion(xprime+(5*distance));
    alien7row3.explotion(xprime+(6*distance));
    alien8row3.explotion(xprime+(7*distance));
    alien9row3.explotion(xprime+(8*distance));
    alien10row3.explotion(xprime+(9*distance));

    alien1row4.explotion(xprime+(0*distance));
    alien2row4.explotion(xprime+(1*distance));
    alien3row4.explotion(xprime+(2*distance));
    alien4row4.explotion(xprime+(3*distance));
    alien5row4.explotion(xprime+(4*distance));
    alien6row4.explotion(xprime+(5*distance));
    alien7row4.explotion(xprime+(6*distance));
    alien8row4.explotion(xprime+(7*distance));
    alien9row4.explotion(xprime+(8*distance));
    alien10row4.explotion(xprime+(9*distance));

    alien1row5.explotion(xprime+(0*distance));
    alien2row5.explotion(xprime+(1*distance));
    alien3row5.explotion(xprime+(2*distance));
    alien4row5.explotion(xprime+(3*distance));
    alien5row5.explotion(xprime+(4*distance));
    alien6row5.explotion(xprime+(5*distance));
    alien7row5.explotion(xprime+(6*distance));
    alien8row5.explotion(xprime+(7*distance));
    alien9row5.explotion(xprime+(8*distance));
    alien10row5.explotion(xprime+(9*distance));

    alien1row6.explotion(xprime+(0*distance));
    alien2row6.explotion(xprime+(1*distance));
    alien3row6.explotion(xprime+(2*distance));
    alien4row6.explotion(xprime+(3*distance));
    alien5row6.explotion(xprime+(4*distance));
    alien6row6.explotion(xprime+(5*distance));
    alien7row6.explotion(xprime+(6*distance));
    alien8row6.explotion(xprime+(7*distance));
    alien9row6.explotion(xprime+(8*distance));
    alien10row6.explotion(xprime+(9*distance));
    
    // aliens move to the left
    if (alienspeed==100 && direction==1){
        alienspeed=0;
        xprime-=10;
        if (xprime==10){
            direction = 0;
        }
    }
    // aliens move to the right
    if (alienspeed==100 && direction==0){
        alienspeed=0;
        xprime+=10;
        if (xprime==610){
            direction = 1;
        }
    }

    // if bullet is invoked on screen 
    if (bullet_exist==1){

        if (bullet_speed == 0){
            bulletX = xalienkiller+30;
        } 
        bulletY -= 5;
        alienkiller.draw_shoot(bulletX, bulletY);
        bullet_speed ++;

        if (bulletY==0){
            bullet_exist=0;
            bulletY = 800;
            bullet_speed= 0;
        }
        

    }

    // if alien collides with bullet
    alien1row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row1.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row2.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row3.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row4.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row5.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    alien1row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien2row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien3row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien4row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien5row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien6row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien7row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien8row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien9row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);
    alien10row6.destroy(alienkiller.x_bullet,alienkiller.y_bullet);

    if (alien1row1.alive==2 || alien2row1.alive==2 || alien3row1.alive==2 || alien4row1.alive==2 ||alien5row1.alive==2 ||alien6row1.alive==2 ||alien7row1.alive==2 ||alien8row1.alive==2 ||alien9row1.alive==2 ||alien10row1.alive==2 ||alien1row2.alive==2 || alien2row2.alive==2 || alien3row2.alive==2 || alien4row2.alive==2 ||alien5row2.alive==2 ||alien6row2.alive==2 ||alien7row2.alive==2 ||alien8row2.alive==2 ||alien9row2.alive==2 ||alien10row2.alive==2 ||alien1row3.alive==2 || alien2row3.alive==2 || alien3row3.alive==2 || alien4row3.alive==2 ||alien5row3.alive==2 ||alien6row3.alive==2 ||alien7row3.alive==2 ||alien8row3.alive==2 ||alien9row3.alive==2 ||alien10row3.alive==2 ||alien1row4.alive==2 || alien2row4.alive==2 || alien3row4.alive==2 || alien4row4.alive==2 ||alien5row4.alive==2 ||alien6row4.alive==2 ||alien7row4.alive==2 ||alien8row4.alive==2 ||alien9row4.alive==2 ||alien10row4.alive==2 ||alien1row5.alive==2 || alien2row5.alive==2 || alien3row5.alive==2 || alien4row5.alive==2 ||alien5row5.alive==2 ||alien6row5.alive==2 ||alien7row5.alive==2 ||alien8row5.alive==2 ||alien9row5.alive==2 ||alien10row5.alive==2||alien1row6.alive==2 || alien2row6.alive==2 || alien3row6.alive==2 || alien4row6.alive==2 ||alien5row6.alive==2 ||alien6row6.alive==2 ||alien7row6.alive==2 ||alien8row6.alive==2 ||alien9row6.alive==2 ||alien10row6.alive==2){
        bullet_exist=0;
        alienkiller.y_bullet = 800;
        alienkiller.x_bullet=0
        bullet_speed= 0;
        bulletY =800;
    }

    

    alienkiller.draw(xalienkiller); 

}



function tankMovement(evt){
    switch (evt.keyCode) {
        case 37:
            if (xalienkiller>35){
                xalienkiller-=10;
            }
            break;
    
        case 39:
            if (xalienkiller<1265){
                xalienkiller+=10;
            }
        
            break;

    }
}

function shoot(evt){
    switch (evt.keyCode){
        case 32:
            bullet_exist = 1;
            break;
    }
}