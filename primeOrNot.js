// Program to find whether given number is prime or not. 

function primeOrNot(num){
    isPrime = true;

    // Check if the number is equal to 0 or 1
    if(num == 0 || num == 1){
        console.log(`${num} is neither a prime number nor a composite number`);
    }
    else{

        // Dividing num by every number which is less than itself
        for(let i=2; i<num; i++){

            // If it gets divided return false and break
            if(num % i == 0){
                isPrime = false
                break;
            }
        }
        if(isPrime){
            console.log(`${num} is a Prime Number`);
        } 
        else{
            console.log(`${num} is not a Prime Number`);
        }
    }
}

const num = prompt("Enter a number for Prime Number Check");
primeOrNot(num);