function solution(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const len = sorted.length;
    const candi1 = sorted[len - 1] * sorted[len - 2];
    const candi2 = sorted[0] * sorted[1];
    return Math.max(candi1, candi2);
}