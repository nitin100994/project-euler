
// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const euler006 = ()=>{
    let difference = 0;
    difference = squaresOfSum() - sumOfSquares();
    console.log(difference);
}
const sumOfSquares = ()=>{
    let number = 100;
    return (number*(number+1)*(2*number+1))/6;
}
const squaresOfSum = ()=>{
    let number = 100;
    return Math.pow(((number*(number+1))/2),2);
}
euler006();