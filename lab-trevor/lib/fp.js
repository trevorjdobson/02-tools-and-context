"use strict";

const Functional = {};

Functional.myForEach = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = cb(arr[i]);
    }
};

Functional.myMap = (arr, cb) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let result = cb(el);
        newArr.push(result);
    }
    return newArr;
};

Functional.myFilter = (arr, cb) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (cb(el) === true){
        newArr.push(el);
        }
    }
    return newArr;
};

Functional.myReduce = (arr, cb, start=0) => {
    let newArr = start;
    for(let i = 0; i < arr.length; i++){
        newArr = cb(newArr, arr[i]);
    }
    return newArr;
};

module.exports = {};
module.exports.Functional = Functional;