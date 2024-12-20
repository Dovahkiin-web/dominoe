// Definir las piezas del dominó
const piezasDomino = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
    [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
    [3, 3], [3, 4], [3, 5], [3, 6],
    [4, 4], [4, 5], [4, 6],
    [5, 5], [5, 6],
    [6, 6]
];

function colocarTodasLasFichas() {
    let arrayFichas = [];

    for (let i = 0; i < piezasDomino.length; i++) {
        let ficha = crearFicha(piezasDomino[i][0], piezasDomino[i][1]);
        arrayFichas.push(ficha);
    }

    let contenido = '';
    for (let i = 0; i < arrayFichas.length; i++) {
        contenido += arrayFichas[i]; // Agregar cada ficha al contenido
    }

    $('#display-fichas').html(contenido);

    $( ".ficha" ).draggable({
        //Limitar la zona de arrastre, solo queremos que se pueda colocar por el tablero.
        
    });

    // Hacer las fichas rotables, al hacer click sobre ellas
    $(".ficha").on("click", function() {
        // Obtener la rotación actual de la ficha, o 0 si no tiene una rotación guardada
        let rotacionActual = $(this).data("rotation") || 0;

        // Incrementar la rotación en 90 grados
        let nuevaRotacion = rotacionActual + 90; // Incrementa la rotación en 90 grados

        // Aplicar la nueva rotación a la ficha
        $(this).css("transform", "rotate(" + nuevaRotacion + "deg)");

        // Guardar la nueva rotación en los datos de la ficha para usarla en el siguiente click
        $(this).data("rotation", nuevaRotacion); // Guarda el nuevo valor de rotación en los datos del elemento
    });
}

function crearFicha(lado1, lado2) {
    let texto = `
    <div class="ficha">
        <div class="lado lado-1">`;
    
    for (let i = 0; i < lado1; i++) {
        texto += `<div class="punto"></div>`;
    }

    texto += `
    </div>
    <div class="divisor"></div>
        <div class="lado lado-2">`;

    for (let i = 0; i < lado2; i++) {
        texto += `<div class="punto"></div>`;
    }

    texto += `</div>
    </div>`;

    return texto;
}

function cargarModo() {
    $('#pantallaSeleccionarModo').hide();

     // Hacer las celdas droppables
     $('.celda').droppable({
        accept: '.draggable',
        drop: function(event, ui) {
          var ficha = ui.helper[0];
          var $celda = $(this);
    
          // Colocar la ficha dentro de la celda
          $(ficha).css({
            top: 0,
            left: 0
          });
    
          // Ajustar la posición de la ficha dentro de la celda
          $(this).append(ficha);
    
          // Verificar si la ficha está en orientación vertical u horizontal
          if ($(ficha).hasClass('vertical')) {
            // Asegurarse de que encaje de forma vertical
            $(ficha).css({
              width: '50px',
              height: '100px'
            });
          } else {
            // Asegurarse de que encaje de forma horizontal
            $(ficha).css({
              width: '100px',
              height: '50px'
            });
          }
        }
      });
    
      // Hacer la ficha arrastrable
      $('.ficha').draggable({
        containment: "#tablero",
        helper: 'clone',
        start: function(event, ui) {
          // Al comenzar el arrastre, verificamos la orientación
          var ficha = ui.helper[0];
          $(ficha).removeClass('vertical'); // Eliminar la clase de orientación vertical al iniciar
        }
      });
    
      // Cambio de orientación al hacer clic sobre la ficha
      $('#ficha').on('click', function() {
        var ficha = $(this);
        
        if (ficha.hasClass('vertical')) {
          // Cambiar a horizontal
          ficha.removeClass('vertical');
          ficha.css({
            width: '100px',
            height: '50px'
          });
        } else {
          // Cambiar a vertical
          ficha.addClass('vertical');
          ficha.css({
            width: '50px',
            height: '100px'
          });
        }
      });
}

//funcion para que al arrastrar, se coloque automaticamente en el hueco. (hay que crear los huecos, en el tablero, del mismo tamaño que una ficha)
/*$(document).ready(function() {
  // Hacer el objeto arrastrable
  $('#objeto').draggable();

  // Definir el hueco donde el objeto se colocará
  $('#hueco').droppable({
    drop: function(event, ui) {
      // Cuando el objeto se suelta dentro del hueco, lo coloca ahí
      ui.helper.position({
        my: 'left top',
        at: 'left top',
        of: $(this)
      });
    }
  });
}); */