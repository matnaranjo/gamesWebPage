window.onload= function(){
    canv = document.getElementById("snakecanvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game, 1000/10);
}

// direccion en X y Y 
xv=yv=0;
// direccion actual
dir = 0;
// posicion inicial serpiente
px=200; py=480;

// posicion inicial alimento
ax=240; ay=240;

// tamaño del paso
sstep=20;
sstep2=sstep-1;

//vector tamaño de la serpiente
tamax=[];
tamay=[];
//Tamaño inicial
init=5;

//longitud
long=init;

// Puntuacion
punt = 0;





function game() {

    // Da color a todo el canvas para cada repeticion
    ctx.fillStyle="#9dc805";
    ctx.fillRect(0,0,canv.width,canv.height);

    // crea el alimento en pos inicial 
    
    if (long==init){
        ax=240; ay=240;
    }

    // serpiente consume comida
    if (tamax[long-1]==ax && tamay[long-1]==ay){
        ax= (Math.floor(Math.random()*24))*20;
        ay= (Math.floor(Math.random()*24))*20;
        long++;
        punt++;
    }

    let food = new Path2D();
    food.lineTo(ax,(ay+(sstep2/2)));
    food.lineTo((ax+(sstep2/2)),(ay+sstep2));
    food.lineTo((ax+(sstep2)),(ay+(sstep2/2)));
    food.lineTo((ax+(sstep2/2)),ay);
    food.closePath();
    ctx.fillStyle="#001600";
    ctx.fill(food)
    
        
    // Crea el elemento en la posicion inicial 
    if (dir == 0){
        for (var j=0; j<long; j++){
            tamax[j] =(px+sstep)-(sstep*(long-j));
            tamay[j] =(py);
        }
        for (var k=0; k<long;k++){
            ctx.fillStyle="#001600";
            ctx.fillRect(tamax[k],tamay[k],sstep-1,sstep-1);
        }
    }
   

    // movimiento de la serpiente
    if (dir!=0){

        px+= (xv*sstep);
        py+= (yv*sstep);
        tamax.push(px);
        tamay.push(py);

        if (tamay.length>long){
            tamay.shift();
            tamax.shift();
        }
        
    }

    // dibujada de la serpiente
    if (dir!=0){
        console.log(xv,yv)
        console.log(tamax, tamay)
        for (var i=0; i<long;i++){
            ctx.fillStyle="#001600";
            ctx.fillRect(tamax[i],tamay[i],sstep-1,sstep-1);
        }
    }

    // Si la serpiente choca con pared
    if (((tamax[long-1]==-20)&&(xv-1)) || ((tamay[long-1]==-20)&&(yv==-1))|| ((tamax[long-1]==500)&&(xv==1)) || ((tamay[long-1]==500)&&(yv==1))){
        dir=0;
        long=init;
        px=240; py=480;
        tamax=[];
        tamay=[];
        xv=yv=0;
        ax=240; ay=240;
        punt=0;
    }

    // Si la serpiente choca con ella misma
    for (var l=0;l<long-1;l++)
        if ((tamax[l]==tamax[long-1])&&(tamay[l]==tamay[long-1])){
            dir=0;
            long=init;
            px=240; py=480;
            tamax=[];
            tamay=[];
            xv=yv=0;
            ax=240; ay=240;
            punt=0;
            break;
        }

    document.querySelector("#marcador").innerHTML=punt;
}


function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            if (dir!=3 && dir!=0){
                dir = 1;
                xv=-1;yv=0;
            }
            break;
        case 38:
            if (dir!=4){
                dir=2;
                xv=0;yv=-1;
            }
            break;
        case 39:
            if (dir!=1){
                dir=3;
                xv=1;yv=0;
            }
            break;
        case 40:
            if (dir!=2){
                dir=4;
                xv=0;yv=1;
            }
            break;
    }
}






