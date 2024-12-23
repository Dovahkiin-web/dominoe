// Función para cargar el menú
function cargarMenu() {

    //CODIGO HTML PARA EL CONTENIDO
    //Escribimos el codigo html, que se va a crear
    let texto = `
    <div class="titulo-container">
        <img src="./assets/imagenes/domino.png" height="200" width="500">
    </div>
    <div id="menu_container" class="menu-container">
        <h1>MENU</h1>
        <hr>
        <span id="flecha_boton" style="display: none;">
            <img class="flecha-menu" src="./assets/imagenes/flecha-menu.png" height="32" width="32" onclick="volverMenu();">
        </span>
        <div id="div_menu" class="controles"></div>
        <div id="div_opciones" style="display: none;" class="controles"></div>
        <div id="div_puntuaciones" style="display: none;" class="controles"></div>
        <div id="div_creditos" style="display: none;" class="controles"></div>
    </div>`;

    //Escribimos el codigo html, para la parte del juego
    let textoJuego = `
    <div id="juego_menu" class="juego-menu">
        <div class="botones-juego-menu">
            <button id="boton_volver" onclick="salirAlMenu();">MENU</button>
            <button id="boton_guardar" onclick="mostrarPantallaGuardado();">GUARDAR</button>
        </div>
        <div id="puntosJugador" class="puntuacion">000000</div>
        <div id="tiempo" class="tiempo">00:00</div>
    </div>
    <div id="tablero" class="tablero">
        <div class="celda" id="celda1"></div>
        <div class="celda" id="celda2"></div>
        <div class="celda" id="celda3"></div>
        <div class="celda" id="celda4"></div>
        <div id="pantallaSeleccionarModo" class="pantallaSeleccionarModo">
            <div class="div-modoDeJuego-comoJugar">
                <div class="opcionModoDeJuego">
                    <label class="labelModoDeJuego">
                        <input type="radio" name="radio" checked/>
                        <span>1 VS 1</span>
                    </label>
                    <label class="labelModoDeJuego">
                        <input type="radio" name="radio"/>
                        <span>1 VS IA</span>
                    </label>
                </div>
                <div class="div-como-jugar">
                    <b id="textoComoJugar">¿COMO JUGAR?</b>
                    <ul>
                        <li id="textoArrastrarFichas">-Arrastrar las fichas para moverlas (solamente se podran arrastrar por el tablero).</li>
                        <li id="textoRotarFichas">-Click sobre la ficha para poder rotarla.</li>
                    </ul>
                </div>
            </div>

            <div class="imagen-container">
                <img onclick="cargarModo();" src="./assets/imagenes/jugar.png" height="128">
                <label id="textoJugar" class="label-jugar">JUGAR!</label>
            </div>
        </div>
        <div id="pantallaGuardado" class="pantalla-guardado" style="display: none;">
            <span><img onclick="salirPantallaGuardado();" style="cursor: pointer;" src="./assets/imagenes/equis.png"></span>
            <div class="formGuardar">
                <div class="input-container ic1">
                    <input id="nombreUsuario" class="input" type="text" placeholder="Nombre de usuario" />
                </div>
                <button id="botonRegistrarDatos" onclick="guardarResultado();" type="text" class="submit">REGISTRAR DATOS</button>
            </div>
        </div>
    </div>
    <div id="display-fichas" class="juego-fichas"></div>`;

    //Contenido dentro del menu de opciones
    let textoOpciones = `
    <div id="formOpciones" class="formOpciones">
        <form id="formIdioma"></form>
        <form id="formEstilo"></form>
    </div>`;

    //Contenido de la opcion del idioma en el menu de opciones
    let textoFormIdioma = `
    <p id="idioma" >IDIOMA</p>
        <label>
            <input type="radio" name="idioma" value="espanol" checked>
            <span>ESPAÑOL</span>
        </label><br>

        <label>
            <input type="radio" name="idioma" value="ingles">
            <span>INGLÉS</span>
        </label><br>

        <label>
            <input type="radio" name="idioma" value="gallego">
            <span>GALLEGO</span>
        </label><br>`;
    
    //Contenido de la opcion de estilo en el menu de opciones
    let textoFormEstilo = `
    <p id="estilo" >ESTILO</p>
    <div class="estilos">
        <div id="porDefecto" class="activo" onclick="cambiarEstilo(this);"></div>
        <div id="oscuro" onclick="cambiarEstilo(this);"></div>
        <div id="claro" onclick="cambiarEstilo(this);"></div>
    </div>`;

    //Contenido de la opcion de puntuaciones
    let textoPuntuaciones = `<div class="puntuaciones">
        <div>
            <p id="mayorAMenor" >MAYOR A MENOR</p>
            <div id="puntuacionesMayorMenor" class="puntuaciones-div">
            </div>
        </div>
        <div>
            <p id="menorAMayor" >MENOR A MAYOR</p>
            <div id="puntuacionesMenorMayor" class="puntuaciones-div"></div>
        </div>
    </div>`;

    //Contenido de la opcion de creditos
    let textoCreditos = `<div class="creditos">
        <h3 id="creditosNombre" >NOMBRE: ${window.creditos.nombre}</h3>
        <h3 id="creditosJuego" >JUEGO: ${window.creditos.juego}</h3>
        <h3 id="creditosLenguajes" >LENGUAJES: ${window.creditos.lenguajes}</h3>
        <h3 id="creditosLibrerias" >LIBRERIAS: ${window.creditos.libreria}</h3>
        <h3 id="creditosBaseDatos" >BASE DE DATOS: ${window.creditos.bd}</h3>
    </div>`;

    //FIN DEL CODIGO HTML PARA LOS CONTENIDOS
    
    // Insertar los contenidos generados en los main y divs (Es importante el orden).
    //Contenido del menu
    $('#pantalla_menu').html(texto);

    //Contenido del tablero de juego
    $('#juego').html(textoJuego);

    //Contenido de las opciones
    $('#div_opciones').html(textoOpciones);
    $('#formIdioma').html(textoFormIdioma);
    $('#formEstilo').html(textoFormEstilo);

    //Contenido de las puntuaciones (Esto es una prueba de como se veria, hay que almacenar esto en Base de Datos y llamar con PHP)
    $('#div_puntuaciones').html(textoPuntuaciones);

    //Contenido de los creditos
    $('#div_creditos').html(textoCreditos);
    //FIN DE INSERTAR CONTENIDO

    // Generar los botones del menú en español por defecto
    generarBotones(window.idiomas.espanol);
    
    //Colocar las fichas del modo de juego
    colocarTodasLasFichas();
}