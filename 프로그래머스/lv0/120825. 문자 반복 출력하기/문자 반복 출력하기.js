function solution(my_string, n) {
    const result = [...my_string].map(el => el.repeat(n)).join('')
    return result;
}