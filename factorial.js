// Program to find out factorial of the given number.

function factorial(num){

    // Check if number entered is negative
    if(num<0){
        console.log(`Error! Factorial for negative number does not exist.`);
    }

    // If not
    else{

        // Check if the number is 0
        if(num == 0){

            // Factorial of 0 is 1
            console.log(`The Factorial of ${num} is 1.`);
        }

        // If the number is positive
        else{
            let fact = 1;
            for(let i=1; i<=num; i++){
                fact *= i;
            }
            console.log(`The Factorial of ${num} is ${fact}.`);
        }
    }
}

num = prompt("Enter a positive integer : ");
factorial(num);