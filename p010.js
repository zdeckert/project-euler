/*
Summation of primes
Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const primeSum = (limit) => {
    let array = [];
    
    for (let i = 2; i < limit; i++) {
        if (array.some((n) => i % n === 0)) {
            continue;
        }
        array.push(i)
    }

    return array.reduce((a,b) => a + b);
}

console.log(primeSum(2000000))