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


// function solution(list) {
//     return list.reduce((acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc), [0, 0])
// }



// function solution(num_list) {
//     const answer = [0,0];

//     for(let a of num_list){
//         answer[a%2] += 1
//     }

//     return answer;
// }
