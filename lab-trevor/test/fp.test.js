"use strict";

const functional = require('../lib/fp.js').Functional

// describe("sum tests", () => {
//     it("it should return 0 for an empty arrary", () => {
        
//         expect(77).toBe(77);
//     })
// })

describe("testing functions", () => {
    describe("testing the for each function", () => {
        let arr = [1, 2, 3,];
        it("it should double each element in the arr", () => {
            let expected = [2, 4, 6];
            const double = (n) => {return n * 2};
            functional.myForEach(arr, double);
            expect(arr).toEqual(expected);
        })
    })
    describe("testing the map function", () => {
        const arr = [1, 2, 3]
        it("should double all elements in arr return [2, 4, 6]", () => {
            let expected = [2, 4, 6];
            const double = (n) => {return n * 2};
            let result = functional.myMap(arr, double);
            expect(result).toEqual(expected);
        })
    })
    describe("testing the filter function", () => {
        const arr = [3, 8, 12, 13]
        it("should return arr with only even numbers", () => {
            let expected = [8, 12];
            const even = (n) => {return n % 2 ===0};
            let result = functional.myFilter(arr, even);
            expect(result).toEqual(expected);
        })
    })
    describe("testing the reduce function", () => {
        const arr = [2, 5, 8, 15]
        it("should return array that summed the values of original arr", () => {
            let expected = [30];
            let result = functional.myReduce(arr, (x, y) => {x + y});
        })
    })
})