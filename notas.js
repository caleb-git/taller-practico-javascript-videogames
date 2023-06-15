ctrl + F = buscar

1 Traerse el canvas del index.html
1.1 Elegir el contexto del canvas, escojemos '2d'.
1.2 Crear evento al cargar la pagina ('load') ejecutar la función setCanvasSize.
1.3 Crear evento al cambiar tamaño de pantalla o girar pantalla ('reSize') ejecutar la función setCanvasSize.
1.4 Funcion canvasSize.
1.5 Creamos una variable Universal llamada canvasSize.
1.6 Si la altura de la pantalla es Mayor que el ancho de la pantalla.
1.7 La medida del canvas sera lo que mida el width o ancho pero al 80%.
1.8 Sino la medida del canvas sera lo que mida el height o altura pero al 80%.
1.9 le atribuyes su medida al canvas en width o ancho.
1.10 le atribuyes su medida al canvas en height o altura.
1.11 Declarar variable de cada cuadrito o elementtttto
1.12 Meter 10 elementos en el canva.
1.13 Ejecutas la funcion startGame.

//Clase #7
2 Funcion startGame();
2.1 Tamaño de cada elemento en pixeles y tipo de leeetra.
2.2 Alinear 'end', significa la ultima parte del cuadrito.
2.3 Traerse el mapa que esta en maps.js
2.4 Limpiar espacios con trim y separar cada salto de linea con split '\n'. Y lo haces Array.
2.5 Haces un array de array, limpias espacios con trim y lo separas por elementooo con split ''.
2.6 Ver tus arrays

Comentario:
arr.forEach(nombre, index, array) => {
    // tu iterador
};

//Clase 7 minuto 15:50 resumen
2.7 Recorres el array mapRowCols con el forEach y le das 2 parametros: nombre='fila' e indice.
2.8 Recorres el array 'fila' con el forEach y le das 2 parametros: nombre='columna' e indice.
2.9 Sacar el emoji del Objeto [Emojis] que esta en maps.js 
2.10 Coordenada para X: elementSize * indice 'que siempre es 0' + 1 'para que lo mande a' 'end'
2.11 Coordenada para y: elementSize * indice 'que siempre es 0' + 1 'para que lo mande a' 'end'
     (2.10 y 2.11 estamos diciendo que el cuadrito de extienda a 'end')

Comentario Syntaxis:
fillText(text, x, y)

2.12 Renderizamos nuestro mapa sustituyendo la syntaxis de filltext.
2.13 Ver filas y columnas del array


//Clase #8
3 Traerte los botones del index.html : arriba, izquierda, derecha, abajo
3.1 Creas la posicion del Jugador, le pones undefined para darle coordenadas despues.

Comentario Syntaxis: El clearRect borra los pixeles en un area rectangular
clearRect(x, y, width, height);

x= coordenada x inicial
y= coordenada y inicial
width= ancho del rectangulo
height= altura rectangulo

3.2 Antes de renderizar con forEach, borras todo
3.3 Parametro = Si columna es un 'O': '🚪'.
3.4 Si mi playerPosition que hice en el (3.1) no esta definido aún.
3.5 Le ponemos coordenada en x
3.6 Le ponemos coordenada en y
3.7 Ver mi player position
3.8 Ejecuta la funcion movePlayer()

4 Renderiza mi jugador con fillText

4.1 Crea el evento presionar tecla 'keydown' y que haga la funcion moveByKeys
4.2 Crea evento click para los 4 botones arriba, izquierda, derecha, abajo

4.3 Para ver en console que tecla estas presinando. Para sacar la key de la tecla.

4.4 Si el evento.key es 'ArrowUp' 'ArrowLeft' 'ArrowRight' 'ArrowDown' ejecuta la funcion
    moveUp(), moveleft(), moveright(), movedown()
4.5 Mover Arriba y Abajo: Tomando en cuenta que el elementSize inicia en coordenada 0,0.
    Si la posicion de mi playerPosition en 'y' o 'x' le resto el elementSize y es menor que 0. Di 'out'.
