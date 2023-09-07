function solution(name, yearning, photo) {
    const memory = {};
    
    for (let i = 0; i < name.length; i++) {
        memory[name[i]] = yearning[i];
    }
    
    const result = photo.map((arr) => 
        arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
    )
    
    return result;
}