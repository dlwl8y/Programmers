function solution(array, n) {
    return array.reduce((acc, cur) => n === cur ? acc + 1 : acc, 0);
}