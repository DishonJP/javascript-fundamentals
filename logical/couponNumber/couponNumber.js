/**
 * Execution   : default node    cmd>node.couponNumber.js
 * 
 * purpose     : To find coupon number
 * 
 * 
 * @description :Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number? This program simulates this random process.
 * @file        :couponNumber.js
 * @overview    :Generate n random numbers and find the user entered number
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const readline = require('readline-sync');
const access = require('./couponNumberBL');
let couponNumber = readline.question('Enter coupon no : ');
if (couponNumber === '') {
    console.log('Give valid input');

} else {
    let arr = access.toFindCouponNumber(couponNumber)
    let set = new Set(arr); //to store only unique datas
    console.log('You won in ' + set.size + 1 + ' attempt'); //to find the size of the array
}