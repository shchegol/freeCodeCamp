/**
 * Created by admin on 22.06.2017.
 *
 * Seek and Destroy
 *
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments. Remove all elements from the initial array that
 * are of the same value as these arguments.
 */

// Basic Code Solution
function destroyer0(arr) {
    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

// Intermediate Code Solution
function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); //should return [1].
destroyer([2, 3, 2, 3], 2, 3); //should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); //should return ["hamburger"].