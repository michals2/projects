// 1. Character Frequency.

/**
 * Calculates the character frequencies in a string. Whitespace and
 * punctuation is ignored. Non-english characters are not counted.
 * Case is ignored ('A' and 'a' both count toward the same character).
 *
 * @param {string} sentence  The string whose characters will be counted
 * @returns {object} An object with keys being lowercase characters, and
 *                   values being the character counts.
 */
function charFreq(sentence) {

    // check arguments
    if (typeof sentence !== 'string') return 'Invalid input';

    // create array of only lower case english characters
    return sentence.replace(/[^a-zA-Z]+/g, '').toLowerCase().split('')
        // reduce array to object
        .reduce(function (a, c) {
            // character hasn't been stored as key in accumulator object
            if (!a[c]) a[c] = 1;
            // character has been stored as a key in accumulator object
            else a[c]++;
            return a;
        }, {})

}

// 2. Longest Increasing Sub-Array.

/**
 * Finds the longest increasing subarray from a given array
 * of integers. A subarray is said to be "increasing" when each
 * non-last value is followed by a value that is greater
 * than the previous value.
 * If there are multiple contenders of the same length, returns
 * the first occurring subarray.
 * If no increasing sub-array of length 2 or greater is found,
 * returns an empty array.
 *
 * @param {number[]} seq  An array of integers
 * @returns {number[]} The longest increasing subarray of `seq`
 */
function longestIncrSubArray(seq) {

    // check arguments
    if (!Array.isArray(seq)) return 'Invalid input'

    // keep track of indices of increasing subarrays
    // currentArr is the subarray we're actively adding to 
    var currentArrIndices = { 'start': 0, 'end': 0 };
    var currentArrLength = 1;
    // cachedArr is the subarray stored in memory
    var cachedArrIndices = { 'start': 0, 'end': 0 };
    var cachedArrLength = 1;

    for (var i = 1; i < seq.length; i++) {

        // check element values
        if (!Number.isInteger(seq[i])) return 'Invalid input';

        // current value continues increasing pattern of currentArr
        if (seq[i] > seq[currentArrIndices.end]) {
            currentArrIndices.end++;
            currentArrLength++;
        }

        // current value doesn't continue increasing pattern of currentArr
        else {
            // currentArr is longer than cachedArr
            // --> cache the currentArrIndices
            if (currentArrLength > cachedArrLength) {
                cachedArrIndices = currentArrIndices;
                cachedArrLength = currentArrLength;
            }
            // reset currentArr
            currentArrIndices = { 'start': i, 'end': i };
            currentArrLength = 1;
        }
    }

    // no increasing subarray of length >= 2
    if (currentArrLength < 2 && cachedArrLength < 2)
        return [];
    // currentArr is longer than cachedArr
    if (currentArrLength > cachedArrLength)
        return seq.slice(currentArrIndices.start, currentArrIndices.end + 1);
    // cachedArr is longer than currentArr
    else
        return seq.slice(cachedArrIndices.start, cachedArrIndices.end + 1);

}

// 3. Formidable Series.

/**
 * Takes a start and end integer. Returns an array of the integer series
 * represented by start and end, except:
 *   - If the integer is divisible by 3, the array value is 'Formidable'
 *   - If the integer is divisible by 5; 'Labs'
 *   - If the integer is divisible by 3 and 5; 'FormidableLabs'
 * @param {number} start  Series start value
 * @param {number} end  Series end value (incl.)
 * @returns {(number|string)[]} Series based on above rules
 */
function formidableSeries(start, end) {

    // check arguments
    if (!Number.isInteger(start) || !Number.isInteger(end) || start > end)
        return 'Invalid input'

    var arr = [];
    for (var i = start; i <= end; i++) {

        // integer is divisible by 3 and 5
        if (i % 15 === 0) arr.push('FormidableLabs');

        // integer is divisible by 3
        else if (i % 3 === 0) arr.push('Formidable');

        // integer is divisible by 5
        else if (i % 5 === 0) arr.push('Labs');

        // integer is not divisible by 3 or 5
        else arr.push(i);
    }

    return arr;

}




// -------------------------
// Test your functions below
// -------------------------

var l = console.log

// 1. charFreq tests
l(charFreq('Test1'));
l(charFreq('This is 1 Sentence!_'))
l('{} --> ', charFreq(''))
l('Invalid input --> ', charFreq([1, 2]))
l('Invalid input --> ', charFreq({ 'a': 1 }))
l('Invalid input --> ', charFreq(1))

// 2. longestIncrSubArray tests
l('[] --> ', longestIncrSubArray([]));
l('[] --> ', longestIncrSubArray([3, 2, 1]));
l('[1, 2, 3] -->', longestIncrSubArray([1, 2, 3]));
l('[3, 4] --> ', longestIncrSubArray([3, 4, 1, 2]));
l('[3, 9, 11] --> ', longestIncrSubArray([3, 4, 2, 8, 3, 9, 11, 9, 10]));
l('Invalid Input --> ', longestIncrSubArray(3));
l('Invalid Input --> ', longestIncrSubArray('3'));
l('Invalid Input --> ', longestIncrSubArray({ 'a': 1 }));
l('Invalid Input --> ', longestIncrSubArray([3, '4', 5]));

// 3. formidableSeries tests
l(formidableSeries(1, 16));
l(formidableSeries(-3, 16));
l('Invalid Input --> ', formidableSeries(16, 1));
l('Invalid Input --> ', formidableSeries(1, '2'));
l('Invalid Input --> ', formidableSeries(1));



/**
 * RESOURCES
 * 
 * 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * 5. http://regexr.com/
 * 
 */