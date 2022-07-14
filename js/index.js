function ifelse(valor) {
    if (valor.length === 0) {
        alert("No hay texto dentro del textbox")
    } else {
        alert("El contenido del textbox es: " + valor)
    }
}

function functionswitch(valor) {
    switch (valor) {
        case "Ms Marvel":
            alert("Su nombre es: Kamala Khan");
            break;
        case "Spider-Man":
            alert("Su nombre es: Peter Parker");
            break;
        case "Doctor Strange":
            alert("Su nombre es: Stephen Strange");
            break;
        case "Iron Man":
            alert("Su nombre es: Tony Stark");
            break;
        case "Thor":
            alert("Él es el Dios del trueno");
            break;
        default:
            alert("No seleccionó ningún Superheroe");
    }
}

function excepcionFactory(valor) {
    if (valor === "")
        throw new Error("No existe un valor");
}

function manejodeExcepcion(valor) {

    try {
        excepcionFactory(valor);
    } catch (error) {
        alert(error);
    }
}

function objetoError(error) {
    if (error instanceof TypeError) {
        alert("Usted ha generado el siguiente error: " + error)
    }
}

function bucles(valor) {
    var contador = 0;
    switch (valor) {
        case "for":
            let suma=0;
            for (let i = 0; i <= 7; i++) {
                suma+=i;
                alert(`Recorrido numero ${i} de 7 con for sumado de: ${suma}`);
            }
            break;
        case "while":
            while (cont <= 7) {
                alert(`Recorrido numero ${cont} con while`);
                cont++;
            }
            break;
        case "do While":
            do {
                alert(`Recorrido numero ${cont} con do while`);
                cont++;
            } while (cont <= 7);
            break;
    }
}

function objetos(tipo) {
    switch (tipo) {
        case 'Number':
            alert("Objeto de tipo Number: " + new Number(3).valueOf());
            break;
        case 'Math':
            alert("Objeto de tipo Math: " + Math.E);
            break;
        case 'Date':
            alert("Objeto de tipo Date: " + new Date().toLocaleDateString());
            break;
    }
}

function formatearTexto(accion, texto, textbox) {
    switch (accion) {
        case 'Mayúscula':
            textbox.value = texto.toUpperCase();
            break;
        case 'Minúscula':
            textbox.value = texto.toLowerCase();
            break;
        case 'Tamaño':
            alert(`La cadena contiene un total de ${texto.length} caracteres`);
            break;
    }
}

function operar(num1, num2, operacion) {
    let total;

    switch (operacion) {
        case "Sumar":
            total = Number.parseInt(num1) + Number.parseInt(num2);
            break;
        case "Restar":
            total = Number.parseInt(num1) - Number.parseInt(num2);
            break;
        case "Multiplicar":
            total = Number.parseInt(num1) * Number.parseInt(num2);
            break;
        case "Dividir":
            total = Number.parseInt(num1) / Number.parseInt(num2);
            break;
    }
    alert(`El resultado de la operacion es: ${total}`);
}

function array() {
    let lista = new String();
    let frutas = ["Manzana", "Banano", "Pera", "Fresa", "Uva"];
    for (let i = 0; i < frutas.length; i++) {
        lista += frutas[i] + "\n";
    }
    alert(lista)
}

function arrayTipado() {
    const arrayTipado = new Int8Array(4);
    for (let i = 0; i < arrayTipado.length; i++) {
        arrayTipado[i] = i;
    }
    alert(arrayTipado);
}
