/**
 * Created by Alex on 27.05.2017.
 *
 * Repeat a string repeat a string
 *
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 */

// Basic Code Solution:
function repeatStringNumTimes1(str, num) {
    var accumulatedStr = '';

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

// Intermediate Code Solution
function repeatStringNumTimes0(str, num) {
    if(num < 0)
        return "";
    if(num === 1)
        return str;
    else
        return str + repeatStringNumTimes(str, num - 1);
}

// Advanced Code Solution
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);