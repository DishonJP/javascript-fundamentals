/**
 * @module(String)name-user given input
 */
exports.replaceString = (name) => {
    try {
        if (name.length > 2) { //checking length of user string
            let sentence = 'Hello username,How are you';
            let replacedSentence = sentence.replace('username', name); //replacing current string with user string
            return replacedSentence; //returning value
        } else {
            console.log('String should have minimum of 3 character');
            return ''; //retuning empty string for validation purpose
        }
    } catch (error) {
        console.log(error);

    }
}