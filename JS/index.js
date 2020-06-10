function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-- Milestone 1 - Fibonacci-- //
function milestone1() {
    let milestone1Text = document.getElementById("milestone1");
    let fibonacciIndex = getRndInteger(0, 10);
    let fibonacciSeq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    milestone1Text.innerText = `The fibonacci of ${fibonacciIndex} is ${fibonacciSeq[fibonacciIndex]}`;
}

milestone1();

//--Milestone 2 --//
function fibonacci(index) {
    fibonacciSeq = [0, 1];
    for (i = 2; i <= index; i++) {
        fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
    }
    return fibonacciSeq[index];
}

function milestone2() {
    milestone2Text = document.getElementById("milestone2");
    fibonacciIndex = getRndInteger(0, 20);
    milestone2Text.innerText = `The fibonacci of ${fibonacciIndex} is ${fibonacci(
    fibonacciIndex
  )}`;
}

milestone2();

//--Milestone 3--//
let milestone3Index = document.getElementById("milestone3Index");
let milestone3result = document.getElementById("milestone3result");
let button = document.getElementById("btnCalculator");

console.log("value", fibonacci(milestone3Index.value));

milestone3result.innerText = button.addEventListener(
    "click",
    fibonacci(milestone3Index.value)
);

console.log("result", milestone3result.innerText);

//--Milestone 3.1 Geekout--
milestone3GeekText = document.getElementById("milestone3Geekout");
fibonacciIndex = getRndInteger(0, 20);

function fibonacciRecursion(index) {
    if (index < 2) return index; // Case for 0 and 1
    return fibonacciRecursion(index - 1) + fibonacciRecursion(index - 2); //case for 2 and bigger
}
console.log(fibonacciRecursion(fibonacciIndex));
milestone3GeekText.innerText = `The fibonacci of ${fibonacciIndex} is ${fibonacciRecursion(
  fibonacciIndex
)}`;