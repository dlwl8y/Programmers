function solution(s1, s2) {
    let result = 0;
    
    for (let i of s1) {
        if (s2.includes(i)) {
            result++
        }
    }
    return result;
}


// function solution(s1, s2) {
//     const intersection = s1.filter((x) => s2.includes(x));
//     return intersection.length;
// }
