/**
 * Created by Alex on 21.05.2017.
 */

// Reverse the provided string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");

// Return the factorial of the provided integer.
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);

// Return true if the given string is a palindrome. Otherwise, return false.