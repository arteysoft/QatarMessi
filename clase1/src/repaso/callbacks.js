var myFunction = function (every10) {
    for (var x = 0; x < 1000000; x++) {
        if (x % 10 === 0) {
            every10(x);
        }
    }
};
var myFunctionAsync = function (next) {
    setTimeout(function () {
        console.log('paso 1');
        next();
    }, 2000);
};
console.log('ORDEN 1');
myFunctionAsync(function () { return console.log('.'); });
console.log('ORDEN 2');
