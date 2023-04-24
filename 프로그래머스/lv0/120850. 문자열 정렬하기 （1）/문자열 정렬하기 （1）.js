function solution(my_string) {
    const result = my_string.split('').map(Number).filter(el => !isNaN(el)).sort((a,b) => a-b);
    return result;
}


// function solution(my_string) {
//     return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
// }


// function solution(my_string) {
//     return my_string.replace(/[^0-9]+/g, '').split('').map(val => +val).sort((a, b) => a - b);
// }
