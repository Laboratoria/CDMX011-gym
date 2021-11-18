# Sesión 16 - 18/11/2021

## Ejercicios

### Palindromo (Diana/Ana Sofia/Ana Karina)

Crea una función que identifique si un string es un palíndromo (esto es, se lee igual al derecho o al revés), retornando true si lo es o false si no.

```js
isPalindrome('ana') // returns true
isPalindrome('holo') // returns false
isPalindrome('neveroddoreven') // returns true
isPalindrome('stresseddesserts') // returns true
```

---

### Mayores y menores (Diana)

Implementa una función que reciba un arreglo de números y devuelva un nuevo arreglo
con 3 elementos, en este orden:
el número mayor del arreglo.

```js
const analyseArray = (arr) => {
  // ...
};
const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];
const [max, min, max2] = analyseArray(numbers);
console.log(max); // 100
console.log(min); // -80
console.log(max2); // 32
```

---

### Nombres formateados (Alicia)

Implementa una función que recibe un arreglo de strings con nombres de personas, y retorna un nuevo arreglo de strings con los nombres formateados.

__Ejemplo__

```js
Entrada: ['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE']
Salida: [ 'M. Curie', 'M. Anning', 'A. Lovelace', 'S. Ride' ]
```

---

### Columnas responsivas (Flor)

Realizar una estructura en css y html de una fila con dos divs responsive  y al hacer la pantalla más pequeña en lugar de estar ordenados por fila se hicieran en columna.

### Mayores y menores (Flor)

Dado un arreglo de números sacar el mayor, menor y penúltimo mayor.

---

### Maxima clave (Daniela Torres)

Dado un mapa de valores, escribe una función que consiga el máximo nombre de valor

```js
getMax({ foo: 0.9, bar: 0.25, baz: 4.20 });
```

---

### Consumir una API (Ana Davila)

Debes consumir una  API [https://randomuser.me/](https://randomuser.me/) y crea una interfaz que entregue un directorio de usuarios.

Debe de tener al menos 10 usuarios, 5 hombres y 5 mujeres. Deben ser siempre los mismos perfiles, no puede cambiar el directorio después de una actualización. Incluir nombre, género, foto, email, fecha de registro, dirección y teléfono

---

### Imprimir números (Victoria)

Escriba un programa que imprima todos los números del 1 al 100.
Sin embargo, para múltiplos de 3, en lugar del número, escriba "Laboratoria".
Para múltiplos de 5 imprime "IT".
Para números que son múltiplos de 3 y 5, imprime "Laboratorianas".

__Requisitos__

* Solo usar `if` una sola vez
* No puedes usar `else`, `else if` o ternary
