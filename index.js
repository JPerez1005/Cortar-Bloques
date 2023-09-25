const d=document;

// Función para generar la serie de Fibonacci hasta un límite
function generarSerieFibonacci(limite) {
    const serie = [0, 1];  // Inicializa la serie con los dos primeros números de Fibonacci
    let i = 2;            // Inicializa un contador en 2 porque ya tenemos dos números en la serie
    while (true) {         // Inicia un bucle infinito
        const siguiente = serie[i - 1] + serie[i - 2];  // serie[1]+serie[0];
        if (siguiente > limite) {  // Comprueba si el siguiente número supera el límite especificado
            break; // Si el siguiente número supera el límite, sale del bucle
        }
        serie.push(siguiente);  // Agrega el siguiente número a la serie serie=[0, 1, 1]
        i++;  // Incrementa el contador
    }
    return serie;  // Devuelve la serie de Fibonacci generada
}


// Función para verificar si un número está en la serie de Fibonacci
function esParteDeFibonacci(numero, serieFibonacci) {
    return serieFibonacci.includes(numero);
}

// Variable global para mantener una referencia a la imagen
let imagenMostrada = null;

function mostrarImagen() {
    // Verificar si ya hay una imagen mostrada y eliminarla antes de crear una nueva
    if (imagenMostrada) {
        quitarImagen();
    }

    const bodyElement = document.body;
    bodyElement.classList.add('black');

    const imagen = document.createElement("img");
    imagen.src = "rudeus.png";

    // Agregar estilos a la imagen
    imagen.style.width = "500px";
    imagen.style.height = "auto";
    imagen.classList.add("mi_imagen");

    const padre_img = document.getElementById("imagenFibonacci");
    padre_img.style.height = "100vh";
    padre_img.style.display = "flex";
    padre_img.style.alignItems = "center";
    padre_img.style.justifyContent = "center";
    padre_img.appendChild(imagen);

    // Asignar la imagen a la variable global
    imagenMostrada = imagen;
}

function quitarImagen() {
    if (imagenMostrada) {
        const padre = imagenMostrada.parentNode;
        padre.removeChild(imagenMostrada);
        imagenMostrada = null; // Limpiar la referencia a la imagen
        const bodyElement = document.body;
        bodyElement.classList.remove('black');
    }
}

document.getElementById("generarNumeros").addEventListener("click", function () {
    const limite = 11;
    const numero1 = Math.floor(Math.random() * (limite));
    const numero2 = Math.floor(Math.random() * (limite));

    const serieFibonacci = generarSerieFibonacci(limite);//nos retorna la serie fibonacci hasta el limite
    const suma = numero1 + numero2;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Número 1: ${numero1}, Número 2: ${numero2}, Suma: ${suma}`;

    if (esParteDeFibonacci(suma, serieFibonacci)) {
        resultado.textContent += " - ¡Es parte de la serie de Fibonacci!";
        mostrarImagen();
    } else {
        resultado.textContent += " - NO es parte de la serie de Fibonacci.";
        quitarImagen();
    }
});
