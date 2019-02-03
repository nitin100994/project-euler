// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const euler005 = (number)=>{
    const len = number.length;
    let lcm = 1 ,divisor = 2;

    while(true){
        let count = 0;
        let divisible = 0;
        for(let i=0;i<len;i++){

            if(number[i] === 0)
            return 0;

            if(number[i] < 0)
            number[i]*=(-1);
            
            if(number[i] === 1)
            count++;

            if(number[i]%divisor === 0)
            {
                number[i]/=divisor;
                divisible++;  
            }
        }
        if(divisible)
        lcm*=divisor;
        else
        divisor++;

        if(count === len)
        return lcm;
    } 
}
let number = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(euler005(number));