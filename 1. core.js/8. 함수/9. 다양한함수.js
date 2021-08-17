// 함수 정의부

function aaa() {

}

function bbb() {

}

function ccc() {

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 코드 실행부

aaa();
bbb();
ccc();

// *즉시실행 함수 (영역화시키는 것.)
(function() {
    console.log('야호');
}) ();  // 정의와 실행을 한번에, 함수를 만들자 마자 바로 콜.

console.log('----------------재귀함수----------------------');

function countdown(n) {
    /* if (n < 0) return;
     console.log(n);
     countdown(n-1); */

    for (i = n; i >= 0; i--){
        console.log(i);            // for문으로 하면 더 쉬운데, 시험문제에 나와서 알아둬야함.
    }
}

countdown(5);

console.log('--------------quiz-------------------');

function compute(num) {
    if (num <= 1) return num;
    return compute(num - 1) + compute(num - 3);
}

console.log(compute(4));

/*
call 1 : compute(4) - > c(3) + c(1)

call 2 : c(3) -> c(2) + c(0)  / c(1)은 if에 걸려서 return num => 1

call 3 : c(2) -> c(1) + c(-1) = 1 + (-1) = 0 / c(0) = 0

*/


console.log('-------------중첩 함수 ------------------------');

function outer() {
    console.log('outer call');
    var x = 1;

    // inner는 outer의 전용함수. 따라서 outer 영역(블록) 내부에서만 호출이 가능하다.
    function inner() {
        console.log('inner call');
    }

    inner();

}

outer();
// inner();  // -> 에러남. ReferenceError: inner is not defined

console.log('--------함수 리터럴, 화살표 함수(ES6)---------');

function add(n1, n2) {
    return n1 + n2;
}

//함수 리터럴로 표현 (함수를 '값'으로 사용.)

var add = function(n1, n2) {
    return n1 + n2;
};

//화살표 함수
var add = (n1 ,n2) => {
    return n1+n2;
};

//{} 안에 코드가 한줄밖에 없으면 {} 생략 가능. return문이라면, return도 생략 가능.

var add = (n1, n2) => n1 + n2;

var result = add(10, 20);
console.log(result);

console.log('-----------------');
// function sayHello() {
//     console.log('안녕하세요~');
// }

//리터럴 -> 화살표로
var sayHello = () => console.log('안녕하세요~');  // 매개변수 없어도 소괄호 생략은x


sayHello();

console.log('--------------------------------------');

//정수 n을 전달하면 해당 정수가 짝수인지 판별(true or false)
function isEvenNumber(n) {
    return n % 2 === 0;
}

// 위에거를 화살표 함수로
var isEvenNumber = n => n % 2 === 0;  // 매개변수가 하나면 소괄호 생략o

console.log(isEvenNumber(5));

console.log('------------------------');
//정수 n을 전달하면 n의 제곱값이 리턴되는 화살표함수

var doubleMultiply = n => n ** 2;

