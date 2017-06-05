/**
 * Created by admin on 05.06.2017.
 *
 * Chunky Monkey
 *
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 */

//Basic Code Solution
function chunkArrayInGroups1(arr, size) {
    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
            temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);
    return result;
}

//Advanced Code Solution
function chunkArrayInGroups0(arr, size) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i+=size) {
        arr2.push(arr.slice(i , i+size));
    }
    return arr2;
}

// Advanced Code Solution
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i+size));
        i += size;
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);