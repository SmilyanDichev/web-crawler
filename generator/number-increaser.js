const numberIncreaser = function* (endNum) {
    let currentNum = 0;
    while (true) {
            yield currentNum++;
    }
};

module.exports.numberIncreaser = numberIncreaser;
