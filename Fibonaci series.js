function Fibonacci(n) {
    let fibonacciSeries = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibonacciSeries.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return fibonacciSeries;
}
let series = Fibonacci(10);
console.log(series);