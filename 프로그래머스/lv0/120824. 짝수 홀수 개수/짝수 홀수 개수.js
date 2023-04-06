function solution(num_list) {
    const result = [0, 0];
    
    for (let i of num_list) {
        if (i % 2) {
            result[1] += 1;
        } else {
            result[0] += 1;
        }
    }
    return result;
}