/**
 * Created by Alex on 27.05.2017.
 *
 * Reverse the provided string.
 *
 * You may need to turn the string into an array before you can reverse it.
 */

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");