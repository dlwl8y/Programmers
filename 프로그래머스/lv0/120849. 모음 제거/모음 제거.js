function solution(my_string) {
    const vowels = 'aeiou'
    let result = my_string.split('').filter((v) => (!vowels.includes(v))).join('');
    
    return result;
}


// function solution(my_string) {
//     return my_string.replace(/[aeiou]/g, '');
// }
