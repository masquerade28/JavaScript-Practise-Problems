// Program that uses a loop, that searches a word in sentence held in an array, returning the index of the word. 

function wordFinder(word, sentence){

    // Convert sentence to an array
    const arrayValues = sentence.split(' ');

    let count = 0;

    // Iterate through array
    for(const values of arrayValues){

        // If word is found return it's index and jump out of the loop
        if(values == word){
            console.log(`Index of ${word} is ${count}`);
            break;
        }

        // Check if it's the end of the array
        if(count == arrayValues.length-1){
            console.log("Error! Word Not Found.");
            break;
        }

        count++;
    }
}

const sentence = 'Hello World I am a treasure hunt sentence';
const word = 'fuck';
wordFinder(word, sentence);