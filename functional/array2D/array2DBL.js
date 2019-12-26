const readline=require('readline-sync');
exports.initializeArray=(row,column)=>{
    try {
        let arr=new Array(row);
    for (var i = 0; i < arr.length; i++) { 
        arr[i] = new Array(column); 
        for (let j = 0; j < column; j++) {
            arr[i][j]=(readline.question('enter the value for index:'+i+','+j+' : '));
        }  
    }
    return arr;
    } catch (error) {
        console.log(error);
        
    }
    
}
exports.displayArray=(intialArray)=>{
try {
    for (let i = 0; i < intialArray.length; i++) {
        for (let j = 0; j < intialArray.length; j++) {
            {
                console.log(intialArray[i][j]);   
            }
        }
    }
} catch (error) {
    console.log(error);
}
}