// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const cliente = pedido.shift(); // Saca el primer elemento (nombre del cliente)
    pedido.unshift("bebida"); // Añade "bebida" al inicio del array
    pedido.push(cliente); // Añade el nombre del cliente al final
    return pedido; // Retorna el array modificado
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            suma += numero; // Suma solo los números pares
        }
    }
    return suma;
}

// 3. Filtrado de Arrays
// 3.1 Crea una función llamada `filtrarMayores` que reciba un array de números y un número umbral.
// Debes devolver un nuevo array con todos los números que sean mayores que el umbral.
function filtrarMayores(numeros, umbral) {
    return numeros.filter(numero => numero > umbral); // Filtra y devuelve los números mayores que el umbral
}

// 4. Transformación de Arrays
// 4.1 Crea una función llamada `duplicarValores` que reciba un array de números.
// Debes devolver un nuevo array donde cada valor del array original se duplique.
function duplicarValores(numeros) {
    return numeros.map(numero => numero * 2); // Duplica cada valor y lo retorna en un nuevo array
}

// 5. Reducción de Arrays
// 5.1 Crea una función llamada `multiplicarValores` que reciba un array de números.
// Debes devolver el producto de todos los números del array.
function multiplicarValores(numeros) {
    return numeros.reduce((producto, numero) => producto * numero, 1); // Multiplica todos los valores
}

// 6. Ordenación de Arrays
// 6.1 Crea una función llamada `ordenarArray` que reciba un array de números.
// Debes devolver el array ordenado de menor a mayor.
function ordenarArray(numeros) {
    return numeros.sort((a, b) => a - b); // Ordena el array de menor a mayor
}

// 7. Combinación de Arrays
// 7.1 Crea una función llamada `combinarArrays` que reciba dos arrays y devuelva un nuevo array que contenga los elementos de ambos arrays.
function combinarArrays(array1, array2) {
    return [...array1, ...array2]; // Combina ambos arrays en uno nuevo
}

// Exportar las funciones
export {
    procesarPedido,
    sumarPares,
    filtrarMayores,
    duplicarValores,
    multiplicarValores,
    ordenarArray,
    combinarArrays,
};

