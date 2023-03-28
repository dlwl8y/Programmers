function solution(age) { 
    const currentYear = new Date().getFullYear();
    const yearOfBirth = (currentYear - age + 1) - 1; // 현재 연도는 2023년이기 때문에 문제의 연도 2022년을 맞추기 위해 -1 추가.
    return yearOfBirth;
}