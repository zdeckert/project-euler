/*
Special Pythagorean triplet
Problem 9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// const squaredArray = (start, stop) => Array.from({ length: (stop - start) + 1}, (_, i) => Math.pow((start + (i)), 2));
// console.log(squaredArray(1,1000));

const pythagoreanTriplets = () => {
    let prod;
    for (let a = 1; a < 1000; a++) {
        for (let b = a + 1; b < 1000; b++) {
            let c = 1000 - a - b;
            console.log(a,b,c)
            if (b >= c) break;
            if (a*a + b*b - c*c === 0) {
                prod = a * b * c;
                break;
            }
        }
        if (prod) {
            break;
        }
    }
    return prod; 
}

console.log(pythagoreanTriplets());