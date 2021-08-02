
// 논리타입

var logical = true;
console.log(typeof logical);


logical = false;
console.log(typeof logical);

// 소문자로 true, false 외에는 논리로 보지 않는게 정상 (예외도 있음.)

// logical = True;
// console.log(typeof logical);
// ->오류남. (오류났을때 들여쓰기 말고 맨 윗줄만 보면 오류 내용 확인 가능.)
logical = 'true';
console.log(typeof logical);

// undefined타입 -> undefined값 : 변수를 초기화하지 않았을 때 (->undefined 뜨면 변수값을 확인해봐야함.)
var hello;
console.log(hello);

// null : 의도적으로 없는 값 (함수같은거 쓸때, 의도적으로 null 넣음.)
var apple = '사과';
apple = null;
console.log(apple);

// NaN not a number
console.log("hello"* '메롱');