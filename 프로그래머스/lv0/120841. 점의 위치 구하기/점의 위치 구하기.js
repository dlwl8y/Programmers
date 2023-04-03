function solution(dot) {
    const [x, y] = dot;
    
    if (0 < x && 0 < y) {
        return 1;
    } else if (0 > x && 0 < y) {
        return 2;
    } else if (0 > x && 0 > y) {
        return 3;
    } else if (0 < x && 0 > y) {
        return 4;
    }
}