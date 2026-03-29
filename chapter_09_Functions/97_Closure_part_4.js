function RateLimiter(limit){
    let call = 0;
    function check(){
        call++
        return call <= limit;
    }

    return check;
}

let limiter = RateLimiter(5);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());