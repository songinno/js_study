

// 1. 변수의 중복선언 허용

var x = 10;

var x = 50;  // 같은 스코프에 같은 변수 이름으로 선언, 이렇게 하면 안됨. 오류나야 정상임.

console.log(x); // 50 나옴.

console.log('----------------------');

// 2. 블록 레벨 스코프 지원x

var y = '안녕';   // 전역변수

for (var y = 1; y <= 3; y++) {
    console.log(y);
}
console.log(`y:${y}`);  // 함수로 묶지 않으면, 여기서 안녕이라고 안뜸. 


console.log('---------------------');
//3. 변수 호이스팅  - 선언문은 전부 자동으로 위로 올라간다.

z = 100;
console.log(z);  // 100 나옴. 선언 안했는데

var z;  // 이렇게 써도 오류 안뜸.