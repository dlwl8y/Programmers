function solution(my_string) {
    let result = '';
    
    for (let i of my_string) {
        if (i === i.toUpperCase()) {
            result += i.toLowerCase();
        } else if (i === i.toLowerCase()) {
            result += i.toUpperCase();
        }
    }   
    return result;
}