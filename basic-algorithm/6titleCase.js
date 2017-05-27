/**
 * Created by Alex on 27.05.2017.
 *
 *  Title Case a Sentence
 *
 *  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 */

"use strict";

String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase1(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}

// Intermediate Code Solution
function titleCase0(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

// Advanced Code Solution (ES6)
function titleCase(str) {
    // return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");