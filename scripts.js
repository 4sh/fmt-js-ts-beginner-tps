function f1(a) {
    return f2(a**2);
}

function f2(b) {
    const y = 29+f3(b/9);
    return y*8;
}

function f3(c) {
    return 2*3+Math.log(c)**4;
}

[5, 2, 3, 6, 8, 15, 12, 13, 16, 18, 15, 12, 13, 16, 18, 15, 22, 23, 26, 28, 25, 22, 33, 36, 38, 35, 32, 43, 46, 48, 45, 42, 53, 56, 58]
    .map(x => f1(x));