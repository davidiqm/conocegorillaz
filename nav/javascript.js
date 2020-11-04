nombre = prompt('Ingrese su nombre');
var elem = document.getElementById('campoNombre');
elem.innerHTML =nombre;

function suma() {
    var elem1 = parseInt(document.getElementById('valor1').value);
    var elem2 = parseInt(document.getElementById('valor2').value);

    resultado = elem1 + elem2;
    
    document.getElementById('resultado-suma').innerHTML = resultado;
    document.getElementById('formulario').reset();
};
