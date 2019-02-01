//Multiples of 3 and 5

const euler001 = ()=>{
    let sum=0;
   for(let i=3;i<10;i++){
       if(i%3==0 || i%5==0){
           sum+=i;
       }
   }
   console.log(sum);
}

euler001();