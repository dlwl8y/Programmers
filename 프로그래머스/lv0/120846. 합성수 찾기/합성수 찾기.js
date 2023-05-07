function solution(n) {
    let result = 0;
    let count = 2;
    
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                count++;
            }
            if (count >= 3) {
                result++
                break;
            }
        }
        count = 2;
    }
    return result;
}