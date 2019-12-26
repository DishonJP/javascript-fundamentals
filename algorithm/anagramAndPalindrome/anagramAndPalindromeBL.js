const access=require('/home/admin1/Documents/programming/Utility/utility.js');
exports.toFindPrimeNumber=(n)=>{
    try {
        let i=2;
        while (i<=n/2) {
            if (n%i===0) {
                return false;
            }
            i++;
        }
        return true; 
    } catch (error) {
        console.log(error);
        
    } 
}
exports.toFindPalindrome=(n)=>{
    try {
        let holder=n;
    let value=0;
    while(n!==0)
    {     
        let i=Math.floor(n%10);
        n=Math.floor(n/10);
        value=Math.floor(value*10+i);
    }
    if (value===holder) {
        return true;
    }
    else{
        return false;
    }
    } catch (error) {
        console.log(error);
        
    }
}
exports.toFindAnagram=(n)=>{
    try {
        for (let i = 2; i <= 1000; i++) {
            let toFindAnagram=this.toFindPrimeNumber(i);
            if (toFindAnagram) {
                if(i!==n)
                {
                    let number1=n.toString();
                    let number2=i.toString();
                    let anagram=access.toCheckAnagram(number1,number2);
                    if (anagram) {
                        console.log(i+' and '+n+' are anagram');    
                    }   
                }
            }
        }
    } catch (error) {
        console.log(error);
        
    }
}