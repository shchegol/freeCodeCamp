/**
 * Created by Alex on 21.05.2017.
 */

// Reverse the provided string.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");

// Return the factorial of the provided integer.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);

// Return true if the given string is a palindrome. Otherwise, return false.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Basic Code Solution:
function palindrome1(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

// Intermediate Code Solution:
function palindrome0(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for(var i = 0, len = str.length - 1; i < len/2; i++) {
        if(str[i] !== str[len-i]) {
            return false;
        }
    }
    return true;
}

// Advanced Code Solution (most performant):
// this solution performs at minimum 7x better, at maximum infinitely better.
// read the explanation for the reason why. I just failed this in an interview.

function palindrome(str) {
    //assign a front and a back pointer
    var front = 0;
    var back = str.length - 1;

    //back and front pointers won't always meet in the middle, so use (back > front)
    while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if ( str[front].match(/[\W_]/) ) {
            front++;
            continue
        }
        //decrements back pointer if current character doesn't meet criteria
        if ( str[back].match(/[\W_]/) ) {
            back--;
            continue
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++;
        back--
    }

    //if the whole string has been compared without returning false, it's a palindrome!
    return true
}

palindrome("eye");