/**
 * Created by admin on 05.06.2017.
 *
 * Truncate a string
 *
 * Note that inserting the three dots to the end will add to the string length.
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length
 * in determining the truncated string.
 */

// Basic Code Solution
function truncateString0(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

// Advanced Code Solution
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11)