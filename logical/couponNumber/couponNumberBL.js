exports.toFindCouponNumber=(couponNumber)=>{
   try {
    let arr=new Array(10000000);
    while (true) {
        let randomCouponNumber=Math.round(Math.random()*1000000);
        arr.push(randomCouponNumber);
        if (couponNumber===randomCouponNumber) 
        {
            break;
        }  
    }
    return arr;
   } catch (error) {
       console.log(error);
       
   }
}