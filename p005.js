/* 
Smallest multiple
Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const smallestMultiple = (limit) => {
    let obj = {};
    for (let i = 2; i <= limit; i++) {
        let factor = i;
        let factorObj = {};
        for (let j = 2; j <= factor; j++) {
            if (factor % j === 0) {
                factorObj[j] ? factorObj[j]++ : factorObj[j] = 1;
                factor /= j;
                j = 1;
            }
        }
        Object.keys(factorObj).forEach((key) => {
            if (!obj[key] || obj[key] < factorObj[key]) obj[key] = factorObj[key];
        })
    }
    return Object.entries(obj).reduce((a, [b, count]) => a * b**count, 1);
}

console.log(smallestMultiple(20));