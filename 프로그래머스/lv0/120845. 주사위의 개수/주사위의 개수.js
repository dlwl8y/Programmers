function solution(box, n) {
    const result = box.map(el => Math.floor(el / n)).reduce((acc, cur) => acc * cur);
    return box.map(el => Math.floor(el / n)).reduce((acc, cur) => acc * cur);
}