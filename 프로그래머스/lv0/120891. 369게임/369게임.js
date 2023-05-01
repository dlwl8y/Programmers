function solution(order) {
    let result = [...String(order)].map((el) => Number(el));
    return result.reduce((a, c) => c % 3 === 0 && c !== 0 ? a += 1 : a += 0, 0);
}


// function solution(order) {
//     return [...order.toString().matchAll(/[3|6|9]/g)].length;
// }
