/*
Factorial digit sum
Problem 20

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
const factorial = (n) => {
    let prod = BigInt(n);
    for (let i = n - 1; i > 0; i--) {
        prod *= BigInt(i);
    }
    return prod;
}

const sumOfFactorialDigits = (n) => {
    const factorialBigInt = factorial(n);
    return factorialBigInt.toString().split('').map((str) => Number(str)).reduce((a,b) => a + b);
}

console.log(sumOfFactorialDigits(100));