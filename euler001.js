// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.Find the sum of all the multiples of 3 or 5 below 1000.

//My approach 

// const euler001 = ()=>{
//     let sum=0;
//    for(let i=3;i<1000;i++){
//        if(i%3==0 || i%5==0){
//            sum+=i;
//        }
//    }
//    console.log(sum);
// }

//Euler approach
function euler001()
{
    function SumDivisibleBy(n){
        let target = 999;
        p = parseInt(target/n);
        return n*(p*(p+1))/2;
    }
    console.log(SumDivisibleBy(3) + SumDivisibleBy(5) - SumDivisibleBy(15));
}  
euler001();