/*
Sum square difference
Problem 6

The sum of the squares of the first ten natural numbers is,

    1^2 + 2^2 +....+ 10^2 = 385

The square of the sum of the first ten natural numbers is,
    (1 + 2...+10)2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
    3025 - 385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const rangeArray = (start, stop, step = 1) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

const sumOfSqaures = (range) => {
    let [lowerLimit, upperlimit] = range;
    let array = rangeArray(lowerLimit, upperlimit);
    return array.map((n) => Math.pow(n, 2)).reduce((a, b) => a + b)
}

const squareOfSums = (range) => {
    let [lowerLimit, upperlimit] = range;
    let array = rangeArray(lowerLimit, upperlimit);
    return Math.pow(array.reduce((a, b) => a + b), 2);
}

console.log(squareOfSums([1,100]) - sumOfSqaures([1,100]))