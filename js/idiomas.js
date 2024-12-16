//El texto que varia de los idiomas tambien estará en Base de Datos o en archivo JSON
window.idiomas = {
    espanol: {
      jugar: "JUGAR",
      opciones: "OPCIONES",
      puntuaciones: "PUNTUACIONES",
      creditos: "CREDITOS",
      idioma: "IDIOMA",
      estilo: "ESTILO",
      mayormenor: "MAYOR A MENOR",
      menormayor: "MENOR A MAYOR",
      nombre: `NOMBRE: ${window.creditos.nombre}`,
      juego: `JUEGO: ${window.creditos.juego}`,
      lenguajes: `LENGUAJES: ${window.creditos.lenguajes}`,
      librerias: `LIBRERIAS: ${window.creditos.libreria}`,
      basedatos: `BASE DE DATOS: ${window.creditos.bd}`,
      guardar: "GUARDAR",
      opcionespanol: "ESPAÑOL",
      opcioningles: "INGLÉS",
      opciongallego: "GALLEGO"
    },
  
    ingles: {
      jugar: "PLAY",
      opciones: "OPTIONS",
      puntuaciones: "SCORE",
      creditos: "CREDITS",
      idioma: "LANGUAGE",
      estilo: "STYLE",
      mayormenor: "HIGHEST TO LOWEST",
      menormayor: "LOWEST TO HIGHEST",
      nombre: `NAME: ${window.creditos.nombre}`,
      juego: `GAME: ${window.creditos.juego}`,
      lenguajes: `LANGUAJES: ${window.creditos.lenguajes}`,
      librerias: `LIBRARIES: ${window.creditos.libreria}`,
      basedatos: `DATABASE: ${window.creditos.bd}`,
      guardar: "SAVE",
      opcionespanol: "SPANISH",
      opcioningles: "ENGLISH",
      opciongallego: "GALICIAN"
    },
  
    gallego: {
      jugar: "XOGAR",
      opciones: "OPCIONS",
      puntuaciones: "PUNTAXE",
      creditos: "CREDITOS",
      idioma: "IDIOMA",
      estilo: "ESTILO",
      mayormenor: "MAIOR A MENOR",
      menormayor: "MENOR A MAIOR",
      nombre: `NOME: ${window.creditos.nombre}`,
      juego: `XOGO: ${window.creditos.juego}`,
      lenguajes: `LINGUAXES: ${window.creditos.lenguajes}`,
      librerias: `LIBRERIAS: ${window.creditos.libreria}`,
      basedatos: `BASE DE DATOS: ${window.creditos.bd}`,
      guardar: "GARDAR",
      opcionespanol: "ESPAÑOL",
      opcioningles: "INGLÉS",
      opciongallego: "GALEGO"
    }
  }

  //Cuando el documento este ready, osea cuando este listo, ejecuta el siguiente codigo
$(document).ready(function(){

    // Delegación de eventos para inputs "radio" de idioma
    $(document).on('change', 'input[name="idioma"]', function() {

        // Obtener el valor del radio seleccionado
        let idiomaSeleccionado = $('input[name="idioma"]:checked').val();
        let idioma = window.idiomas[idiomaSeleccionado];

        // Actualizar los botones con el idioma seleccionado
        generarBotones(idioma);

        //Actualizar el texto de determinadas etiquetas
        $('#boton_guardar').html(idioma.guardar);
        $('#idioma').html(idioma.idioma);
        $('input[value="espanol"]').html(idioma.opcionespanol);
        $('input[value="ingles"]').html(idioma.opcioningles);
        $('input[value="gallego"]').html(idioma.opciongallego);
        $('#estilo').html(idioma.estilo);
        $('#mayorAMenor').html(idioma.mayormenor);
        $('#menorAMayor').html(idioma.menormayor);
        $('#creditosNombre').html(idioma.nombre);
        $('#creditosJuego').html(idioma.juego);
        $('#creditosLenguajes').html(idioma.lenguajes);
        $('#creditosLibrerias').html(idioma.librerias);
        $('#creditosBaseDatos').html(idioma.basedatos);

    });
});