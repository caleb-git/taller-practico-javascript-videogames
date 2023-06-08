const canvas = document.querySelector('#game'); /////1
const game = canvas.getContext('2d');////////////////1.1

const btnUp = document.querySelector('#up');  //////////3   
const btnLeft = document.querySelector('#left');////////3 
const btnRight = document.querySelector('#right');//////3 
const btnDown = document.querySelector('#down');////////3 

let canvasSize;///////////////////////////////////////1.5
let elementSize; ////////////////////////////////////1.11

const playerPosition = {     ////////////////////////3.1                   
    x:undefined,
    y:undefined,
};

window.addEventListener('load', setCanvasSize); /////1.2
window.addEventListener('resize', setCanvasSize);////1.3

function setCanvasSize(){////////////////////////////1.4

    if(window.innerHeight > window.innerWidth){//////1.6
        canvasSize = window.innerWidth * 0.8; ///////1.7
    }else{
        canvasSize = window.innerHeight * 0.8; //////1.8
    }

    canvas.setAttribute('width', canvasSize); ///////1.9
    canvas.setAttribute('height', canvasSize); /////1.10

    elementSize = canvasSize / 10; /////////////////1.12

    startGame(); ///////////////////////////////////1.13
}

function startGame(){/////////////////////////////////2
   

    game.font= elementSize + 'px Verdana'; //////////2.1 
    game.textAlign = 'end';//////////////////////////2.2

    const map = maps[0]; ////////////////////////////2.3
    const mapRows = map.trim().split('\n'); /////////2.4
    const mapRowCols = mapRows.map(row => row.trim().split('')); /////2.5
    console.log(map, mapRows, mapRowCols); ///////////////////////////2.6

    
    game.clearRect(0,0, canvasSize, canvasSize); //////////////////////3.2    

    mapRowCols.forEach((fila, filaI) => { ////////////////////////////2.7
        fila.forEach((columna, columnaI) => { ////////////////////////2.8
            const emoji = emojis[columna]; ///////////////////////////2.9
            const posX = elementSize * (columnaI + 1); ///////////////2.10
            const posY = elementSize * (filaI + 1); //////////////////2.11


                                            
            if(columna == 'O'){ //////////////////////////////////////3.3
                if(!playerPosition.x && !playerPosition.y){ //////////3.4
                    playerPosition.x = posX; /////////////////////////3.5
                    playerPosition.y = posY; /////////////////////////3.6
                    console.log({playerPosition}); ///////////////////3.7
                }
            }


            game.fillText(emoji, posX, posY); ///////////////////////2.12


            console.log({fila, filaI, columna, columnaI}); //////////2.13
        });
    });

    /*for(let row = 1; row <= 10; row++){
        for(let col = 1; col <= 10; col++){
            game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementSize * col, elementSize * row);
        }
    }*/
  
    movePlayer();  //////////////////////////////////////////////////3.8                                   
}

//clase9 mover jugador

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y); //4
}

window.addEventListener('keydown', moveByKeys); //////////////////////////4.1

btnUp.addEventListener('click', moveUp); /////////////////////////////////4.2
btnLeft.addEventListener('click', moveLeft);//////////////////////////////4.2
btnRight.addEventListener('click', moveRight); ///////////////////////////4.2
btnDown.addEventListener('click', moveDown); ////////////////////////////4.2


function moveByKeys(event){
    /*console.log(event);*/    //////////////////////////////////////////4.3

    if(event.key == 'ArrowUp'){ //////////////////////////////////////////4.4
        moveUp(); ///////////////////////////////////////////////////////4.4
    }else if(event.key == 'ArrowLeft'){ //////////////////////////////////4.4
        moveLeft();
    }else if(event.key == 'ArrowRight'){ ////////////////////////////////4.4
        moveRight();
    }else if(event.key == 'ArrowDown'){ //////////////////////////////////4.4
        moveDown();
    }
}


function moveUp(){
    console.log('Me quiero mover hacia arriba');

    if((playerPosition.y - elementSize) < elementSize){ ////////////////////4.5
        console.log('out');
    }else{
        playerPosition.y -= elementSize; //////////////////////////////////4.6
        startGame(); //////////////////////////////////////////////////////4.6
    }
    
}

function moveLeft(){
    console.log('Me quiero mover hacia la izquierda');

    if((playerPosition.x - elementSize) < elementSize){ ////////////////////4.5
        console.log('out');
    }else{
        playerPosition.x -= elementSize; //////////////////////////////////4.6
        startGame(); //////////////////////////////////////////////////////4.6
    }
}

function moveRight(){
    console.log('Me quiero mover hacia la derecha');

    if((playerPosition.x + elementSize) > canvasSize){ ////////////////////4.7
        console.log('out');
    }else{
        playerPosition.x += elementSize; /////////////////////////////////4.8
        startGame(); /////////////////////////////////////////////////////4.8
    }
}

function moveDown(){
    console.log('Me quiero mover hacia abajo');

    if((playerPosition.y + elementSize) > canvasSize){ //////////////////4.7
        console.log('out');
    }else{
        playerPosition.y += elementSize; ////////////////////////////////4.8
        startGame(); ////////////////////////////////////////////////////4.8
    }
}