4.6 Mientras sea mayor a 0, ejecuta la funcion startGame.
4.7 Mover Derecha y Abajo: Tomando en cuenta que el canvaSize inicia en 0 y se edxtiende como rectangulo.
    Si la posicion de mi playerPosition en 'y' o 'x' le sumo el elementSize y es 
    mayor a lo que mide el canvaSize. Di 'out'. Se saliooo

4.8 Mientras no sea mayor al canvaSize ejecuta la funcion startGame


//Clase #12 COLISIONES
5   Creamos la posicion del regalito gift
5.1 Preguntar sí nos encontramos una 'I' que es un regalito'🎁',
5.2 PosX significa renderizar en esa posicion de x. 
5.3 PosY significa renderizar en esa posicion de y.
    la coordenada quedamos en x,y es la parte 'end' de cada elementooo o cuadrito,
    estamos buscando que choquen o coalicionen.
5.4 Sí coincide la posicion de mi player y mi regalito
    ponle toFixed(decimales), porque a veces no funciona por un decimalito el tamaño de pantalla.
5.5 Parametro para meterlo al if()
5.6 Parametro
5.7 Si el parametro es 'true' o verdad escribe 'subiste de nivel en consola'.

//Clase #13

6.0   Creas un array para meter todas las coordenadas de todas la bombas
6.1 Si te encuentras una bomba o 'X'
6.2 Trackea/rastrea todas las coordenadas de bomba o 'X' AL ARRAY QUE SE CREO EN EL 6.0
6.3 Trakea todas la x: va ser igual posX (osea la coordenada que se encuentra) de todas las bombas
    Trakea todas la y: va ser igual posY (osea la coordenada que se encuentra) de todas las bombas
6.4 Limpiamos el array 6.0 porque cada vez que movemos la calaberita vuelve arecorrer el la funcion
    startGame(); limpiamos para que vuelva trakear todas las bombas.
6.5 Creamos una constante para saber si choca nuestra calaberita con una bomba. Con .find encontramos
    al array de enemyPositions que son las bombas y vamos a buscar los guiente:
6.6 Sí la coordenada de alguna bomba en 'x' es igual a la coordenda de mi jugador o playerPosition en 'x'
    llamalo enemyCollisionX. Ponle toFixed(3) paraq ue solo te de 3 decimales al trakear coordenadas, 
    porque la pantalla se mue ve.
6.7 Sí la coordenada de alguna bomba en 'y' es igual a la coordenda de mi jugador o playerPosition en 'y'
    llamalo enemyCollisionY. Ponle toFixed(3) paraq ue solo te de 3 decimales, al trakear coordenadas
    porque la pantalla se mue ve.
6.8 Sí enemyCollisionX y enemyCollisionY son iguales mi playerPosition, Regresamelos y por
    lo tato mi enemyCollision del 6.5 es, true.
6.9 Si enemyCollision es 'True' del 6.8
6.10 Escribe 'chocaste con un enemigo'


#Clase14

7.0 Si el parametro es 'true' ejecuta la funcion levelWin() o subir nivel.
7.1 Creo la funcion levelWin()
7.2 Creo la variable level = 0, mis mapas inician en 0.
7.3 A mi variable le sumo 1, para que cambie de mapa cada vez que toque el regalito.
7.4 Cuando suba de nivel o toque regalito vuelva a ejecutar la funcion startGame()
7.5 Antes era const map = maps[0] y ahora se remplazo el o por level asi. const map = maps[level];
7.6 Si ya se terminaron los mapas
7.7 Ejecuta la funcion gameWin() y return significa = detener startGame(), para que ya no se
    ejecuten las funciones 
7.8 Creo la funcion gameWin()

#Clase 15

8.0 Si colisiona ejecuta la funcion levelFail
8.1 Vidas por juego
8.2 Cada vez que choque es una vida MediaElementAudioSourceNode; lives = lives -1
8.3 En cuanto choque la posicion x-y ponle undefined y ejecuta startGame() para que vuelva iniciar.
    en 3.4 se le vuelve a dar las coordenadas de inici000.
