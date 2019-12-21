/**
 * module.exports.harmonicNumber=(nthNo)=>{ @param {number} nthNo - value  
 * @param {loop}            -to go to nth harmonic no
 * {
 *      @return {number} value   -to find nth harmonic value
 * }
 * @param {number} value    -to print the value
 * }
 **/
exports.harmonicNumber=(nthNo)=>{
    try {
        let value=1;
        for (let index = 2 ;index <= nthNo; index++)
        {
            value=value+1/index;
        }
        console.log(value);
    } catch (error) {
        console.log(error); 
    }
    }