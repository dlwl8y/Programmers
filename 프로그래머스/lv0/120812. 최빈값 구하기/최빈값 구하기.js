function solution(array) {
    const map = new Map();
    array.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })
    const max = Math.max(...map.values())
    let count = 0;
    let result = 0;
    for (const [key, value] of map) {
        if (max === value) {
            count++
            result = key;
        } 
    }
    if (count > 1) {
        return -1
    } else {
        return result;
    }
}

// function solution(array) {
//     let m = new Map();
//     for (let n of array) m.set(n, (m.get(n) || 0)+1);
//     m = [...m].sort((a,b)=>b[1]-a[1]);
//     return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }
