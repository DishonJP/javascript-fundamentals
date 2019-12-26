
try {
    exports.toCheckYear=(year)=>{
        let leapYear;
        if (year.toString().length===4) {
             leapYear=year%400===0 || (year%100!==0 && year%4===0)?'Leap year':'Not a Leap Year';
        } else {
            return 'Year should be of 4 digit';
            
        }
        return leapYear;
    }
} catch (error) {
    console.log(error);
    
}