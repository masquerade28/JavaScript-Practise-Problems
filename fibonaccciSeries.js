function fibonacciSeries(n) {
    if(n == 0){
        console.log("Invalid Input!");
    }
    else if(n == 1){
        console.log(`Fibonacci Series Upto ${n} terms is : 0`);
    }
    else if(n == 2){
        console.log(`Fibonacci Series Upto ${n} terms is : 0 1`);
    }
    else{

        // Creating an empty array to store values
        let Series = [];

        // Initializing 1st & 2nd term of the series
        let firstTerm = 0;
        let secondTerm = 1;

        // Adding first two terms to the array
        Series.push(firstTerm, secondTerm);

        let nextTerm;

        // Looping from i = 2 because we already added first two terms
        for(let i=2; i<n; i++){

            // In Fibonacci Series the next term is the sum of previous two terms
            nextTerm = firstTerm + secondTerm;

            // Adding nextTerm to array
            Series.push(nextTerm);

            
            firstTerm = secondTerm;
            secondTerm = nextTerm;
        }

        // Converting array into space separated string to display output
        console.log(`Fibonacci Series Upto ${n} terms is : ${Series.join(' ')}`);
    }
}

const n = prompt("Enter number of terms upto which you want Fibonacci Series : ");
fibonacciSeries(n);