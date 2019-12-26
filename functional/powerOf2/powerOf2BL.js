try {
    exports.powerOf2=(nthNumber)=>{
        let i=0;if (nthNumber>0) {
            while (i<=nthNumber) {
                console.log('2 power '+i+' is '+Math.pow(2,i));
                i++;
            }
        } else {
            console.log('value should be greater than 0');
        }
        
    }
} catch (error) {
    console.log(error);
}