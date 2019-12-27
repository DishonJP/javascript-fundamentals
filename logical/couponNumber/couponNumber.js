/**
 * Execution   : default node    cmd>node.couponNumber.js
 * 
 * purpose     : To find coupon number
 * 
 * 
 * @description
 * 
 * @file        :couponNumber.js
 * @overview    :Generate n random numbers and find the user entered number
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :27-12-2019
 * */
const readline = require('readline-sync');
const access = require('./couponNumberBL');
let couponNumber = readline.questionInt('Enter coupon no : ');
let arr = access.toFindCouponNumber(couponNumber)
let set = new Set(arr); //to store only unique datas
console.log('You won in ' + set.size + 1 + ' attempt'); //to find the size of the array