var isPalindrome = function(s) {

    //Regex, must be a number 0-9 or a-z. /gi (global match)
    //lower case it so no issues with case matching
    let string = s.replace(/[^0-9a-z]/gi, '').toLowerCase()

    //Reverse the string, then compare.
    //split (string -> array), reverse, join (array-> string)  
    if(string == string.split("").reverse().join('')){
        return true;
    }
    return false;
};
