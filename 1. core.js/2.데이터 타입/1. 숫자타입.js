var decimal = 100;  //정수

var floatingPoint = 3.14; //실수

// typeof연산자 : 값의 타입정보를 알려줌.

console.log(typeof decimal); //number 이라고 뜸.
console.log(typeof floatingPoint); //number이라고 뜸. -> 정수,실수 따로 구분x (다른 언어들은 대부분 구분함. 자바스크립트는 구분x)
// 자바스크립트는 모든 숫자데이터를 실수로 처리함.
console.log(10/4); //->2.5로 나옴. 다른데에서는 2로 나옴. 정수끼리 나눈거라. 보통은 10.0/4.0 이런식으로 해야함.
