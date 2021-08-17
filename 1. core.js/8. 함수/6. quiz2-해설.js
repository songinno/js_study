/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
  약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
   나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

/* 약수 개수 구하기 
function calcDivisor(targetNumber) {
  var count = 0;
  for (var n = 1; n <= targetNumber; n++) {
    if (targetNumber % n === 0) {
      count++;
    }
  }
  return count;
} */

//2
function calcDivisor(targetNumber) {
  var divisors = []; // 약수들을 저장할 배열을 만듦.
  for (var n = 1; n <= targetNumber; n++) {
    if (targetNumber % n === 0) { // 나누어 떨어졌을 때(약수)
      divisors.push(n); // 해당 피제수를 배열에 저장.
    }
  }
  console.log(`${targetNumber}의 약수: [${divisors}]`);
  return divisors.legnth;
}



var divCount = calcDivisor(15);
console.log(`약수의 개수: ${divCount}개`);
