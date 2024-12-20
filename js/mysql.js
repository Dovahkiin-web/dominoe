//DEFINIR BOTONES
//Botones del menu
const menu = [
    "JUGAR",
    "OPCIONES",
    "PUNTUACIONES",
    "CREDITOS"
]

//Botones de la opcion OPCIONES
window.opciones = [
    "IDIOMA",
    "ESTILO"
]

//Botones de la opcion PUNTUACIONES
window.puntuaciones = [
    "DE MAYOR A MENOR",
    "DE MENOR A MAYOR"
]

//Contenido de los creditos
window.creditos = {
    nombre: "Aaron Ferreira Otero",
    juego: "Dominó",
    lenguajes: "HTML, CSS, JavaScript y PHP",
    libreria: "JQuery",
    bd: "MySql"
}

//FIN DEFINIR BOTONES

//Ejemplo para los puntajes, esto tiene que estar en Base de Datos
window.puntos = {
    jugadores: [
        {
          usuario: "Jugador1",
          puntuacion: "100"
        },
        {
          usuario: "Jugador2",
          puntuacion: "200"
        },
        {
          usuario: "Jugador3",
          puntuacion: "150"
        }
      ]
}