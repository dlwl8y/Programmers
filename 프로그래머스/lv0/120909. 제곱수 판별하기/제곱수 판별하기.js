function solution(n) {
    const sqrt = Math.sqrt(n);
    
    if (sqrt % 1 === 0) {
        return 1;
    } else {
        return 2;
    }
}