// Program to find out whether the given number is a Palindrome or not.

function checkPalindrome(string){

    // Convert string to an array
    const arrayValues = string.split(''); // ['h', 'e', 'l', 'l', 'o']

    // Reverse the array
    const reversedArrayValues = arrayValues.reverse(); // ['o', 'l', 'l', 'e', 'h']

    // Convert array to string
    const reverseString = reversedArrayValues.join(''); // olleh
    
    // Check if the original string matches the reversed string
    if(string === reverseString){
        console.log("Given String is Palindrome");
    }
    else{
        console.log("Given string is not a Palindrome");
    }
}

const string = prompt("Enter a string for Palindrome Check :")
checkPalindrome(string);