function solution(array, n) {
    const absArr = []
    
    array.forEach((el) => {
        absArr.push(Math.abs(el - n));
    });
    const min = Math.min(...absArr);
    
    const result = [];
    
    for (let i = 0; i < absArr.length; i++) {
        if (absArr[i] === min) {
            result.push(array[i]);;
        }
    }
    
    return Math.min(...result);
}