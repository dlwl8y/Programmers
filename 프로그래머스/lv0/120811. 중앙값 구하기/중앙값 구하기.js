function solution(array) {
    let sortArr = array.sort((a, b) => a-b);
    let index = Math.floor(sortArr.length / 2);
    const result = sortArr[index];
    return result;
}
// return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
