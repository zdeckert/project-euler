/* 
Number letter counts
Problem 17

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const numAsWords = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    and: 'and',
}


const letterCount = (number) => {
    let count = 0;
    for (let i = 1; i <= number; i++ ) {
        let numString = '';
        let num = i;
        if (num > 999) {
            let thousands = Math.floor( num / 1000);
            num = num % 1000;
            (num) ? numString += numAsWords[thousands] + numAsWords[1000] + numAsWords.and : numString += numAsWords[thousands] + numAsWords[1000];
        }
        if (num > 99) {
            let hundreds = Math.floor( num / 100);
            num = num % 100;
            (num) ? numString += numAsWords[hundreds] + numAsWords[100] + numAsWords.and : numString += numAsWords[hundreds] + numAsWords[100];
        }
        if (num <= 99 && num > 19) {
            let tens = Math.floor( num / 10) * 10;
            let ones = num % 10;  
            numString += numAsWords[tens] + numAsWords[ones];
            num = 0;
        }
        if (num <= 19) {
            numString += numAsWords[num];
            num = 0;
        }
        count += numString.length;
        console.log(count, numString.length, numString, i)
    }

    return count;
}

console.log(letterCount(1000));