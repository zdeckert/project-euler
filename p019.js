/*
Counting Sundays
Problem 19

You are given the following information, but you may prefer to do some research for yourself.

    1 Jan 1900 was a Monday.

    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.

    A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

const sundaysOnFirst = (start, end) => {
    let count = 0;
    let startDate = new Date(start);
    let endDate = new Date(end);

    while (startDate < endDate) {
        let month = startDate.getMonth()
        if (startDate.getDate() === 1 && startDate.getDay() === 0) {
            count++;
        }
        startDate.setMonth(month + 1, 1);
    }
    return count;
}

console.log(sundaysOnFirst('1 Jan 1901', '31 Dec 2000'));