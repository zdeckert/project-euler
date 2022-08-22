/* 
Largest prime factor 
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
*/


const largestPrimeFactor = (number) => {
    let largest = 1;
    let num = number;
    const limit = (n) => Math.ceil(n/2)
    
    for (let i = 2; i < limit(num); i === 2 ? i++ : i+=2) {
        if (num % i === 0) {
            if (i > largest) largest =  i;
            num = num / i;
        }
    }
    if (num > largest) largest = num;
    
    return largest;
}

console.log(largestPrimeFactor(600851475143))
