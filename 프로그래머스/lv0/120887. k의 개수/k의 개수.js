function solution(i, j, k) {
    let result = '';
    
    for(i; i <= j; i++){
        result += i;
    }

    return result.split(k).length - 1;
}


// function solution(i, j, k) {
//     let str = Array(j - i + 1).fill(i).map((v, i) => v + i).join('')
//     return Array.from(str).filter(t => +t === k).length;
// }


// function solution(i, j, k) {
//     return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
// }
