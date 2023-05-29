function solution(num_list, n) {
    const result = [];
    
    for (let i = 0; i < num_list.length / n; i++) {
        result.push(num_list.slice(i * n, i * n + n));
    }
    
    return result;
}