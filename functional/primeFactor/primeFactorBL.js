/**
 *module.exports.primeFactor=(nthNo)=>{ @param {number} nthNo - value
 {
     @param {loop}              -to loop till nth number
     @return {boolean} primeno  -generates prime number from 2 to nth number
     @param {condition}  if     -to filter prime numbers
     {
        @param {number,number} (index,nthno)    -        
     }
     blend: function findPrimeNo(index) {
         @param {loop}          -to loop from 2 to n/2
         {
             @param {condition} - to check a number is prime no or not
             @return {boolean}
         }
     }
     darker: function isFactor(index,nthno){
        @param {loop}           -to check nth value not equal to 0
        {
            @param {condition} if  -to check nth number is divisible by prime number
            {
                @return {number} index -to print the value
            }
            @param {condition}  else- to break the loop
        }
     }
 }  
 **/exports.primeFactor=(nthno)=>{
    try {
        console.log('Prime Factor of '+nthno+' are ');
    for (let index = 2; index <=nthno; index++) {
        let primeno=findPrimeNo(index);
        if (primeno) {
            //console.log(index);
            isFactor(index,nthno);
        }
    }
    function findPrimeNo(index) 
    {
     let i=2;
     while (i<=index/2) 
     {
         if (index%i!=0) {
             i++;
         }
         else
         return false;
     }   
     return true;
    }
    function isFactor(index,nthno) 
    {
        while (nthno!=0) 
        {
           if (nthno%index==0) 
           {
               nthno=nthno/index;
               console.log(index);
           }
           else
           {
               break;
           } 
        }
    }      
    } catch (error) 
    {
        console.log(error);    
    }
}