/**
 * Created by Alex on 27.05.2017.
 */

// Find the Longest Word in a String.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function findLongestWord1(str) {
    var words = str.split(' ');
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

// Intermediate Code Solution
function findLongestWord0(s) {
    return s.split(' ')
        .reduce(function (x, y) {
            return Math.max(x, y.length)
        }, 0);
}

// Advanced Code Solution
function findLongestWord(str) {

    //split the string into individual words
    //(important!!, you'll see why later)
    str = str.split(" ");

    //str only has 1 element left that is the longest element,
    //return the length of that element
    if (str.length == 1) {
        return str[0].length;
    }

    //if the first element's length is greater than the second element's (or equal)
    //remove the second element and recursively call the function)
    if (str[0].length >= str[1].length) {
        str.splice(1, 1);
        return findLongestWord(str.join(" "));
    }

    //if the second element's length is greater thant the first element's start
    //call the function past the first element
    if (str[0].length <= str[1].length) {
        // from the first element to the last element inclusive.
        return findLongestWord(str.slice(1, str.length).join(" "));
    }
}

findLongestWord("The quick brown fox jumped over the lazy dog");