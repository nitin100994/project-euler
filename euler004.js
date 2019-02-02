// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const euler004 = ()=>{
    let maxthreeDigitNum = 0;
    for(let i=100;i<1000;i++){
        for(let j=100;j<1000;j++){
            var mul=i*j;
            if(isPalindrome(mul) && mul>maxthreeDigitNum)
            maxthreeDigitNum = mul;
        }
    }
    console.log(maxthreeDigitNum);
}

    const isPalindrome = (num)=>{
        temp = num;
        let i=0,reverse=0,remainder=0;
        while(temp>0){
            remainder=temp%10;
            reverse = reverse*10 + remainder;
            temp=parseInt(temp/10);
        }
        if(num === reverse)
            return true;
        else
        return false;
    }
    euler004();