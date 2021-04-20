"use strict";
// Unknown
var input = 10;
var input2 = 10;
//hibas
// let str1: string = input;
var str2 = input2;
// Never
function generateError(error, code) {
    throw { error: error, code: code };
    while (true) {
        console.log();
    }
}
generateError("error uzenet", 100);
