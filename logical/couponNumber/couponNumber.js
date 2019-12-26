const readline=require('readline-sync');
const access=require('./couponNumberBL');
let couponNumber=readline.questionInt('Enter coupon no : ');
let arr=access.toFindCouponNumber(couponNumber)
let set=new Set(arr);
console.log('You won in '+set.size+1+' attempt');

