class alien1 {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    draw(){
        let alien1 = new Path2D();
        alien1.lineTo(this.x,this.y-15);
        alien1.lineTo(this.x-5,this.y-15);
        alien1.lineTo(this.x-5,this.y-20);
        alien1.lineTo(this.x-10,this.y-20);
        alien1.lineTo(this.x-10,this.y-15);
        alien1.lineTo(this.x-15,this.y-15);
        alien1.lineTo(this.x-15,this.y-10);
        alien1.lineTo(this.x-20,this.y-10);
        alien1.lineTo(this.x-20,this.y-5);
        alien1.lineTo(this.x-25,this.y-5);
        alien1.lineTo(this.x-25,this.y+10);
        alien1.lineTo(this.x-20,this.y+10);
        alien1.lineTo(this.x-20,this.y);
        alien1.lineTo(this.x-15,this.y);
        alien1.lineTo(this.x-15,this.y+10);
        alien1.lineTo(this.x-10,this.y+10);
        alien1.lineTo(this.x-10,this.y+15);
        alien1.lineTo(this.x-15,this.y+15);
        alien1.lineTo(this.x-15,this.y+20);
        alien1.lineTo(this.x-5,this.y+20);
        alien1.lineTo(this.x-5,this.y+10);
        alien1.lineTo(this.x+5,this.y+10);
        alien1.lineTo(this.x+5,this.y+20);
        alien1.lineTo(this.x+15,this.y+20);
        alien1.lineTo(this.x+15,this.y+15);
        alien1.lineTo(this.x+10,this.y+15);
        alien1.lineTo(this.x+10,this.y+10);
        alien1.lineTo(this.x+15,this.y+10);
        alien1.lineTo(this.x+15,this.y);
        alien1.lineTo(this.x+20,this.y);
        alien1.lineTo(this.x+20,this.y+10);
        alien1.lineTo(this.x+25,this.y+10);
        alien1.lineTo(this.x+25,this.y-5);
        alien1.lineTo(this.x+20,this.y-5);
        alien1.lineTo(this.x+20,this.y-10);
        alien1.lineTo(this.x+15,this.y-10);
        alien1.lineTo(this.x+15,this.y-15);
        alien1.lineTo(this.x+10,this.y-15);
        alien1.lineTo(this.x+10,this.y-20);
        alien1.lineTo(this.x+5,this.y-20);
        alien1.lineTo(this.x+5,this.y-15);
        alien1.closePath();
        ctx.fillStyle="#ffffff"
        ctx.fill(alien1);
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
    }
    draw(){
        let tank1 = new Path2D();
        tank1.lineTo(this.x, this.y-20);
        tank1.lineTo(this.x-5, this.y-20);
        tank1.lineTo(this.x-5, this.y-15);
        tank1.lineTo(this.x-10, this.y-15);
        tank1.lineTo(this.x-10, this.y-5);
        tank1.lineTo(this.x-20, this.y-5);
        tank1.lineTo(this.x-25, this.y);
        tank1.lineTo(this.x-25, this.y+15);
        tank1.lineTo(this.x+25, this.y+15);
        tank1.lineTo(this.x+25, this.y);
        tank1.lineTo(this.x+20, this.y-5);
        tank1.lineTo(this.x+10, this.y-5);
        tank1.lineTo(this.x+10, this.y-15);
        tank1.lineTo(this.x+5, this.y-15);
        tank1.lineTo(this.x+5, this.y-20);        
        tank1.closePath();
        ctx.fillStyle="#06d41e"
        ctx.fill(tank1);
    }
}



let distance = 70;
let xprime = 335;
let xalinekiller = 650;
let yalienkiller = 750;

window.onload=function (){
    canv = document.getElementById("background_animation");
    ctx = canv.getContext("2d");
    canv.width = 1300;
    canv.height = 850;
    let background = setInterval(game,1000/20);
}


function game(){
    const alien1row1 = new alien1(xprime,100);
    alien1row1.draw();
    const alien2row1 = new alien1(xprime+(distance),100);
    alien2row1.draw();
    const alien3row1 = new alien1(xprime+(2*distance),100);
    alien3row1.draw();
    const alien4row1 = new alien1(xprime+(3*distance),100);
    alien4row1.draw();
    const alien5row1 = new alien1(xprime+(4*distance),100);
    alien5row1.draw();
    const alien6row1 = new alien1(xprime+(5*distance),100);
    alien6row1.draw();
    const alien7row1 = new alien1(xprime+(6*distance),100);
    alien7row1.draw();
    const alien8row1 = new alien1(xprime+(7*distance),100);
    alien8row1.draw();
    const alien9row1 = new alien1(xprime+(8*distance),100);
    alien9row1.draw();
    const alien10row1 = new alien1(xprime+(9*distance),100);
    alien10row1.draw();

    const shelter1 = new shelter(200,600);
    shelter1.draw();
    const shelter2 = new shelter(500,600);
    shelter2.draw();
    const shelter3 = new shelter(800,600);
    shelter3.draw();
    const shelter4 = new shelter(1100,600);
    shelter4.draw();

    const alienkiller = new tank(xalinekiller,yalienkiller);
    alienkiller.draw();
}

