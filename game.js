const canvas = document.querySelector('#game'); /////1
const game = canvas.getContext('2d');////////////////1.1

const btnUp = document.querySelector('#up');  //////////3   
const btnLeft = document.querySelector('#left');////////3 
const btnRight = document.querySelector('#right');//////3 
const btnDown = document.querySelector('#down');////////3 
const spanLives = document.querySelector('#lives'); //9.0
const spanTime = document.querySelector('#time'); ///10.0
const spanRecord = document.querySelector('#record'); //11.7
const pResult = document.querySelector('#result'); //11.7

let canvasSize;///////////////////////////////////////1.5
let elementSize; ////////////////////////////////////1.11
let level = 0; //////////////////////////////////////7.2
let lives = 3; ///////////////////////////////////////8.1


let timeStart; //////////////////////////////////////10.1
let timePlayer; ///////////////////////////////////////////////////////////////****** */
let timeInterval; ///////////////////////////////////10.5

const playerPosition = {     ////////////////////////3.1                   
    x:undefined,
    y:undefined,
};

const giftPosition = { ////////////////////////////////5
    x:undefined,
    y:undefined,
};


let enemyPositions = []; /////////////////////////////6.0




window.addEventListener('load', setCanvasSize); /////1.2
window.addEventListener('resize', setCanvasSize);////1.3

function setCanvasSize(){////////////////////////////1.4

    if(window.innerHeight > window.innerWidth){//////1.6
        canvasSize = window.innerWidth * 0.7; ///////1.7
    }else{
        canvasSize = window.innerHeight * 0.7; //////1.8
    }

    canvasSize = Number(canvasSize.toFixed(0));

    canvas.setAttribute('width', canvasSize); ///////1.9
    canvas.setAttribute('height', canvasSize); /////1.10

    elementSize = canvasSize / 10; /////////////////1.12

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame(); ///////////////////////////////////1.13
}

function startGame(){/////////////////////////////////2
   

    game.font= elementSize + 'px Verdana'; //////////2.1 
    game.textAlign = 'end';//////////////////////////2.2

    const map = maps[level]; ////////////////////////////2.3 y 7.5

    if(!map){ //////////////////////////////////////////7.6
       gameWin(); //////////////////////////////////////7.7
       return; /////////////////////////////////////////7.7
    }

    if(!timeStart){ /////////////////////////////////////10.2
        timeStart = Date.now(); /////////////////////////10.2
        timeInterval = setInterval(showTime, 100); //////10.6
        showRecord(); ///////////////////////////////////11.12
    }



    const mapRows = map.trim().split('\n'); /////////2.4
    const mapRowCols = mapRows.map(row => row.trim().split('')); /////2.5
    console.log(map, mapRows, mapRowCols); ///////////////////////////2.6

    showlives(); //////////////////////////////////////////////////////9.1

    enemyPositions = []; //////////////////////////////////////////////6.4
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
                
            } else if(columna == 'I'){ ///////////////////////////////5.1
                giftPosition.x = posX; ///////////////////////////////5.2
                giftPosition.y = posY; ///////////////////////////////5.3
            }else if(columna == 'X'){ ////////////////////////////////6.1
                enemyPositions.push({ /////////////////////////////// 6.2
                    x: posX, //////////////////////////////////////// 6.3
                    y: posY, //////////////////////////////////////// 6.3
                });
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
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3); ///5.4
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3); ///5.4
    const giftCollision = giftCollisionX && giftCollisionY; ////////////////////////////5.5

    if(giftCollision){ ////////////////////////////////////////////////////////////////5.6
        /*console.log('Subiste de nivel');*/ ////////////////////////////////////////////5.7
        levelWin(); /////////////////////////////////////////////////////////////////////7.0
    }


    const enemyCollision = enemyPositions.find(enemy => { //////////////////////////////6.5
        const enemyCollsionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3); //////6.6
        const enemyCollsionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3); //////6.7
        return enemyCollsionX && enemyCollsionY; ///////////////////////////////////////6.8
    });

    if(enemyCollision){  ///////////////////////////////////////////////////////////////6.9
        /*console.log('Chocaste contra un enemigo :( ');*/ ////////////////////////////////6.10

        levelFail(); /////////////////////////////////////////////////////////////////////8.0
        
    }


    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y); //4
}

function levelWin(){ //////////////////////////////////////////////////////////////////7.1
    console.log('Subiste de nivel');
    level++; //////////////////////////////////////////////////////////////////////////7.3
    startGame(); //////////////////////////////////////////////////////////////////////7.4
}

function levelFail(){
    console.log('Chocaste contra un enemigo :( ');
    lives--; //////////////////////////////////////////////////////////////////////////8.2


    if(lives <= 0){ ///////////////////////////////////////////////////////////////////8.4
        console.log('lives');
        level = 0; ////////////////////////////////////////////////////////////////////8.5
        lives = 3; ////////////////////////////////////////////////////////////////////8.5
        timeStart = undefined; ///////////////////////////////////////////////////////10.8
    }

   
    playerPosition.x = undefined; /////////////////////////////////////////////////////////8.3
    playerPosition.y = undefined; /////////////////////////////////////////////////////////8.3
    startGame(); /////////////////////////////////////////////////////////////////////////8.3
    
}

function gameWin(){ ////////////////////////////////////////////////////////////////7.8
    console.log('Terminaste el juego!');

    clearInterval(timeInterval); ///////////////////////////////////////////////////10.7

    const recordTime = localStorage.getItem('record_time'); ////////////////////////11.0
    const playerTime = Date.now() - timeStart; /////////////////////////////////////11.1


    if(recordTime){ ////////////////////////////////////////////////////////////////11.2
        
        if(recordTime >= playerTime){ //////////////////////////////////////////////11.3
            localStorage.setItem('record_time', playerTime); ///////////////////////11.3
            pResult.innerHTML = 'Superaste el record'; /////////////////////////////11.8
        }else{ /////////////////////////////////////////////////////////////////////11.4
            pResult.innerHTML = 'No superaste el record'; //////////////////////////11.9
        }
    }else{
        localStorage.setItem('record_time', playerTime); ////////////////////////////11.5
        pResult.innerHTML = 'Record Guardado 1° vez'; ///////////////////////////////11.10
    }
    console.log({recordTime, playerTime}); //////////////////////////////////////////11.6
}

function showlives(){ ///////////////////////////////////////////////////////////9.2
    const heartArray = Array(lives).fill(emojis['HEART']) ///////////////////////9.3
    console.log(heartArray); ///////////////////////////////////////////////////9.4

    spanLives.innerHTML = ""; //////////////////////////////////////////////////9.6
    heartArray.forEach(heart => spanLives.append(heart)); //////////////////////9.5
}

function showTime(){ //////////////////////////////////////////////////////////10.3
    spanTime.innerHTML = Date.now() - timeStart; //////////////////////////////10.4
}

function showRecord(){
    spanRecord.innerHTML = localStorage.getItem('record_time'); /////////////11.13
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