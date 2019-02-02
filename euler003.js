// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const euler003 = ()=>{
    let number=600851475143,maxPrime = 2;
    for(let i=2;i<=number;i++){
        if(number%i === 0){
            while(number%i === 0){
                number/=i;
                if(i > maxPrime)
                maxPrime = i;
            }
        }
    }
    console.log(maxPrime);
}
euler003();