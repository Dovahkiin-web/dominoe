// Definir las piezas del dominó
const dominoPieces = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
    [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
    [3, 3], [3, 4], [3, 5], [3, 6],
    [4, 4], [4, 5], [4, 6],
    [5, 5], [5, 6],
    [6, 6]
];

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

window.puntos = {
    jugadores: [
        {
          usuario: "Jugador1",
          puntuacion: 100
        },
        {
          usuario: "Jugador2",
          puntuacion: 200
        },
        {
          usuario: "Jugador3",
          puntuacion: 150
        }
      ]
}