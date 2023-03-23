function solution(slice, n) {    
    if (n % slice === 0) {
        return n / slice
    } else {
        return Math.floor(n / slice + 1)
    }
}

// function solution(slice, n) {
//     return Math.ceil(n / slice)
// }
