function solution(n, t) {
    let result = n;
    
    for (let i = 1; i <= t; i++) {
        result *= 2;
    }
    return result;
}

// function solution(n, t) {
//   return n << t;
// }

// function solution(n, t) {
//   return n * Math.pow(2,t);
// }
