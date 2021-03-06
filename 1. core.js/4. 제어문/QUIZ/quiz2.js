
// (2) while 반복문의 출력값 예상하기

// 1) 진위형 증가 연산자를 사용한 경우 (++i)

var i = 0;
while (++i < 5) console.log(i); // => +1한 다음에 비교, 참이면 콘솔로그.  1,2,3,4


console.log('````````````````````````````````````````````````````');
// 2) 후위형 증가 연산자를 사용한 경우(i++);

var i = 0;
while (i++ < 5) console.log(i); // => 비교먼저 하고, 참이면 +1 해주고 콘솔로그.


console.log('----------------------------');

var x = 2;

// var y = x++ * 3;

var z = ++x * 3;


// console.log(y);  // => 6 : 곱하기 먼저 하고, ++을 제일 마지막에. 그래서 밑에 x값이 3이됨.
console.log(z); // => 9
console.log(x);