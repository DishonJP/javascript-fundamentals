const readline=require('readline-sync');
exports.initializeValue=(arr)=>{
   try {
    for (let i = 0; i < arr.length; i++) {
        arr[i]=readline.questionInt('enter the value for index '+i+' : ');  
    }
    return arr;
   } catch (error) {
       console.log(error);
   }
}
exports.distinctTriples=(arr)=>{
    try {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < arr.length; j++) {
                for (let k = 2; k < arr.length; k++) {
                    if(arr[i]+arr[j]+arr[k]===0) {
                        console.log(arr[i],arr[j],arr[k],' are distinct triples');
                        
                    }
                    
                }
                
            }
            
        }
    } catch (error) {
        console.log(error);
        
    }
}