/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.
*******************************************************************************/

let mySimpleReduce = function (array, cb) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let acc = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const curr = array[j];

            console.log(cb(acc, curr));
            acc = curr;
            sum += acc;
        }

    }
    return sum
};


// let result1 = mySimpleReduce([5, 3, 2, 4], function (sum, el) {
//     return sum + el;
// });
// console.log(result1); // 14

// let result2 = mySimpleReduce([4, 6, 2], function (product, el) {
//     return product * el;
// });
// console.log(result2); // 48

// let result3 = mySimpleReduce([4, 6, 2, 8, 3], function (max, el) {
//     if (el > max) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(result3); // 8



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySimpleReduce;
