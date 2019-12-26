exports.toCheckAnagram=(string1,string2)=>{
try {
    string1=string1.split('');
    string2=string2.split('');
    if (string1.length===string2.length) {
        let count=0;
        for (let i = 0; i < string1.length; i++) {
            for (let j = 0; j < string2.length; j++) {
                if (string1[i]===string2[j]) {
                    string2[j]=undefined;
                    count++;
                }
            }    
        }
        if (count===string1.length) {
            console.log('Anagram');
        }else{
            console.log('not a Anagram');
        }
    } else {
        console.log('not a Anagram');
        
    }
} catch (error) {
    console.log(error);
    
}
    
}