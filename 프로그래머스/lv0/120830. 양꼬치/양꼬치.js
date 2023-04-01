function solution(n, k) {
    const lambSkewers = 12_000;
    const drink = 2_000;
    let totalPayment = (lambSkewers * n) + (drink * k);
    
    if (n / 10) {
        totalPayment = totalPayment - (Math.floor(n / 10) * drink);
    }
    
    return totalPayment;
}