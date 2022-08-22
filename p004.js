/* 
Largest palindrome product
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (num) => {
    return [...num.toString()].reverse().join('') == num
}


const palindromeFrom3digits = () => {
    let largestPalindrome = 0;
    let lowerLimit = 99;
    for (let i = 999; i > lowerLimit; i--) {
        for (let j = 999; j > lowerLimit; j--) {
            let prod = i * j;
            if (isPalindrome(prod) && prod > largestPalindrome) {
                largestPalindrome = prod;
                lowerLimit = j;
            }
        }
    }
    return largestPalindrome;
}
console.log(palindromeFrom3digits())
