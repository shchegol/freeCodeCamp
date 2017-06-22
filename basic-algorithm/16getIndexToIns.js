/**
 * Created by admin on 22.06.2017.
 *
 * Where do I belong
 *
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

// Basic Code Solution
function getIndexToIns4(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num)
            return a;
    }

    return arr.length;
}

function getIndexToIns3(arr, num) {
    // Find my place in this sorted array.
    var times = arr.length; // runs the for loop once for each thing in the array
    var count = 0;
    for (i=0;i<times;i++){
        if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
}

function getIndexToIns2(arr, num) {

    arr.sort(function(a, b) {
        return a - b;
    });

    var i = 0;
    while (num > arr[i]) {
        i++;
    }

    return i;
}

// Intermediate Code Solution
function getIndexToIns1(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    return arr.indexOf(num);
}

// function getIndexToIns0(arr, num) {
//     // sort and find right index
//     var index = arr.sort((curr, next) => curr > next)
// .findIndex((currNum)=> num <= currNum);
//     // Returns proper answer
//     return index === -1 ? arr.length : index;
// }

// Advanced Code Solution
// function getIndexToIns(arr, num) {
//     return arr.concat(num).sort((a,b) => a-b).indexOf(num);
// }

getIndexToIns([10, 20, 30, 40, 50], 35); //should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); //should return 2.
getIndexToIns([40, 60], 50); //should return 1.
getIndexToIns([3, 10, 5], 3); //should return 0.
getIndexToIns([5, 3, 20, 3], 5); //should return 2.
getIndexToIns([2, 20, 10], 19); //should return 2.
getIndexToIns([2, 5, 10], 15); //should return 3.