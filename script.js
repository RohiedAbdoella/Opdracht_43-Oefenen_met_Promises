//Functie 1:
function sum1(...numbers) {
  return numbers.reduce(function(prev, current) {
    return prev + current;
  });
}

console.log(sum1(1, 2, 3, 4, 5, 6));

//functie 2:
const sum2 = function(num1, num2, num3, num4, num5, num6) {
  return num1 + num2 + num3 + num4 + num5 + num6;
  }

const cijfers = [1, 2, 3, 4, 5, 6];
console.log(sum2(...cijfers));