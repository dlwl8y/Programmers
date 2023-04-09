function solution(sides) {
    const result = sides.sort((a,b) => a-b);
    return result[0]+result[1] > result[2] ? 1 : 2;
}