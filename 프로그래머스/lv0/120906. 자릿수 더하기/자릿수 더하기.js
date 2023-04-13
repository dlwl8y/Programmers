function solution(n) {
    let num = String(n);
    let sum = 0;
    
    for (let i of num) {
        sum += Number(i);
    }
    return sum;
}


// function solution(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((acc, cur) => acc + Number(cur), 0);
// }
