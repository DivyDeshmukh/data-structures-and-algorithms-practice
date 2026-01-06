// 17-07-25
function primeNumber(n) {

    if ( n === 0) return false; // 0 is not a prime number
    if ( n === 1) return false; // 1 is neither prime nor composite

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Not a prime number if divisible by any number other than 1 and itself
        }
    }

    return true; // If no divisors found, it is a prime number
}

// console.log(primeNumber(13)); // Output: true
// to print prime numbers in a range then simply implement a outer loop from start to end and call this function inside the loop
// Time:-  A simple trial division check up to (sqrt{n}) takes (O(sqrt{n})) time

// Optimized Approach with Sieve of Eratosthenes
function sieveOfEratosthenes(limit) {
    const primes = Array.apply(null, Array(limit + 1)).map(() => true);
    primes[0] = primes[1] = false;
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (primes[i] === true) {
            for (let j = i*i; j <= limit; j += i) {  // Mark multiples of i as false & starting from i*i because smaller multiples will already be marked so no need to check them again
                primes[j] = false;
            }
        }
    }
    
    return primes.reduce((acc, isPrime, index) => {
        if (isPrime) {
            acc.push(index); // Collecting all prime numbers
        }
        return acc;
    }, []);
}

console.log(sieveOfEratosthenes(30)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// Main logic is:- Every composite number \(n\) has at least one prime factor \(p\) such that \(p\le \sqrt{n
// Time:- (O(nloglog n)) The complexity arises from the sum of the series \(n/2+n/3+n/5+n/7+\dots \), which is the harmonic progression of the sum of primes.