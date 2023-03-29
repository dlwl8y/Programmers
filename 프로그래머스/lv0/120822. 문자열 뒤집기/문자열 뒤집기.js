function solution(my_string) {
    let result = '';
    
    for (let i = my_string.length - 1; i >= 0; i--) {
        result += my_string[i];
    }
    return result;
}

// function solution(my_string) {
//     return my_string.split('').reverse().join('');
// }

// function solution(my_string) {
//     var answer = [...my_string].reverse().join("");
//     return answer;
// }
