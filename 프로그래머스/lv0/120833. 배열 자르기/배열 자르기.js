function solution(numbers, num1, num2) {
    let newArr = [];
    
    for (let i = num1; i <= num2; i++) {
        newArr.push(numbers[i]);
    }
    
    return newArr;
}


// function solution(numbers, num1, num2) {
//     return numbers.slice(num1, num2 + 1);
// }


// function solution(numbers, num1, num2) {
//     return numbers.filter((n, i) => num1 <= i && i <= num2);
// }
