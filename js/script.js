// Función para cargar el menú
function cargarMenu() {

    //Escribimos el codigo html, que se va a crear
    let texto = `
    <div class="titulo-container">
        <img src="./assets/imagenes/domino.png" height="200" width="500">
    </div>
    <div id="menu_container" class="game-container">
        <h1>MENU</h1>
        <hr>
        <span id="flecha_boton" style="display: none;">
            <img class="flecha-menu" src="./assets/imagenes/flecha-menu.png" height="32" width="32" onclick="volverMenu();">
        </span>
        <div id="div_menu" class="controles"></div>
    </div>`;

    //Escribimos el codigo html, para la parte del juego
    let textoJuego = `
    <div id="juego_menu" class="juego-menu">
        <div class="botones-juego-menu">
            <button id="boton_volver" onclick="salirAlMenu();">MENU</button>
            <button id="boton_guardar" onclick="">GUARDAR</button>
        </div>
        <div id="puntuacion" class="puntuacion">000000</div>
        <div id="tiempo" class="tiempo">00:00</div>
    </div>
    <div id="tablero" class="tablero"></div>
    <div id="display-fichas" class="juego-fichas"></div>`;

    // Insertar los contenidos generados en los main
    $('#pantalla_menu').html(texto);
    $('#juego').html(textoJuego);

    // Generar los botones del menú
    generarBotones();
}

// Función que genera los botones del menú
function generarBotones() {
    let texto = '';

    //Boton de jugar.
    texto += `<button id="${menu[0].toLocaleLowerCase().replace(/\s+/g, '')}" onclick="cargarTablero()">${menu[0]}</button>`;

    //Boton de opciones.
    texto += `<button id="${menu[1].toLocaleLowerCase().replace(/\s+/g, '')}" onclick="cargarOpciones()">${menu[1]}</button>`;

    //Boton de puntuaciones.
    texto += `<button id="${menu[2].toLocaleLowerCase().replace(/\s+/g, '')}" onclick="cargarPuntuaciones()">${menu[2]}</button>`;

    //Boton de creditos.
    texto += `<button id="${menu[3].toLocaleLowerCase().replace(/\s+/g, '')}" onclick="cargarCreditos()">${menu[3]}</button>`;

    // Insertar los botones en el contenedor
    $('#div_menu').html(texto);
}

//FUNCIONES PARA LOS BOTONES DEL MENU
// Función para el boton de JUGAR
function cargarTablero() {

    //Escondemos el menu
    $('#pantalla_menu').hide();

    //Mostramos el tablero de juego
    $('#juego').show();
}

//Funcion para el boton de OPCIONES
function cargarOpciones() {
    let texto = `
    <div id="formOpciones" class="formOpciones">
        <form id="formIdioma"></form>
        <form id="formEstilo"></form>
    </div>`;

    //Insertar los botones o contenido en el contenedor, dependiendo de la opcion elegida
    $('#div_menu').html(texto);

    let textoFormIdioma = `
    <p>IDIOMA</p>
        <label>
            <input type="radio" name="idioma" value="espanol" checked>
            ESPAÑOL
        </label><br>

        <label>
            <input type="radio" name="idioma" value="ingles">
            INGLÉS
        </label><br>

        <label>
            <input type="radio" name="idioma" value="gallego">
            GALLEGO
        </label><br>`;

    $('#formIdioma').html(textoFormIdioma);

    let textoFormEstilo = `
    <p>ESTILO</p>
    <div class="estilos">
        <div id="porDefecto" class="activo" onclick="cambiarEstilo(this);"></div>
        <div id="oscuro" onclick="cambiarEstilo(this);"></div>
        <div id="claro" onclick="cambiarEstilo(this);"></div>
    </div>`;

    $('#formEstilo').html(textoFormEstilo);

    // Mostrar la flecha para volver al menu
    $('#flecha_boton').show();
}

function cambiarEstilo(elemento) {
    // Primero, quitamos la clase 'activo' de todos los divs
    $('.estilos > div').removeClass('activo');
    
    // Luego, añadimos la clase 'activo' al div que se ha clickeado
    $(elemento).addClass('activo');

    // Cambiamos el background-image del body al background del div clickeado
    var backgroundImage = $(elemento).css('background-image');
    $('body').css('background-image', backgroundImage);
}

//Funcion para el boton PUNTUACIONES
function cargarPuntuaciones() {
    let texto = `
    <div class="puntuaciones">
        <div>
            <p>MAYOR A MENOR</p>
            <div id="puntuacionesMayorMenor" class="puntuaciones-div">
            </div>
        </div>
        <div>
            <p>MENOR A MAYOR</p>
            <div id="puntuacionesMenorMayor" class="puntuaciones-div"></div>
        </div>
    </div>
    `;

    //Insertar los botones o contenido en el contenedor, dependiendo de la opcion elegida
    $('#div_menu').html(texto);

    let textoJugadores = '';

    //Jugadores
    for (let i = 0; i < window.puntos.jugadores.length; i++) {
        textoJugadores += `<p>${window.puntos.jugadores[i].usuario}: ${window.puntos.jugadores[i].puntuacion}</p>`;
    }

    $('#puntuacionesMayorMenor').html(textoJugadores);

    // Mostrar la flecha para volver al menu
    $('#flecha_boton').show();
}

//Funcion para el boton CREDITOS
function cargarCreditos() {
    let texto = `
    <div class="creditos">
        <h3>Nombre: ${window.creditos.nombre}</h3>
        <h3>Juego: ${window.creditos.juego}</h3>
        <h3>Lenguajes: ${window.creditos.lenguajes}</h3>
        <h3>Librerías: ${window.creditos.libreria}</h3>
        <h3>Base de Datos: ${window.creditos.bd}</h3>
    </div>`;

    //Mostrar la flecha para volver al menu
    $('#flecha_boton').show();

    //Insertamos el contenido en el contenedor
    $('#div_menu').html(texto);
}
//FIN DE LAS FUNCIONES PARA LOS BOTONES DEL MENU

// Función de la flecha para volver al menú
function volverMenu() {
    
    //Llamamos a la funcion, que volvera a colocar los botones del menu
    generarBotones();

    //Escondemos la flecha para volver al menu
    $('#flecha_boton').hide();
}

//Funcion del boton volver mientras el juego se esta ejecutando
function salirAlMenu() {

    //Llamamos a la funcion, que volvera a colocar los botones del menu
    generarBotones();

    //Escondemos la flecha para volver al menu
    $('#flecha_boton').hide();

    //Mostramos el menu
    $('#pantalla_menu').show();

    //Escondemos el juego
    $('#juego').hide();
}

//Funcion guardar puntuacion, el nombre del usuario, el tiempo transcurrido en la partida y que jugador ganó.
function guardarResultados(puntuacion, usuario, tiempoTranscurrido, jugGanador) {

}

//Funcion cargar el idioma escogido
function cargarIdioma() {

}

//Funcion puntuaciones de MAYOR a MENOR
function cargarDEMAYORAMENOR() {

}

//Funcion puntuaciones de MENOR a MAYOR
function cargarDEMENORAMAYOR() {

}
