# Mars Exploration

[https://www.hackerrank.com/challenges/mars-exploration/problem](https://www.hackerrank.com/challenges/mars-exploration/problem)

¡La nave de un explorador espacial se estrelló en Marte! Envía una serie de mensajes de emergencia a la Tierra en busca de ayuda.

![Nasa Mars Rover](https://s3.amazonaws.com/hr-challenge-images/16032/1453204202-9e3fd295bb-NASA_Mars_Rover.jpg)

Las letras de algunos de los mensajes SOS se alteran por la radiación cósmica durante la transmisión. Dada la señal recibida por la Tierra como una cadena, determine cuántas letras del mensaje SOS han cambiado por la radiación.

__Ejemplo 1__

- Entrada: `s = SOSSPSSQSSOR`
- Salida: `3`
- Explicación: `s = SOSSPSSQSSOR`, y la longitud de la señal `|s| = 12`.
  Ellos enviaron 4 mensajes __SOS__ (12/3 = 4).

  ```txt
  Señal esperada: SOSSOSSOSSOS
  Señal recibida: SOSSPSSQSSOR
  Diferencia:         X  X   X
  ```

__Ejemplo 2__

- Entrada: `s = SOSSOT`
- Salida: `1`
- Explicación: `s = SOSSOT`, y la longitud de la señal `|s| = 6`.
  Ellos enviaron 2 mensajes __SOS__ (6/3 = 2).

```txt
Señal esperada: SOSSOS
Señal recibida: SOSSOT
Diferencia:          X
```

__Ejemplo 3__

- Entrada: `s = SOSSOSSOS`
- Salida: `0`
- Explicación: Ya que ninguna letra fue alterada, retorna `0`.

## Objetivos de aprendizaje (OAs)

- Manipulación de strings
