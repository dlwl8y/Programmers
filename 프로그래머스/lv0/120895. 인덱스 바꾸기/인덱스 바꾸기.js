function solution(my_string, num1, num2) {
    let mem = my_string[num1];
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        if (i === num1) {
            result += my_string[num2];
        } else if (i === num2) {
            result += my_string[num1];
        } else {
            result += my_string[i];
        }
    }
    return result;
    
}


// function solution(my_string, num1, num2) {
//   let arr = my_string.split("");
//   [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
//   return arr.join("");
// }
