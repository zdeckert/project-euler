/*
Longest Collatz sequence
Problem 14

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

const collatzSequenceArray = (start) => {
    let array = [start];
    let i = start;
    while (i !== 1) {
        (i % 2) ? i = 3 * i + 1 : i = i / 2;
        array.push(i);
    }
    return array;
}

const largestCollatzStart = (limit) => {
    let longest = 0;
    let longestStart = 1;
    i = 1;
    while (i < limit) {
        let length = collatzSequenceArray(i).length;
        if (length > longest) {
            longest = length
            longestStart = i;
        };
        i++;
    }
    return longestStart;
}

console.log(largestCollatzStart(1000000));
