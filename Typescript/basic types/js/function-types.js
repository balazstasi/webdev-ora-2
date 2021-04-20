"use strict";
function addHandler(a, b, handle) {
    var res = a + b;
    handle(res);
    return res;
}
var printNum = function (num) {
    console.log(num);
};
var sum = addHandler(10, 5, printNum);
console.log("Sum", sum);
