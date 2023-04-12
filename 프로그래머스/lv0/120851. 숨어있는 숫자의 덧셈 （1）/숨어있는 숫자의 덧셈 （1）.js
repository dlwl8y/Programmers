function solution(my_string) {
    const numbers = '0123456789';
    let sum = 0;
    for (let i of my_string) {
        if (numbers.includes(i)) {
            sum += Number(i);
        }
    }
    return sum;
}