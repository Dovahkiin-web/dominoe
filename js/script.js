// Función que genera los botones del menú dependiendo del idioma
function generarBotones(idioma) {
    let texto = '';

    //COMO se ve, solo cambiamos el texto, los IDs, seran en español, ya que el usuario no lo verá y asi no cambiarán cada vez que el usuario cambie de idioma
    //Boton de jugar.
    texto += `<button id="jugar" onclick="cargarTablero()">${idioma.jugar}</button>`;

    //Boton de opciones.
    texto += `<button id="opciones" onclick="cargarOpciones()">${idioma.opciones}</button>`;

    //Boton de puntuaciones.
    texto += `<button id="puntuacion" onclick="cargarPuntuaciones()">${idioma.puntuaciones}</button>`;

    //Boton de creditos.
    texto += `<button id="creditos" onclick="cargarCreditos()">${idioma.creditos}</button>`;

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

    //Escondemos el menu, y mostramos el menu de opciones (esto se hace para que al moverse entre el menu, al no sobreescribir el div de las opciones, estas quedan en display none, por lo que si hacemos algun cambio en las opciones, estas se mantendran.)
    $('#div_menu').hide();
    $('#div_opciones').show();

    // Mostrar la flecha para volver al menu
    $('#flecha_boton').show();
}

//Funcion para cambiar el estilo del fondo de la pagina
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
    let textoJugadores = '';

    //Jugadores
    for (let i = 0; i < window.puntos.jugadores.length; i++) {
        textoJugadores += `<p>${window.puntos.jugadores[i].usuario}: ${window.puntos.jugadores[i].puntuacion}</p>`;
    }

    $('#puntuacionesMayorMenor').html(textoJugadores);
    $('#puntuacionesMenorMayor').html(textoJugadores);

    //Escondemos el menu, y mostramos el menu de opciones (esto se hace para que al moverse entre el menu, al no sobreescribir el div de las opciones, estas quedan en display none, por lo que si hacemos algun cambio en las opciones, estas se mantendran.)
    $('#div_menu').hide();
    $('#div_puntuaciones').show();

    // Mostrar la flecha para volver al menu
    $('#flecha_boton').show();
}

//Funcion para el boton CREDITOS
function cargarCreditos() {

    //Escondemos el menu, y mostramos el menu de opciones (esto se hace para que al moverse entre el menu, al no sobreescribir el div de las opciones, estas quedan en display none, por lo que si hacemos algun cambio en las opciones, estas se mantendran.)
    $('#div_menu').hide();
    $('#div_creditos').show();

    // Mostrar la flecha para volver al menu
    $('#flecha_boton').show();
}
//FIN DE LAS FUNCIONES PARA LOS BOTONES DEL MENU

// Función de la flecha para volver al menú
function volverMenu() {

    //Escondemos el menu de opciones, puntuaciones y creditos, por si el usuario entró en alguna de ellos
    $('#div_opciones').hide();
    $('#div_puntuaciones').hide();
    $('#div_creditos').hide();

    //Mostramos el menu normal
    $('#div_menu').show();

    //Escondemos la flecha para volver al menu
    $('#flecha_boton').hide();
}

//Funcion del boton volver mientras el juego se esta ejecutando
function salirAlMenu() {

    //Escondemos la flecha para volver al menu
    $('#flecha_boton').hide();

    //Mostramos el menu
    $('#pantalla_menu').show();

    //Escondemos el juego
    $('#juego').hide();

    //Volver a colocar las fichas por si se movieron
    colocarTodasLasFichas();

    //Mostramos la opcion del modo de juego
    $('#pantallaSeleccionarModo').show();
}

//Funcion para mostrar la pantalla de guardado
function mostrarPantallaGuardado() {
    $('#pantallaGuardado').show();
}

function salirPantallaGuardado() {
    $('#pantallaGuardado').hide();
}

//Funcion guardar puntuacion, el nombre del usuario, el tiempo transcurrido en la partida y que jugador ganó.
function guardarResultado() {
    // Obtener el valor del input usando jQuery
    var nombreUsuario = $('#nombreUsuario').val();
    let puntos = $('#puntosJugador').text();

    if (nombreUsuario == '') {
        alert("Escriba un nombre de usuario");
    } else {
        // Agregar el jugador a la lista
        window.puntos.jugadores.push({
            usuario: nombreUsuario,
            puntuacion: puntos
        });

        $('#nombreUsuario').val('');

        salirPantallaGuardado();
    }
}