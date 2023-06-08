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
