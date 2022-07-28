// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

const numersPrueba = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
function countPositivesSumNegatives(input) {
  let suma = [0, 0];
  if (input === null || input.length < 1) {
    return [];
  } else {
    input.map((num) => {
      if (num > 0) {
        return suma[0]++;
      } else if (num < 0) {
        return (suma[1] += num);
      }
    });
  }
  return suma;
}
countPositivesSumNegatives(numersPrueba);
