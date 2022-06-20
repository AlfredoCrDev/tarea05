// Mostrar en consola la secuencia de Fibonacci: 
// a. Entre los números 0 y 1000.

let fibo = [0, 1]
for (let i = 2; i < 17; i++) {
    fibo[i] = fibo[ i - 2 ] + fibo[ i - 1 ];
}
console.log('Secuencia Hasta El 1000: ', fibo);

// b. Números pares entre 0 y 1000.
let fiboPar = [0, 2]
for (let i = 2; i < 17; i++) {
    fiboPar[i] = fiboPar[ i - 2 ] + fiboPar[ i - 1 ];
}
console.log('Secuencia Par: ', fiboPar);


// c. Números impares entre 0 y 1000.
let fiboImp = [0, 1]
for (let i = 2; i < 17; i++) {
    fiboImp[i] = fiboImp[ i - 2 ] + fiboImp[ i - 1 ];
        if (fiboImp[i] % 2 !== 0) {
            let resultado = fibo[i]++;
            console.log('Secuencia Impar: ', resultado);
        }
}


// Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokemones = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];

let newPokemones = pokemones.map(element => element.toUpperCase());
console.log('Pokemones en Mayuscula: ', newPokemones);

// Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemonesArray = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

const pokemonesTipoFuego = pokemonesArray.filter(element => element.tipo === "Fuego")

console.log('Pokemones Tipo Fuego: ',pokemonesTipoFuego)
