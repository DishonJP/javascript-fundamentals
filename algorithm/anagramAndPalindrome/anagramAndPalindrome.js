const access=require('./anagramAndPalindromeBL');
for (let i = 2; i <= 1000; i++) {
    let primeNumber=access.toFindPrimeNumber(i);
    if (primeNumber) {
      //console.log(i+ ' is PrimeNumber');
       let isPalindrome=access.toFindPalindrome(i);
        if (isPalindrome) {
            //console.log(i+ ' is Palindrome');    
        }
        access.toFindAnagram(i);
       
    }    
}

