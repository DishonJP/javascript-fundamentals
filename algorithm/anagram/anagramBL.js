/**
 * @module(String,String)string1,string2 - used for finding anagram
 */
exports.toCheckAnagram = (string1, string2) => {
    try {
        string1 = string1.split(''); //spliting char by char
        string2 = string2.split('');
        if (string1.length === string2.length) { //comparing both string lengths
            let count = 0;
            for (let i = 0; i < string1.length; i++) {
                for (let j = 0; j < string2.length; j++) {
                    if (string1[i] === string2[j]) { //checking whether the char matches
                        string2[j] = undefined; //to avoid duplicate char
                        count++;
                    }
                }
            }
            if (count === string1.length) { //checking both strings are anagram
                console.log('Anagram');
            } else {
                console.log('not a Anagram');
            }
        } else {
            console.log('not a Anagram');

        }
    } catch (error) {
        console.log(error);

    }

}