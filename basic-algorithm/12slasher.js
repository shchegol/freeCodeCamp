/**
 * Created by admin on 05.06.2017.
 *
 * Slasher Flick
 *
 * Return the remaining elements of an array after chopping off n elements from the head.
 */

function slasher(arr, howMany) {

    // Return string after the amount chopped off.
    return arr.slice(howMany);

}

slasher([1, 2, 3], 2);