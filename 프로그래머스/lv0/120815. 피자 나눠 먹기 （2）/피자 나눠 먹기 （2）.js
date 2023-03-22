function solution(n) {
    let max = Math.max(n, 6)
    while (n > 0) {
        if (max % n === 0 && max % 6 === 0) {
            return max / 6;
        }
        max++;
    }
}

// function solution(n) {
//     let pizza = 1;
//     while (pizza * 6 % n) {
//         pizza++;
//     }
//     return pizza;
// }
