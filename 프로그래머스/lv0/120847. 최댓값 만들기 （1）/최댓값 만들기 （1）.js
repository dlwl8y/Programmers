function solution(numbers) {
    const n = numbers.sort((a, b) => a - b)
    return n[n.length - 1] * n[n.length - 2];
}