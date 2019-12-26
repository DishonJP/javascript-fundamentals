
try {
    exports.replaceString=(name)=>{
        let sentence='Hello username,How are you';
    let replacedSentence=sentence.replace('username',name);
    return replacedSentence;
    }
} catch (error) {
    console.log(error);
    
}