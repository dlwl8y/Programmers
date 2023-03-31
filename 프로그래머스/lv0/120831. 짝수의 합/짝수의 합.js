function solution(n) {
    let result = 0;
    for (let i = 2; i <= n; i += 2) {
        result += i;
    }
    return result;
}

// 수열 공식 활용
// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }
