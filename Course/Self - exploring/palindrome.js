// palindrome: word that remains the same after reversing it
// Check given parameter is palindrome or not
function checkPalindrome(woord) {
    let checkreverse = "";


    for (let i = woord.length; i > 0; i--) {
        checkreverse += woord[i - 1];
    };

    if (checkreverse === woord) {
        return `${woord} is a palindrome`;
    }

    return `${woord} is not a palindrome`;

};


console.log(checkPalindrome("anna"))