8.4 Si las vidas es menor a 0 o es igual a 0
8.5 Regresalo al nivel 0 y dale 3 vidas otra vez.

#Clase 16

9.0 Traerte el parrafo lives del html, donde se van mostrar las vidas
9.1 Aqui le decimos que ejecute la funcion showlives(), que sea despues del return del 7.7
9.2 Creas la funcion showlives()
9.3 La palabra Array es un constructor de arrays, estamos pidiendo que haga un array
 de las videas o lives 8.1, y con .fill le estamos pidiendo que lo rellene con corazones.
9.4 Ver los corazones en console.log
9.5 Con .forEach estamos pidiendo que recorra el array de corazones, y por cada heart ó elemento
    que se encuentre, que en el parrafo del html 'spanLives' escriba el elemento o corazon 
    que se encontro.
9.6 Antes que recorra el array 9.5 le vamos apedir que se limpie.

#Clase 17 Sistema de Tiempos

Metodosss
*El 'hola' queremos que escriba cada segundo por 1000 milisegundos:
setInterval(() => console.log('hola'), 1000);

*El 'hola' queremos que escriba una vez pero hasta los 1000 milisegundos:
setTimeout(() => console.log('hola'), 1000);

*Detener el setInterval o contador con clearInterval:
const contador = setInterval(() => console.log('hola'), 1000);
clearInterval(contador);

*Date.now es para imprimir en milisegundos la hora que es actualmente:
const timeStart = Date.now(); ó

Date.now() - timeStart; 

10.0 Te traes el parrafo time del html
10.1 Haces una variable sin valor 'timeStart'
10.2 Sino tiene valor le asignas el tiempo de ahora.
10.3 Haces un afuncion especifica pra el tiempo 'showTime'
10.4 Que escriba en el parrafo del HTML el tiempo de ahora - startTime de 10.1

10.5 Haces una variable sin valor 'timeInterval'
10.6 Que repita la funcion showTime de 10.3 por 100 milisegundos
10.7 Si gana el juego detener el tiempo con clearInterval
10.8 Si pierde el juego el 'timeStart' ponerlo undefined para que se b00rre, y 
     el mismo flujo de la  funcion de 'levelFail' de 8.3 activara la funcion startGame() otra vez y 
     volvera asignarle un  valor en 10.2, se r3pite

# Clase 19

Metodosss
*Guardar variable en el local Storage   
localStorage.setItem('patito', valor);

*Llamar la variable guardada
localStorage.getItem('patito');

*Borrar la variable guardada en el localStorage del navegador
localStorage.removeItem('patito');


11.0 Todavia NO tenemos la variable guardado en localStorage, pero vamos inciar el codigo como sí
     ya la tuvieramos. Mandamos llamar la variable 'record_time' del localStorage
11.1 Creamos la variable 'playerTime' que le cuenta el tiempo al jugador, es Date.now del presente men0ss
     Date.now del pasado 10.2 
11.2 Sí ya existe un recordTime 11.0
11.3 Si el recordTime guardado en el localStorage es mayor o igual a PlayerTime, superaste el record y guardas
     con setItem en la variable 'record_time' guaradas el nuevo valor del PlayerTime.
11.4 sino No superaste el recordTime
11.5 Sino hay 'record_time' en localStorage crealo con setItem;
11.6 Ver recordTime y PlayerTime
11.7 Te traes el parrafo del record y el resultado
11.8 Le einsertas en el HTML el letrero de que supero el record
11.9 Le einsertas en el HTML el letrero de que NO supero el record
11.10 Le einsertas en el HTML el letrero de que es la primera vez que se guarda un record.
11.12 Cuando inicie el juego ejectuta la funcion showRecord() para mostrar el record
11.13 En el HTML inserta lo que haiga en la viarible 'record_time'


#Clase 20
12.0 Cuando se active la funcion 'setCanvasSize' que es reacomodar tamaño de pantalla
    se borre la posicion de mi jugador y vuelva acomodar al activar startGame() de 1.13
12.1 Quitandole los decimales al canva size para que haga los calculos mejor


     



   
