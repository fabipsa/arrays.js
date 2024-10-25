// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
    function procesarPedido(pedido) {
        // Saca el primer elemento (nombre del cliente)
        const nombreCliente = pedido.shift();
    
        // Añade "bebida" al inicio del array
        pedido.unshift("bebida");
    
        // Añade el nombre del cliente al final
        pedido.push(nombreCliente);
    }


// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {  
    let suma = 0;
    
    // Itera sobre el array
    for (let numero of numeros) {
        // Comprueba si el número es par
        if (numero % 2 === 0) {
            suma += numero; // Suma el número par a la suma total
        }
    }
    
    return suma; // Devuelve la suma total de los números pares
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
       // Itera sobre el array de palabras
       for (let palabra of palabras) {
        // Comprueba si la palabra no termina con "a"
        if (!palabra.endsWith("a")) {
            return false; // Si al menos una no termina con "a", devuelve false
        }
    }
    return true; // Si todas terminan con "a", devuelve true
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
     // Busca el índice de la palabra
     const index = words.indexOf(word);
    
     // Si la palabra no se encuentra, devuelve un array vacío
     if (index === -1) {
         return [];
     }
     
     // Devuelve un nuevo array con las palabras después del índice encontrado
     return words.slice(index + 1);
 }

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    // Recorre cada fila de la matriz
    for (let i = 0; i < matrix.length; i++) {
        // Busca "JavaScript" en la fila actual
        const index = matrix[i].indexOf("JavaScript");
        
        // Si se encuentra, devuelve la posición [fila, columna]
        if (index !== -1) {
            return [i, index];
        }
    }
    
    // Si no se encuentra, devuelve [-1, -1]
    return [-1, -1];
}


const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    // Inicializa los índices y los valores mínimo y máximo
    let minIndex = 0;

    // Itera sobre el array para encontrar los índices
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; // Actualiza el índice del libro con menos páginas
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; // Actualiza el índice del libro con más páginas
        }
    }

    // Devuelve un array con los índices
    return [minIndex, maxIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};

