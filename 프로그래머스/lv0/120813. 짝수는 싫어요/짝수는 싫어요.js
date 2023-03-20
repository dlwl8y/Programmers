function solution(n) {
    let answer = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            answer.push(i);
        }
    }
    return answer;
}

// function solution(n) {
//     return Array(n).fill(1).map((v, i) => v + i).filter(v => v % 2 !== 0);
// }
