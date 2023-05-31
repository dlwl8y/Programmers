function solution(emergency) {
    // [...emergency] 대신 emergency.slice() 도 가능
    const sorted = [...emergency].sort((a, b) => b - a);
    return emergency.map(v => sorted.indexOf(v) + 1);
}
