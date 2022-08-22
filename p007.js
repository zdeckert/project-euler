/*
10001st prime
Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?
*/

const primeArray = (length) => {
    let array = [];
    
    for (let i = 2; array.length < length; i++) {
        if (array.some((n) => i % n === 0)) {
            continue;
        }
        array.push(i)
    }

    return array;
}

const arr = primeArray(10001)
console.log(arr[arr.length-1]);