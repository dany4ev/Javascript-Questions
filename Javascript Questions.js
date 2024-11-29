
let obj = {

    findLongestSentence: function (input) {
        let splitted = input.split(' ');
        let sortedWordLengths = splitted.map(m => m.length).sort();
        let longest = sortedWordLengths[sortedWordLengths.length - 1];
        return splitted.find(f => f.length === longest);
    },

    isPalindrome: function (input) {
        let splitted = [...input];
        let reversed = '';
        for (let i = input.length - 1; i >= 0; i--) {
            reversed += splitted[i];
        }
        return input === reversed ? 'Palindrome' : 'Not Palindrome';
    },

    removeDuplicates: function (input) {
        return [...new Set(input)];
    },

    reverseString: function (str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    },

    maxCountsOfConsecutiveOnesInArray: function (input) {
        let repeated = [];
        input.forEach((val, ind) => {
            if (val === input[ind + 1]) {
                repeated.push(val);
            }
        });
        return repeated;
    },

    factorial: function (input) {
        let result = 1;
        let range = [];
        for (let i = input; i >= 1; i--) {
            range.push(i);
        }
        if (range.length > 0) {
            result = range.reduce((a, b) => a * b);
        }
        else {
            result = 1;
        }
        return result;
    },

    mergeSort: function (arr1, arr2) {
        let result = [];
        result = [...arr1, ...arr2]; // merge arrays
        return result.sort((a, b) => a - b);
    },

    hasSquaredForAll: function (arr1, arr2) {
        let result = false;
        let res = [];
        if (arr1.length === arr2.length) {
            let arr1Squared = arr1.map((m) => m * m);
            arr2.forEach((f, i) => {
                res.push(arr1Squared[i] === f);
            });
            result = res.every(e => e === true);
        }
        return result;
    },

    getUniqueArray: function (a) {
        let stringified = a.map(JSON.stringify).map(m => m.toString().toLowerCase());
        let uniqueArray = [...new Set(stringified)].map(JSON.parse);
        return uniqueArray;
    },

    maxInArray: function (input) {
        let sorted = input.sort((a, b) => a - b);
        return sorted[sorted.length - 1];
    },

    getEvenNumbers: function (input) {
        return input.filter(f => f % 2 === 0);
    },

    findLargestInNestedArray: function (input) {
        let flattened = input.flatMap((fm) => {
            if (typeof fm === "object") {
                return fm.flat();
            }
            else {
                return fm;
            }
        });
        let sorted = flattened.sort((a, b) => a - b);
        return sorted[sorted.length - 1];
    },

    getArraySorted: function (input, sortDirection) {
        let isNumberString = function (str) {
            return Number.isFinite(Number(str));
        };
        let sort = function (inp, sortBy) {
            return inp.sort(sortBy);
        };
        let result = [];
        let dir = sortDirection.toLowerCase();
        if (dir === 'asc' || dir === 'ascending') {
            if (input.every((element) => typeof element === 'string')) {
                if(input.every((e) => isNumberString(e))) {
                    result = sort(input, (a, b) => parseFloat(a) - parseFloat(b));
                }
                else {
                    result = sort(input, (a, b) => a.toString().localeCompare(b));
                }
            }
            if (input.every((element) => typeof element === 'number')) {
                result = sort(input, (a, b) => a - b);
            }
        }
        if (dir === 'desc' || dir === 'descending') {
            if (input.every((element) => typeof element === 'string')) {
                if(input.every((e) => isNumberString(e))) {
                    result = sort(input, (a, b) => parseFloat(b) - parseFloat(a));
                }
                else {
                    result = sort(input, (a, b) => b.toString().localeCompare(a));
                }
            }
            if (input.every((element) => typeof element === 'number')) {
                result = sort(input, (a, b) => b - a);
            }
        }
        return result;
    }

};

module.exports = obj;