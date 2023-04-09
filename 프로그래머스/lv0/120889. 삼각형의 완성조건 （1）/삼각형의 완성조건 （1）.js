function solution(sides) {
    const result = sides.sort((a,b) => a-b);
    return result[0]+result[1] > result[2] ? 1 : 2;
}


// function solution(sides) {
//     ler result = 0;
//     const max = Math.max(...sides);
//     const sum = sides.reduce((a,b) => a + b, 0) - max;

//     result = max < sum? 1 : 2;

//     return result;
// }
