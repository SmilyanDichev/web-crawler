const numberIncreaser = function* (endNum) {
    let currentNum = 0;
    while (true) {
        // if (currentNum <= endNum - 1) {
            yield currentNum++;
        // } else return;
    }
};

module.exports.numberIncreaser = numberIncreaser;
