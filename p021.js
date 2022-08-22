/*
Amicable numbers
Problem 21

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

const divisorsArray = (n) => {
    const array = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) array.push(i);
    }
    return array;
}

const findAmicableNumbers = (limit) => {
    let array = [];
    let sum, sum2;
    for (let i = 2; i < limit; i++) {
        if (array.includes(i)) continue;
        sum = divisorsArray(i).reduce((a,b) => a + b);
        if (divisorsArray(sum).length) sum2 = divisorsArray(sum).reduce((a,b) => a + b);
        if (i === sum2 && sum !== sum2) {
            if (!array.includes(i)) array.push(i)
            if (sum < limit && !array.includes(sum)) array.push(sum)
        };
        console.log(array);
        
    }
    return array;
}

console.log(findAmicableNumbers(10000).reduce((a,b) => a+b))