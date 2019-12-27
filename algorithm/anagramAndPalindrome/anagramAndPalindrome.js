/**
 * Execution   : default node    cmd>node.anagramAndPalindrome.js
 * 
 * purpose     : To find prime no and anagram and palindrome in range 1 to 1000
 * 
 * 
 * @description :To find prime no and anagram and palindrome in range 1 to 1000
 * @file        :anagramAndPalindrome.js
 * @overview    :Generate values and check whether it is prime no and anagram and palindrome
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :26-12-2019
 * */
const access = require('./anagramAndPalindromeBL');
for (let i = 2; i <= 1000; i++) {
    let primeNumber = access.toFindPrimeNumber(i);
    if (primeNumber) {
        console.log(i + ' is PrimeNumber');
        let isPalindrome = access.toFindPalindrome(i);
        if (isPalindrome) {
            console.log(i + ' is Palindrome');
        }
        access.toFindAnagram(i);
    }
}