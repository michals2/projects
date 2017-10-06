var l = console.log


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

        // current value continues increasing pattern
        if (seq[i] > seq[currentArrIndices.end]) {
            currentArrIndices.end++;
            currentArrLength++;
        }

        // current value doesn't continue increasing pattern
        else {
            // currentArr is longer than cachedArr
                // --> cache the currentArrIndices
            if (currentArrLength > cachedArrLength) {
                cachedArrIndices = currentArrIndices;
                cachedArrLength = currentArrLength;
            }
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
        return seq.slice(cachedArrIndices.start,  cachedArrIndices.end  + 1);

}



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