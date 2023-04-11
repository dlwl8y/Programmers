function solution(my_string) {
    const vowels = 'aeiou'
    let result = my_string.split('').filter((v) => (!vowels.includes(v))).join('');
    
    return result;
}