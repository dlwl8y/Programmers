function solution(n) {
    if (n % 7 === 0) {
        return Math.floor(n / 7);
    } else if (n % 7 === 7) {
        return 1;
    } else if (n % 7 < 7) {
        return Math.floor(n / 7 + 1);
    }
}

// function solution(n) {
//     return Math.ceil(n / 7)
// }
