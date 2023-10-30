/* complex_code.js */
/* This code implements a complex algorithm for finding all prime numbers between 1 and a given number.
   The algorithm uses the Sieve of Eratosthenes method. */

// Function to generate prime numbers using the Sieve of Eratosthenes algorithm
function generatePrimeNumbers(limit) {
  // Create an array to store prime numbers
  let primes = [];

  // Initialize an array to track non-prime numbers
  let sieve = new Array(limit + 1).fill(true);

  // Set 0 and 1 as non-prime numbers
  sieve[0] = false;
  sieve[1] = false;

  // Iteratively mark multiples of prime numbers as non-prime
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Collect prime numbers
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Test the generatePrimeNumbers function
let limit = 1000; // Set the limit for finding prime numbers
let primes = generatePrimeNumbers(limit);
console.log("Prime numbers between 1 and", limit, "are:", primes);
console.log("Total count:", primes.length);

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Test the isPrime function
let number = 73; // Set a number to check if it is prime
if (isPrime(number)) {
  console.log(number, "is a prime number");
} else {
  console.log(number, "is not a prime number");
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Test the factorial function
let factorialNumber = 5; // Set a number to calculate its factorial
console.log("Factorial of", factorialNumber, "is", factorial(factorialNumber));

// Continue with more complex code...
// ...