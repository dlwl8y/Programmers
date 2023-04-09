function solution(my_string, n) {
    const result = [...my_string].map(el => el.repeat(n)).join('')
    return result;
}


// function solution(my_string, n) {
//     return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
// }


// function solution(my_string, n) {
//     let result = '';
//     for (let i of my_string) result+=i.repeat(n);
//     return result;
// }
