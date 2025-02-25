// Generates Fibonacci sequence overview
function generateFibonacci(n) {
    let reeks = [];

    // generates fibonacci for given n length
    for (let i = 0; i < n; i++) {

        if (i <= 1) {
            reeks.push(i);
        } else {
            // pushes addition of of two numbers using sequence
            reeks.push(reeks[i - 1] + reeks[i - 2]);

        }
        // otherway to handle fibonacci
        // reeks[i] = reeks[i-1] + reeks[i-2];
    }

    console.log(reeks);
};



// Checks if given 'n' parameter is a prime number
function isPrime(n) {
    if (n <= 1) {
        return false;
    };

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        };
    };

    return true;
};


console.log(isPrime(17));
generateFibonacci(21);
