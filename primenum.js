module.exports ={
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
function getPrimes(n) {
    var prime= [];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            prime.push(i);
        }
    }
    console.log(prime); 
}
};