function solution(n) {
    let num = String(n);
    let sum = 0;
    
    for (let i of num) {
        sum += Number(i);
    }
    return sum;
}