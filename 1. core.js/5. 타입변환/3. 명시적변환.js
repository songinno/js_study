
// 명시적 문자열 변환

var a = 10, b = 20;

//(1)
// var result = String(a) + String(b);

//(2)
// var result = a.toString() + b.toString()

//(3)
var result = '' + a + b;     // '' + 10 = '10' : 문자열 ~> '10' + 20 : 20 도 문자로 바뀜.

console.log(`result: ${result}`);

console.log('====================================');
//명시적 숫자 변환

var m ='100', n = '5.11';
//(1)
// var result2 = Number(m) + Number(n);

//(2)
// var result2 = parseInt(m) + parseFloat(n);    // int는 정수만, float는 소수점까지 변환

//(3) 앞에 + 붙여주기
var result2 = (+m) + (+n);  // 가독성을 위해 ()로 표시해줌. +m + +n 이렇게 써도 상관x

console.log(`result: ${result2}`);

console.log('====================================');
// 명시적 논리변환

// var ex1 = undefined; // falsy한 값이나, 자체가 false는 아님. (falsy한 값이란: 논리 용도로 쓰여질 때 false로 바뀐다는것.)

// var ex1 = Boolean(undefined); // => false
// var ex1 = Boolean(123); // => true
var ex1 = Boolean(null); // => false

console.log(ex1);

var ex2 = !!'메롱';  // => true
/* 설명) !는 논리 부정 연산자. (not의 의미) 
 !'메롱' : 문자에 ! 붙으니까 truthy인지 falsy인지 사용자가 판단하려고 하는구나 라고 생각함. 붙이면 논리가 바뀌어서 falsy니깐, 한번 더 붙여서 true로 돌려놓기위한 용도의 두번째 !를 붙여주는것. (! 하나만 하면 false나옴.)                
*/
console.log(ex2);