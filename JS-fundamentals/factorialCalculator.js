// Step 1
let num = 5;

// Step 2
function factorialCalculator(number) {
  let result = 1;

  // Step 3
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

// Step 4
let factorial = factorialCalculator(num);

// Step 5
let resultMsg = `Factorial of ${num} is ${factorial}`;

// Step 6
console.log(resultMsg);