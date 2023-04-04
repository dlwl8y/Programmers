function solution(my_string, letter) {
    let result = '';
    
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== letter) {
            result += my_string[i];
        }
    }
    return result;
}


// function solution(my_string, letter) {
//     const result = my_string.split(letter).join('')
//     return result;
// }


// function solution(my_string, letter) {
//     let reg = new RegExp(letter, 'g');
//     return my_string.replace(reg, '');
// }


// function solution(my_string, letter) {
//     return my_string.replaceAll(letter, "");
// }
