function solution(my_string) {
    const result = my_string.split('').map(Number).filter(el => !isNaN(el)).sort((a,b) => a-b);
    return result;
}