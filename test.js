var sum = 0;

function summ() {
    if (arguments.length < 1) {
        return sum;
    }

    console.log(arguments)
    for (var i in arguments) {
        sum += arguments[i];
    }

    return summ;
};


console.log(summ(2, 1)(9)());

function fibo(n) {
    var a = 0;
    var b = 1;
    var f = 1;

    for (var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}

console.log(fibo(19));
