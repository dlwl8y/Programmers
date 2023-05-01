function solution(array) {
    const result = [];
    result[0] = Math.max(...array);
    result[1] = array.indexOf(result[0]);
    
    return result;
}